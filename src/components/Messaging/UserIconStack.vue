<template>
  <b-container id="stack" :style="this.shift">
    <UserIcon v-for="icon in this.icons" v-bind="icon" v-bind:key="icon.id" size="50"/>
  </b-container>
</template>

<script>
import UserIcon from "@/components/Messaging/UserIcon";

export default {
  name: "UserIconStack",
  components: {UserIcon},
  props: ["displayNameList"],
  computed: {
    icons() {
      let icons = [{
        id: 0,
        displayName: this.displayNameList[0],
        style: `transform: translateX(${20 * (this.displayNameList.length - 1) - 10}%)`
      }]

      for (let i = 1; i < this.displayNameList.length; i++) {
        icons = [...icons, {
          id: i,
          displayName: this.displayNameList[i],
          style: `transform: translateX(${20 * (this.displayNameList.length - 1) - (20 * i) - 10}%)`
        }]
      }

      return icons
    },

  }
}
</script>
