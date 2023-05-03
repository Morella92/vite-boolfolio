<script>
  //import Project from './components/Project.vue'
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      //Project,
      Navbar
    }
  }
</script>

<template>
  <Navbar/>
  
  <main>
    <router-view></router-view>
  </main>
  
  <footer>
    footer
  </footer>
</template>

<style scoped>

</style>
