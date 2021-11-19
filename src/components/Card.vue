<template>
  <div class="custom-card">
    <div>
      <img
        v-if="poster_path != null"
        :src="imgUrl + poster_sizes[4] + poster_path"
        :alt="title"
      />
      <img v-else src="../assets/No-Image.svg.png" alt="image" />
    </div>
    <div class="overlay">
      <div>Title : {{ title }}</div>
      <div>Title orig. : {{ original_title }}</div>
      <!-- United Kingdom has 'gb' abbreviation. I check if 'en' and modify it -->
      <div class="country">
        <span>Country :</span>
        <country-flag
          :country="original_language === 'en' ? 'gb' : original_language"
          size="medium"
        />
      </div>
      <div>
        <i
          v-for="(el, i) in countStar(parseInt(vote_average))"
          :key="i"
          class="fas fa-star"
          :class="el.active"
        >
        </i>
      </div>
    </div>
  </div>
</template>

<script>
// https://www.npmjs.com/package/vue-country-flag
import CountryFlag from "vue-country-flag";
export default {
  components: {
    CountryFlag,
  },
  name: "Card",
  props: {
    poster_path: {
      type: String,
    },
    original_title: {
      type: String,
    },
    title: {
      type: String,
    },
    original_language: {
      type: String,
    },
    vote_average: {
      type: Number,
    },
    countStar: {
      type: Function,
    },
    imgUrl: {
      type: String,
    },
    poster_sizes: {
      type: Array,
    },
  },
};
</script>

<style></style>
