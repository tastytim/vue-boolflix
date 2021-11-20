<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/net.png" alt="n"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="(item, index) in links"
            :key="index"
            @click="onclick(item.url)"
          >
            <a class="nav-link" href="javascript:void(0);">{{ item.name }}</a>
          </li>
          
        </ul>
        <div class="d-flex">
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    SearchBar
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
  methods: {
    onclick(url) {
      this.$root.$emit("navbarItemClicked", url);
    },
  },
};
</script>

<style></style>
