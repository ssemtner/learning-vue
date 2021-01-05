<template>
  <b-img class="user-icon" rounded="circle" :src="this.src"></b-img>
</template>

<script>
export default {
  name: "UserIcon",
  props: ["displayName", "size"],
  computed: {
    src: function () {
      return `https://ui-avatars.com/api/?size=${this.size}&name=${this.displayName}&background=random`
    }
  }
}
</script>

<style scoped>
.user-icon {
  background-color: gray;
}
</style>