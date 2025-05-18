<template>
  <div class="home-container" ref="container">
    <HomeSlider />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HomeSlider from "../components/HomeSlider.vue";

const container = ref(null);
const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

const handleScroll = (e) => {
  if (!isMobile.value && e.deltaY !== 0) {
    e.preventDefault();
    const scrollContainer = container.value.querySelector(".overflow-x-auto");
    if (scrollContainer) {
      const screenWidth = window.innerWidth;
      const scrollAmount = (e.deltaY > 0 ? 1 : -1) * (screenWidth * 0.8);
      scrollContainer.scrollLeft += scrollAmount;
    }
  }
};

onMounted(() => {
  container.value.addEventListener("wheel", handleScroll, { passive: false });
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (container.value) {
    container.value.removeEventListener("wheel", handleScroll);
  }
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.home-container {
  height: calc(100vh - 4rem);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .home-container {
    height: auto;
    overflow: visible;
  }
}
</style>
