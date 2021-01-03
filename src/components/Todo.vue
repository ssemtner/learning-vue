<template>
  <b-container>
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

    <br>

    <b-button variant="primary" @click="saveTasks">Save</b-button>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "@/firebaseInit"

const db = firebase.firestore()

export default {
  name: "Todo",
  data() {
    return {
      doc_id: "",
      form: {
        title: ""
      },
      tasks: []
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
    addItem() {
      this.tasks = [...this.tasks, {id: this.count, title: this.form.title}]
      this.form = {}
    },
    removeItem(id) {
      this.tasks.splice(this.tasks.findIndex(e => e.id === id), 1)
    },
    complete(id) {
      this.tasks[this.tasks.findIndex(e => e.id === id)].completed = true
    },
    activate(id) {
      this.tasks[this.tasks.findIndex(e => e.id === id)].completed = false
    },
    saveTasks() {
      let data = []
      this.tasks.forEach(task => {
        data = [...data, {title: task.title, completed: task.completed}]
      })

      db.collection("todos")
          .doc(this.user.data.email)
          .set({
            tasks: data
          })
    }
  },
  created() {
    db.collection("todos")
        .doc(this.user.data.email)
        .get()
        .then((doc) => {
              doc.data().tasks.forEach((task) => {
                this.tasks = [...this.tasks, {
                  id: this.count,
                  title: task.title,
                  completed: task.completed
                }]
              })
            }
        )
  }
}
</script>

<style scoped>

</style>