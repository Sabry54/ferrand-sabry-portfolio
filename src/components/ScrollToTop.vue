<!-- ScrollToTop.vue -->
<template>
  <button
    v-if="isMobile"
    class="scroll-to-top"
    @click="scrollToTop"
    :class="{ 'show-scroll-button': showScrollButton }"
  >
    <span class="arrow">↑</span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showScrollButton = ref(false);
const isMobile = ref(window.innerWidth <= 768);

const handleScroll = () => {
  if (isMobile.value) {
    showScrollButton.value = window.scrollY > 300;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", updateIsMobile);
  updateIsMobile();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateIsMobile);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-to-top.show-scroll-button {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top .arrow {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.scroll-to-top:hover .arrow {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 80px; /* Pour éviter le chevauchement avec le footer */
  }
}
</style>
