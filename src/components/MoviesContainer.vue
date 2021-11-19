<template>
  <div class="moviescontainer">
    <div class="container">
      <h1>MOVIES</h1>
      <div class="row
          row-cols-1
          row-cols-sm-2
          row-cols-md-3
          row-cols-lg-4
          row-cols-xl-5
          row-cols-xxl-6
          g-4">
        <div class="col" v-for="(movie, index) in moviesList" :key="index">
          <Card
            :countStar="countStarsActive"
            :imgUrl="imgUrl"
            :poster_sizes="poster_sizes"
            :poster_path="movie.poster_path"
            :original_title="movie.original_title"
            :title="movie.title"
            :original_language="movie.original_language"
            :vote_average="movie.vote_average"
          ></Card>
        </div>
      </div>
      <h1>TV SHOWS</h1>
      <div class="row
          row-cols-1
          row-cols-sm-2
          row-cols-md-3
          row-cols-lg-4
          row-cols-xl-5
          row-cols-xxl-6
          g-4">
        <div class="col" v-for="(movie, index) in tvShowList" :key="index">
          <Card
            :countStar="countStarsActive"
            :imgUrl="imgUrl"
            :poster_sizes="poster_sizes"
            :poster_path="movie.poster_path"
            :original_title="movie.original_name"
            :title="movie.name"
            :original_language="movie.original_language"
            :vote_average="movie.vote_average"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "MoviesContainer",
  components: {
    Card
  },
  data() {
    return {
      moviesList: [],
      tvShowList: [],
      apiKey: "e498fbee3869e4fa0dc21e97223c41de",
      apiUrl: "https://api.themoviedb.org/3",
      imgUrl: "https://image.tmdb.org/t/p/",
      poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    };
  },
  methods: {
    countStarsActive(i) {
      let list = [];
      let counter = Math.floor(i / 2);
      for (let k = 1; k <= 5; k++) {
        if (counter == 0) {
          list.push({
            active: "",
          });
        } else {
          list.push({
            active: "star-active",
          });
          counter--;
        }
      }
      return list;
    },
    axiosRequest(url, list) {
      axios
        .get(this.apiUrl + url, {
          params: {
            api_key: this.apiKey,
            language: "it",
          },
        })
        .then((resp) => {
          this[list] = resp.data.results;
        });
    },
    axiosRequestWithQuery(url, word, list) {
      axios
        .get(this.apiUrl + url, {
          params: {
            api_key: this.apiKey,
            language: "it",
            query: word,
          },
        })
        .then((resp) => {
          this[list] = resp.data.results;
        });
    },
    doRequestApi(word) {
      if (word == "" || word == null) {
        this.returnToHome();
      } else {
        this.axiosRequestWithQuery("/search/movie", word, "moviesList");
        this.axiosRequestWithQuery("/search/tv", word, "tvShowList");
      }
    },
    returnToHome() {
      //   3 ore per capire che non va inserito "this.array" ma array come stringa "array"
      this.axiosRequest("/movie/popular", "moviesList");
      this.axiosRequest("/tv/popular", "tvShowList");
    },
  },
  mounted() {
    this.returnToHome();
  },
  created() {
    this.$root.$on("searchRequest", (date) => {
      this.doRequestApi(date);
    });
  },
};
</script>

<style lang="scss"></style>
