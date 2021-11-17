<template>
  <div class="moviescontainer">
    <SearchBar @searchRequest="doRequestApi"></SearchBar>
    <ul>
      <li :key="item.id" v-for="item in moviesList">
        {{ item.title }}
        {{ item.original_title }}
        <!-- United Kingdom has 'gb' abbreviation. I check if 'en' and modify it -->
        <country-flag :country='item.original_language === "en"? "gb" : item.original_language' size='small'/>
        {{ item.vote_average }}
      </li>
    </ul>
  </div>
</template>

<script>

import SearchBar from "../components/SearchBar.vue";
import axios from "axios";
// https://www.npmjs.com/package/vue-country-flag
import CountryFlag from 'vue-country-flag'
export default {
  name: "MoviesContainer",
  components: {
    SearchBar, CountryFlag
  },
  data() {
    return {
      moviesList: [],
      apiKey: "e498fbee3869e4fa0dc21e97223c41de",
      apiUrl: "https://api.themoviedb.org/3",
      langFlags: {
        en: "en.png",
      },
    };
  },
  methods: {
    doRequestApi(dates) {
      axios
        .get(this.apiUrl + "/search/movie", {
          params: {
            api_key: this.apiKey,
            query: dates,
          },
          language: "it",
        })
        .then((resp) => {
          this.moviesList = resp.data.results;
        });
    },
  },
};
</script>

<style></style>
