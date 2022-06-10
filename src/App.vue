<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigator from './components/Navigator.vue';
</script>

<template>
  <Navigator />
  <RouterView />
</template>

<style>
body {
  background-color: rgb(240, 240, 240);
  font-family: sans-serif;
}

html, body, #app {
  height: 100%;
}
</style>

<style scoped>
nav a {
  margin: 1em;
}
</style>