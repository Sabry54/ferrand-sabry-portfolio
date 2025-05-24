<script setup>
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const navigationItems = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
]);

// Fonction pour remonter en haut de la page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};

// Surveiller les changements de route
watch(
  () => route.path,
  () => {
    scrollToTop();
  },
  { immediate: true }
);

// Gérer le clic sur les liens
const handleNavigation = (path) => {
  scrollToTop();
  router.push(path);
};
</script>

<template>
  <nav>
    <router-link
      v-for="item in navigationItems"
      :key="item.path"
      :to="item.path"
      @click="handleNavigation(item.path)"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
