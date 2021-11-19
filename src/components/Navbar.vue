<template>
  <div class="navbar">
      <div class="col"><img src="../assets/net.png" alt="n" />
      <ul>
      <li v-for="(item, index) in links" :key="index">{{ item.name }}</li>
    </ul>
      </div>
      <div class="col search-col">
    <SearchBar></SearchBar>
    </div>
    
    
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
  name: "Navbar",
  data() {
    return {
      links: [
        {
          name: "Home",
          url: "/movie/popular",
        },
        {
          name: "Discover",
          url: "/discover/movie",
        },
        {
          name: "Top Movies",
          url: "/movie/top_rated",
        },
        {
          name: "Top Tv Series",
          url: "/tv/top_rated",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
