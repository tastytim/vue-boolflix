<template>
  <div class="searchbar">
    <input class="form-control me-2" type="text" v-model="inputText" ref="inputSearchText" @keyup.enter="sendRequestSearch">
    <button 
    class="btn btn-outline-success"
    @click="sendRequestSearch"
    >Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data(){
    return{
      inputText: "",
    }
  },
  methods :{
    sendRequestSearch(){
      this.$root.$emit("searchRequest", this.inputText);
      this.inputText="";
    },
    focusInput(){
      //  <!-- https://michaelnthiessen.com/set-focus-on-input-vue  aggiungere ref al elemento e dare il focus nei metodi focus -->
      this.$refs.inputSearchText.focus();
    }
  },
  mounted(){
    this.focusInput();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
