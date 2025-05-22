<!-- Header.vue -->
<template>
  <header
    class="fixed top-0 left-0 w-full h-[72px] z-50 transition-transform duration-300"
    :class="{ 'translate-y-[-72px]': isHeaderHidden }"
  >
    <div class="h-full flex justify-between items-center relative">
      <!-- Fond avec ombrage pour mobile -->
      <div class="header-background"></div>

      <!-- Logo/Nom à gauche -->
      <router-link
        to="/"
        class="text-black text-xl font-bold ml-[2%] hover:text-gray-700 transition-colors relative z-10"
      >
        <span class="hidden md:inline">Ferrand Sabry</span>
        <span class="md:hidden" style="margin-top: -4px">FS</span>
      </router-link>

      <!-- Menu et Burger à droite -->
      <div class="flex items-end mr-[2%] relative z-10">
        <span class="fs-menu-text" style="margin-bottom: -6%">menu</span>
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="ml-2"
          aria-label="Menu"
        >
          <div class="fs-burger-icon" :class="{ open: isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
    >
      <!-- Bouton de fermeture -->
      <button
        @click="isMenuOpen = false"
        class="absolute top-8 right-8 w-12 h-12 flex items-center justify-center"
        aria-label="Fermer le menu"
      >
        <div class="close-icon">
          <span></span>
          <span></span>
        </div>
      </button>

      <nav class="text-white text-center">
        <ul class="space-y-8">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              class="text-2xl hover:text-gray-300 transition-colors"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isHeaderHidden = ref(false);
let lastScrollY = 0;
let ticking = false;

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      // Ne masquer le header que sur mobile
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 72) {
          // Scroll vers le bas
          isHeaderHidden.value = true;
        } else {
          // Scroll vers le haut
          isHeaderHidden.value = false;
        }
      } else {
        isHeaderHidden.value = false;
      }

      lastScrollY = currentScrollY;
      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 2000px;
  margin: 0 auto;
}

.logo {
  font-family: "Aladin", cursive;
  font-size: 2rem;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
}

nav a:hover {
  transform: translateY(-2px);
}

nav a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: black;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-button span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: black;
  margin: 5px 0;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    gap: 2rem;
    box-shadow: none;
  }

  nav.active {
    right: 0;
  }

  .mobile-menu-button.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-menu-button.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-button.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  display: none;
}

@media (max-width: 768px) {
  .header-background {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    gap: 2rem;
    box-shadow: none;
  }

  nav.active {
    right: 0;
  }
}

.fs-burger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
}

.fs-burger-icon span {
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  background: black;
  transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center;
}

.fs-burger-icon span:first-child {
  top: 0;
}

.fs-burger-icon span:nth-child(2) {
  top: 8px;
}

.fs-burger-icon span:last-child {
  top: 16px;
}

/* Animation à l'ouverture */
.fs-burger-icon.open span:first-child {
  transform: translateY(8px) rotate(45deg);
  width: 100%;
}

.fs-burger-icon.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.fs-burger-icon.open span:last-child {
  transform: translateY(-8px) rotate(-45deg);
  width: 100%;
}

/* Animation au survol */
.fs-burger-icon:hover span:first-child {
  transform: translateY(-2px);
}

.fs-burger-icon:hover span:last-child {
  transform: translateY(2px);
}

.fs-burger-icon.open:hover span:first-child,
.fs-burger-icon.open:hover span:last-child {
  transform: none;
}

/* Styles pour la croix de fermeture */
.close-icon {
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
}

.close-icon span {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background: black;
  transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center;
}

.close-icon span:first-child {
  transform: rotate(45deg);
}

.close-icon span:last-child {
  transform: rotate(-45deg);
}

/* Animation au survol de la croix */
.close-icon:hover span:first-child {
  transform: rotate(225deg);
}

.close-icon:hover span:last-child {
  transform: rotate(135deg);
}

.fs-menu-text {
  font-size: 0.875rem;
  color: black;
  text-transform: lowercase;
  font-weight: 300 !important;
  letter-spacing: 0.5px;
}
</style>
