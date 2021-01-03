<template>
  <b-container>
    <b-card title="Dashboard">
      <b-alert variant="success" v-if="user.loggedIn" show="">You are logged in</b-alert>
    </b-card>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
}
</script>

<style scoped>

</style>