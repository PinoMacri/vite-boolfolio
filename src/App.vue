<script>
import AppHeader from "./components/macro-components/AppHeader.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  name: "App",
  components: { AppHeader },
};
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style></style>
