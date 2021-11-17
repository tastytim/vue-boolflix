<template>
  <div class="moviescontainer">
    <SearchBar @searchRequest="doRequestApi"></SearchBar>
    <h1>Movies</h1>
    <ul>
      <li :key="item.id" v-for="item in moviesList">
        <div>
          <img
            :src="imgUrl + poster_sizes[3] + item.poster_path"
            :alt="item.title"
          />
        </div>
        <div>{{ item.title }}</div>
        <div>{{ item.original_title }}</div>
        <div>
            <i class="fas fa-star"></i>
        </div>
        <!-- United Kingdom has 'gb' abbreviation. I check if 'en' and modify it -->
        <div>
          <country-flag
            :country="
              item.original_language === 'en' ? 'gb' : item.original_language
            "
            size="medium"
          />
        </div>
        <div>{{ item.vote_average }}</div>
      </li>
    </ul>
    <h1>TV Shows</h1>
    <ul>
      <li :key="item.id" v-for="item in tvShowList">
        <div>
          <div>
            <img
              :src="imgUrl + poster_sizes[2] + item.poster_path"
              :alt="item.title"
            />
          </div>
        </div>
        <div>{{ item.name }}</div>
        <div>{{ item.original_name }}</div>
        <!-- United Kingdom has 'gb' abbreviation. I check if 'en' and modify it -->
        <div>
          <country-flag
            :country="
              item.original_language === 'en' ? 'gb' : item.original_language
            "
            size="small"
          />
        </div>
        <div>{{ item.vote_average }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import SearchBar from "../components/SearchBar.vue";
import axios from "axios";
// https://www.npmjs.com/package/vue-country-flag
import CountryFlag from "vue-country-flag";
export default {
  name: "MoviesContainer",
  components: {
    SearchBar,
    CountryFlag,
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
      countStars(i){
          let stars = [];
          for(let k = 0; i <= Math.floor(i/2);k++){
              stars.push({ element : <i class="fas fa-star"></i>});
          }
          return stars;
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
      this.axiosRequestWithQuery("/search/movie", word, "moviesList");
      this.axiosRequestWithQuery("/search/tv", word, "tvShowList");
    },
  },
  mounted() {
    //   3 ore per capire che non va inserito "this.array" ma array come stringa "array"
    this.axiosRequest("/movie/popular", "moviesList");
    this.axiosRequest("/tv/popular", "tvShowList");
  },
};
</script>

<style lang="scss">


</style>
