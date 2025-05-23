<!-- Header.vue -->
<template>
  <header
    class="fixed top-0 left-0 w-full h-[72px] z-50 transition-transform duration-300"
    :class="{
      'translate-y-[-72px]': isHeaderHidden,
      'text-white': $route.path === '/about' && isOverHero,
    }"
  >
    <div class="h-full flex justify-between items-center relative">
      <!-- Fond avec ombrage pour mobile -->
      <div class="header-background"></div>

      <!-- Logo/Nom à gauche -->
      <router-link
        to="/"
        class="text-xl font-bold ml-[2%] hover:text-gray-700 transition-colors relative z-10"
        :class="{
          'text-white hover:text-gray-300':
            $route.path === '/about' && isOverHero,
        }"
      >
        <span class="hidden md:inline">Ferrand Sabry</span>
        <span class="md:hidden" style="margin-top: -4px">FS</span>
      </router-link>

      <!-- Menu et Burger à droite -->
      <div class="flex items-end mr-[2%] relative z-10">
        <span
          class="fs-menu-text"
          :class="{ 'text-white': $route.path === '/about' && isOverHero }"
          style="margin-bottom: -6%"
          >menu</span
        >
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="ml-2"
          aria-label="Menu"
        >
          <div
            class="fs-burger-icon"
            :class="{
              open: isMenuOpen,
              'text-white': $route.path === '/about' && isOverHero,
            }"
          >
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
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Fond du menu avec effet de flou -->
      <div class="menu-background"></div>

      <!-- Bouton de fermeture -->
      <button
        @click="isMenuOpen = false"
        class="absolute top-8 right-8 w-12 h-12 flex items-center justify-center z-10"
        aria-label="Fermer le menu"
      >
        <div
          class="close-icon"
          :class="{ 'text-white': $route.path === '/about' && isOverHero }"
        >
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- Menu -->
      <nav
        class="menu-container text-center z-10"
        :class="{ 'text-white': $route.path === '/about' && isOverHero }"
      >
        <ul class="menu-list">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              class="menu-link"
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
const isOverHero = ref(false);
let lastScrollY = 0;
let ticking = false;

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/?slide=3" },
];

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      // Vérifier si on est sur la page About et dans la section hero
      if (window.location.pathname === "/about") {
        isOverHero.value = currentScrollY < window.innerHeight;
      }

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
  // Vérifier la position initiale
  handleScroll();
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

  /* Ajustement du bouton de fermeture en mobile */
  button[aria-label="Fermer le menu"] {
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: none;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-icon {
    width: 28px;
    height: 28px;
    position: relative;
    z-index: 101;
  }

  .close-icon span {
    background: black;
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
  background: currentColor;
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

/* Styles pour le menu */
.menu-container {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: menuAppear 0.3s ease forwards;
  max-width: 90%;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

.menu-link {
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: block;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.menu-link:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: translateX(5px);
}

@keyframes menuAppear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Ajustement du fond du menu */
.menu-background {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Styles pour la croix de fermeture */
.close-icon {
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
  z-index: 60;
}

.close-icon span {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background: currentColor;
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
  color: currentColor;
  text-transform: lowercase;
  font-weight: 300 !important;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

/* Media queries pour le responsive */
@media (max-width: 768px) {
  .menu-container {
    width: 100%;
    height: 100vh;
    max-width: none;
    border-radius: 0;
    padding: 6rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.98);
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    z-index: 50;
  }

  .menu-list {
    width: 100%;
    max-width: none;
    gap: 2.5rem;
  }

  .menu-link {
    font-size: 2rem;
    padding: 1.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.02);
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
  }

  /* Ajustement du bouton de fermeture en mobile */
  button[aria-label="Fermer le menu"] {
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: none;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-icon {
    width: 28px;
    height: 28px;
    position: relative;
    z-index: 101;
  }

  .close-icon span {
    background: black;
  }
}

@media (max-width: 480px) {
  .menu-container {
    padding: 5rem 1.5rem;
  }

  .menu-link {
    font-size: 1.75rem;
    padding: 1.25rem;
  }
}
</style>
