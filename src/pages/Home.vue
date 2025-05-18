<template>
  <div class="home-container">
    <HomeSlider />
  </div>
</template>

<script setup>
import HomeSlider from "../components/HomeSlider.vue";
</script>

<style scoped>
.home-container {
  height: calc(100vh - 72px);
  overflow: hidden;
  position: relative;
}

@media (max-width: 768px) {
  .home-container {
    height: auto;
    overflow: visible;
  }
}
</style>
