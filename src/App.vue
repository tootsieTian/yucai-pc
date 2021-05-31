<template>
  <menuNav></menuNav>
  <router-view/>
</template>

<style lang="scss">
</style>
<script>
  import menuNav from "./components/common/menuNav";
  export default {
    components: {menuNav}
  }
</script>
