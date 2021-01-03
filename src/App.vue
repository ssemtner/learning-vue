<template>
  <div id="app">
    <div id="nav">
      <b-button-group>
        <router-link class="btn btn-dark" to="/">Home</router-link>
        <router-link class="btn btn-dark" to="/calculator">Calculator</router-link>
        <router-link class="btn btn-dark" to="/dashboard">Dashboard</router-link>
        <b-container v-if="!user.loggedIn">
          <router-link class="btn btn-dark" to="/auth/register">Register</router-link>
          <router-link class="btn btn-dark" to="/auth/login">Login</router-link>
        </b-container>
        <b-container v-else>
          <p>{{ user.data.displayName }}</p>
          <b-button variant="danger" @click.prevent="signOut">Sign Out</b-button>
        </b-container>
      </b-button-group>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "firebase"

export default {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
  outline: none;
}

#nav a.router-link-exact-active {
  background-color: #117a8b;
}

</style>
