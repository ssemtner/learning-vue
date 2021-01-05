<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-4">
    <b-navbar-brand to="/">Vue Example Apps</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/calculator">Calculator</b-nav-item>
        <b-nav-item to="/todo">Todo</b-nav-item>
        <b-nav-item to="/messaging">Messaging</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="user.loggedIn" class="mr-4" :text="user.data.displayName">
          <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-else class="mr-4" text="Not Logged In">
          <b-dropdown-item to="/auth/login">Login</b-dropdown-item>
          <b-dropdown-item to="/auth/register">Register</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "firebase";

export default {
  name: "Nav",
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({name: "Home"})
          })
    }
  }
}
</script>