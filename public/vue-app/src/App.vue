<template>
  <main>
    <SidebarComponent />
    <DefaultView />
  </main>
</template>

<script>
import DefaultView from "./components/views/default.vue";
import SidebarComponent from "./components/organisms/sidebar.vue";

export default {
  name: 'App',
  components: {
    DefaultView,
    SidebarComponent
  }
}
</script>

<style scoped>
main {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-flow: row;
}
</style>
