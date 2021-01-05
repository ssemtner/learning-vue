<template>
  <b-img class="user-icon" rounded="circle" :src="this.src"></b-img>
</template>

<script>
export default {
  name: "UserIcon",
  props: ["displayName", "size"],
  computed: {
    src: function () {
      return `https://ui-avatars.com/api/?size=${this.size}&name=${this.displayName}&background=${this.stringToColor(this.displayName)}`
    }
  },
  methods: {
    stringToColor(str) {
      let hash = 0;
      for (let i = 1; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
      }
      let color = ''
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF
        color += ('00' + value.toString(16)).substr(-2)
      }

      return color
    }
  }
}
</script>
