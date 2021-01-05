<template>
  <b-container>
    <b-container v-if="!this.user.loggedIn">
      <b-alert variant="danger" show="">You must be logged in to access your todo list.</b-alert>
      <b-button to="/auth/login" variant="primary" class="m-4">Login</b-button>
      <b-button to="/auth/register" variant="primary" class="m-4">Register</b-button>
    </b-container>

    <b-container v-else-if="tasks.length === 0">
      <b-row>
        <b-col>
          <b-spinner/>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-button @click="loadData" variant="primary">Press to load data</b-button>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-else>
      <h1 class="mb-4">{{ user.data.displayName }}'s Tasks</h1>

      <h3 v-if="tasks.filter(e => !e.completed).length !== 0">Active</h3>
      <b-list-group class="my-4">
        <b-container v-for="task in tasks" v-bind:key="task.id">
          <b-list-group-item v-if="!task.completed">
            <b-row>
              <b-col cols="2">
                <b-button variant="outline-success" @click="complete(task.id)">
                  <b-icon-check/>
                </b-button>
              </b-col>
              <b-col cols="8">
                <h6>{{ task.title }}</h6>
              </b-col>
              <b-col cols="2">
                <b-button variant="outline-danger" @click="removeItem(task.id)">
                  <b-icon-x/>
                </b-button>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-container>
      </b-list-group>

      <h3 v-if="tasks.filter(e => e.completed).length !== 0">Completed</h3>
      <b-list-group class="my-4">
        <b-container v-for="task in tasks" v-bind:key="task.id">
          <b-list-group-item v-if="task.completed">
            <b-row>
              <b-col cols="2">
                <b-button variant="outline-primary" @click="activate(task.id)">
                  <b-icon-arrow-counterclockwise/>
                </b-button>
              </b-col>
              <b-col cols="8">
                <h6>{{ task.title }}</h6>
              </b-col>
              <b-col cols="2">
                <b-button variant="outline-danger" @click="removeItem(task.id)">
                  <b-icon-x/>
                </b-button>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-container>
      </b-list-group>

      <b-form @submit.prevent="addItem" class="mt-4">
        <b-form-group label="Task Title" label-for="nameInput">
          <b-input type="text" required v-model="form.title"></b-input>
        </b-form-group>
        <b-button variant="success" type="submit">Add</b-button>
      </b-form>
    </b-container>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"
import {db} from "@/firebaseInit"

export default {
  name: "Todo",
  data() {
    return {
      doc_id: "",
      form: {
        title: ""
      },
      tasks: [],
    }
  },
  computed: {
    count() {
      return this.tasks.length
    },
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    updateDatabase() {
      let data = []
      this.tasks.forEach(task => {
        data = [...data, {title: task.title, completed: task.completed}]
      })

      db.collection("todos")
          .doc(this.user.data.email)
          .set({
            tasks: data,
          })
    },
    addItem() {
      this.tasks = [...this.tasks, {
        id: this.count,
        title: this.form.title,
        completed: false
      }]
      this.form = {}
      this.updateDatabase()
    },
    removeItem(id) {
      this.tasks.splice(this.tasks.findIndex(e => e.id === id), 1)
      this.updateDatabase()
    },
    complete(id) {
      this.tasks[this.tasks.findIndex(e => e.id === id)].completed = true
      this.updateDatabase()
    },
    activate(id) {
      this.tasks[this.tasks.findIndex(e => e.id === id)].completed = false
      this.updateDatabase()
    },
    loadData() {
      try {
        db.collection("todos").doc(this.user.data.email).get()
            .then((doc) => {
              doc.data().tasks.forEach((task) => {
                this.tasks = [...this.tasks, {
                  id: this.count,
                  title: task.title,
                  completed: task.completed
                }]
              })
            })
      } catch (e) {
        console.log("error")
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>
