<template>
  <b-navbar id="navbar-margin" toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand to="/" exact exact-active-class="active">Vue Example Apps</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/calculator" exact exact-active-class="active">Calculator</b-nav-item>
        <b-nav-item to="/todo" exact exact-active-class="active">Todo</b-nav-item>
        <b-nav-item to="/messaging" exact exact-active-class="active">Messaging</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="user.loggedIn" class="mr-4" :text="user.data.displayName">
          <b-dropdown-item to="/dashboard" exact exact-active-class="active">Dashboard</b-dropdown-item>
          <b-dropdown-item @click="signOut" exact exact-active-class="active">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-else class="mr-4" text="Not Logged In">
          <b-dropdown-item to="/auth/login" exact exact-active-class="active">Login</b-dropdown-item>
          <b-dropdown-item to="/auth/register" exact exact-active-class="active">Register</b-dropdown-item>
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