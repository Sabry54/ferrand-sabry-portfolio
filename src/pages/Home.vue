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
  min-height: calc(100vh + 200px);
  overflow: hidden;
  position: relative;
}

/* Masquer la barre de défilement pour différents navigateurs */
.home-container::-webkit-scrollbar {
  display: none;
}

.home-container {
  -ms-overflow-style: none; /* Pour Internet Explorer et Edge */
  scrollbar-width: none; /* Pour Firefox */
}

@media (max-width: 768px) {
  .home-container {
    min-height: calc(100vh + 200px);
    overflow: visible;
  }
}
</style>
