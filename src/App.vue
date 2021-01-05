<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
