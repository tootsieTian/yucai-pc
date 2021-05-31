<template>
    <menuNav v-if="route.meta.nav"/>
    <router-view/>
    <footerNav v-if="route.meta.foot"/>
</template>

<style lang="scss">
</style>
<script>
  import { useRoute } from 'vue-router'
  import menuNav from "./components/layout/menuNav";
  import footerNav from "./components/layout/footerNav";

  export default {
    components: {footerNav, menuNav},
    setup() {
      const route = useRoute();
      return {
        route
      }
    }
  }
</script>
