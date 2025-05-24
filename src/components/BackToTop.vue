<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-black/10 hover:bg-black/20 text-black p-3 rounded-full transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
button {
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-50%) scale(1.1);
}

@media (max-width: 768px) {
  button {
    right: 4;
  }
}
</style>
