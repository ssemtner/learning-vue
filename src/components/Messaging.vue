<template>
  <b-container>
    <b-container v-if="!this.user.loggedIn">
      <b-alert variant="danger" show="">You must be logged in to access your messages.</b-alert>
      <b-button to="/auth/login" variant="primary" class="m-4">Login</b-button>
      <b-button to="/auth/register" variant="primary" class="m-4">Register</b-button>
    </b-container>

    <b-container v-else>
      <h1>Messaging</h1>
      <UserIconStack id="icon-stack" :display-name-list="['Scott Semtner', 'Kelly Semtner', 'Jean Dugan']"/>

      <br>

      <Conversation :doc="this.firestore_doc" current-user="Scott Semtner"/>
    </b-container>
  </b-container>
</template>

<script>
import Conversation from "@/components/Conversation";
import UserIconStack from "@/components/Messaging/UserIconStack";
import {mapGetters} from "vuex"

export default {
  name: "Messaging",
  components: {UserIconStack, Conversation},
  data() {
    return {
      messages: [
        {
          id: 0,
          from: "Scott Semtner",
          text: "I am saying hello",
          side: "right"
        },
        {
          id: 1,
          from: "Mitchell Long",
          text: "This is another person responding",
          side: "left"
        },
        {
          id: 2,
          from: "Mitchell Long",
          text: "Hello how are you doing?",
          side: "left"
        },
        {
          id: 3,
          from: "Scott Semtner",
          text: "I am doing great!",
          side: "right"
        },
      ],
      firestore_doc: "abc@abc.org&sjsemtner@gmail.com"
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
}
</script>

<style scoped>
</style>