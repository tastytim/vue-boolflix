<template>
  <div class="navbar">
      <ul>
          <li v-for="(item , index) in links" :key="index">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
   name: "Navbar",
   data() {
       return {
          links : [
              {  
                  name : "Home",
                  url : "/movie/popular",
              },
              {  
                  name : "Discover",
                  url : "/discover/movie",
              },
              {  
                  name : "Top Movies",
                  url : "/movie/top_rated",
              },
              {  
                  name : "Top Tv Series",
                  url : "/tv/top_rated",
              }
          ]
       }
   },
}
</script>

<style>

</style>