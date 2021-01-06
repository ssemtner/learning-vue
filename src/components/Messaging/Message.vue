<template>
  <div>
    <b-row align-h="center" class="m-4">
      <b-col v-if="side === 'right'" cols="0" md="4"/>

      <b-col cols="12" md="8">
        <b-card title="Message">
          <b-card-body>{{ text }}</b-card-body>

          <UserIcon v-if="side === 'left'" class="message-icon left-message-icon bg-primary" size="50"
                    :display-name="this.from"/>
          <UserIcon v-else-if="side === 'right'" class="message-icon right-message-icon" size="50"
                    :display-name="this.from"/>
        </b-card>
      </b-col>

      <b-col v-if="side === 'left'" cols="0" md="4"/>
    </b-row>

    <br>
  </div>
</template>

<script>
import UserIcon from "@/components/Messaging/UserIcon";

export default {
  name: "Message",
  components: {UserIcon},
  props: ["from", "text", "side"]
}
</script>

<style scoped>
.message-icon {
  position: absolute;
  top: 0;
}

.right-message-icon {
  left: 0;
  transform: translate(-50%, -50%);
}

.left-message-icon {
  right: 0;
  transform: translate(50%, -50%);
}
</style>