<template>
  <b-container>
    <b-card title="Register">
      <b-alert variant="success" v-if="msg" show="">{{ msg }}</b-alert>
      <b-alert variant="danger" v-if="error" show="">{{ error }}</b-alert>
      <b-form @submit.prevent="submit">
        <b-form-group label="Name" label-for="name">
          <b-input id="name" type="text" value="" required autofocus v-model="form.name"/>
        </b-form-group>
        <b-form-group label="Email" label-for="email">
          <b-input id="email" type="email" value="" required autofocus v-model="form.email"/>
        </b-form-group>
        <b-form-group label="Password" label-for="password">
          <b-input id="password" type="password" value="" required v-model="form.password"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import firebase from "firebase"

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      msg: null,
      error: null
    }
  },
  methods: {
    submit() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user.updateProfile({displayName: this.form.name})
                .then(() => {
                  this.msg = "Success"
                  this.$router.replace({name: "Dashboard"})
                })
          })
          .catch(err => {
            this.error = err.message
          })
    }
  }
}
</script>

<style scoped>

</style>