<template>
  <div id="app">
    <MoviesContainer></MoviesContainer>
  </div>
</template>

<script>
import MoviesContainer from "./components/MoviesContainer.vue";

export default {
  props:{

  },
  name: "App",
  components: {
    MoviesContainer
  },
  methods:{
    

  }
};
</script>

<style lang="scss">
@import "/src/styles/searchbar.scss";
@import "/src/styles/moviescontainer.scss";
@import "/src/styles/navbar.scss";

html, body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
