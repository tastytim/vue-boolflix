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
    MoviesContainer,Navbar,
  },
  methods:{
  
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "/src/styles/searchbar.scss";
@import "/src/styles/moviescontainer.scss";
@import "/src/styles/navbar.scss";
@import "/src/styles/card.scss";

html, body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #141414;
}
</style>
