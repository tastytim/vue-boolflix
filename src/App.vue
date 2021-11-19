<template>
  <div id="app">
    <Navbar></Navbar>
    <MoviesContainer></MoviesContainer>
  </div>
</template>

<script>
import MoviesContainer from "./components/MoviesContainer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  props:{

  },
  name: "App",
  components: {
    MoviesContainer,Navbar
  },
  methods:{
  
  },
};
</script>

<style lang="scss">
@import "/src/styles/searchbar.scss";
@import "/src/styles/moviescontainer.scss";
@import "/src/styles/navbar.scss";
@import "/src/styles/card.scss";
@import "~bootstrap/scss/bootstrap";

html, body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
