<template>
  <header v-if="showHeader">
    <BHeader />
  </header>

  <router-view />
</template>

<script setup>
import BHeader from './components/BHeader.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Show header unless the current route name is "CountBookAPI"
const showHeader = computed(() => {
  console.log('Current route name:', route.name);
  return route.name !== 'CountBookAPI' && route.name !== 'GetAllBookAPI';
});
</script>