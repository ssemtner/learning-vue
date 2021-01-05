<template>
  <b-container>
    <Message v-for="message in this.messages" v-bind:key="message.id" v-bind="message"/>
  </b-container>
</template>
<script>
import Message from "@/components/Messaging/Message"
import {db} from "@/firebaseInit";

const conversations = db.collection("conversations")

export default {
  name: 'Conversation',
  components: {Message},
  props: ["doc", "currentUser", "members"],
  data() {
    return {
      data: null,
    }
  },
  computed: {
    messages() {
      try {
        let messages = []

        for (let i = 0; i < this.data.messages.length; i++) {
          let message = this.data.messages[i]
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
  watch: {
    doc: {
      immediate: true,
      handler(doc) {
        this.$bind("data", conversations.doc(doc))
      }
    }
  }
}
</script>
