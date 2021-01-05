<template>
  <b-container>
    <h1>Messaging</h1>
    <br>

    <Message from="Scott Semtner" text="Message Text" side="left"/>
    <Message from="Other Person" text="This is another message" side="right"/>
  </b-container>
</template>

<script>
import Message from "@/components/Messaging/Message";

export default {
  name: "Messaging",
  components: {Message},
}
</script>

<style scoped>

</style>