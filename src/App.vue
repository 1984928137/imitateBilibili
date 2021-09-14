<template>
  <div id="app">
    
      <commHeader />
    
      
      
    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import commHeader from '../src/components/commer_compon/Comm_header.vue'
// import commNav from '../src/components/commer_compon/commNav.vue'

export default {
  name: 'App',
  components:{
    commHeader,
  },
  data() {
    return {
      // vIf:'flase'
    }
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
