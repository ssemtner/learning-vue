<template>
  <b-container>
    <b-container v-if="!this.user.loggedIn">
      <b-alert variant="danger" show="">You must be logged in to access your messages.</b-alert>
      <b-button to="/auth/login" variant="primary" class="m-4">Login</b-button>
      <b-button to="/auth/register" variant="primary" class="m-4">Register</b-button>
    </b-container>

    <b-container v-else-if="this.displayNameList.filter(e => e === this.user.data.displayName).length === 0">
      <b-alert variant="danger" show="">You do not have access</b-alert>
    </b-container>
    <b-container v-else>
      <h1>Messaging</h1>
      <UserIconStack id="icon-stack" :display-name-list="displayNameList"/>

      <br>

      <Conversation :doc="this.firestoreDoc" :current-user="this.user.data.displayName" class="mb-4"/>
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
      firestoreDoc: "abc@abc.org&sjsemtner@gmail.com",
      displayNameList: ["Scott Semtner", "Another Person"]
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
}
</script>

<style scoped>
</style>