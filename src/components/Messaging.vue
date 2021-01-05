<template>
  <b-container>
    <h1>Messaging</h1>
    <br>

    <div v-for="message in this.messages" v-bind:key="message.id">
      <Message v-if="message.from === 'Scott Semtner'" :from="message.from" :text="message.text" side="right"/>
<!--      <Message v-if="message.from === this.current" :from="message.from" :text="message.text" side="right"/>-->
      <Message v-else :from="message.from" :text="message.text" side="left"/>
    </div>
  </b-container>
</template>

<script>
import Message from "@/components/Messaging/Message";

export default {
  name: "Messaging",
  components: {Message},
  data () {
    return {
      current: "Scott Semtner",
      messages: [
        {
          id: 0,
          from: "Scott Semtner",
          text: "I am saying hello"
        },
        {
          id: 1,
          from: "Mitchell Long",
          text: "This is another person responding"
        },
        {
          id: 2,
          from: "Mitchell Long",
          text: "Hello how are you doing?"
        },
        {
          id: 3,
          from: "Scott Semtner",
          text: "I am doing great!"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>