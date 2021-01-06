<template>
  <b-container>
    <Message v-for="message in this.messages" v-bind:key="message.id" v-bind="message"/>

    <b-form @submit.prevent="sendMessage">
      <b-row>
        <b-col cols="10">
          <b-input type="text" v-model="form_message" required class="mt-2"/>
        </b-col>
        <b-col cols="2">
          <b-button type="submit" variant="primary" class="mt-2">Add</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>
<script>
import Message from "@/components/Messaging/Message"
import {db, Timestamp} from "@/firebaseInit";

const conversations = db.collection("conversations")

export default {
  name: 'Conversation',
  components: {Message},
  props: ["doc", "currentUser", "members"],
  data() {
    return {
      firestore_data: null,
      form_message: ""
    }
  },
  computed: {
    messages() {
      try {
        let messages = []

        for (let i = 0; i < this.firestore_data.messages.length; i++) {
          let message = this.firestore_data.messages[i]
          messages = [...messages, {
            id: i,
            from: message.from,
            text: message.text,
            side: message.from === this.currentUser ? "right" : "left"
          }]
        }

        return messages
      } catch (e) {
        return []
      }
    }
  },
  methods: {
    updateDatabase() {
      let data = []
      this.messages.forEach(message => {
        data = [...data, {
          from: message.from,
          text: message.text,
          timestamp: Timestamp.now()
        }]
      })

      conversations
          .doc(this.doc)
          .set({
            messages: data,
          })
    },
    sendMessage() {
      this.firestore_data.messages = [...this.firestore_data.messages, {
        from: this.currentUser,
        text: this.form_message,
        timestamp: Timestamp.now()
      }]

      this.form_message = ""

      this.updateDatabase()
    }
  },
  watch: {
    doc: {
      immediate: true,
      handler(doc) {
        this.$bind("firestore_data", conversations.doc(doc))
      }
    }
  }
}
</script>
