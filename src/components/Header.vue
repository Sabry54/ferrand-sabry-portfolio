<!-- Header.vue -->
<template>
  <header
    class="fixed top-0 left-0 right-0 w-full py-4 z-[100] transition-all duration-300 bg-transparent border-transparent"
  >
    <div class="container flex justify-between items-center">
      <router-link
        to="/"
        class="text-2xl font-bold text-white hover:text-gray-200 transition-colors font-montserrat"
      >
        Ferrand Sabry
      </router-link>

      <!-- Menu Burger -->
      <button
        @click="toggleMenu"
        class="md:hidden flex flex-col justify-center items-end w-12 h-12 relative p-2 z-[200]"
        :class="{ 'menu-open': isMenuOpen }"
      >
        <span class="burger-line line-1"></span>
        <span class="burger-line line-2"></span>
        <span class="burger-line line-3"></span>
      </button>

      <!-- Navigation Desktop -->
      <nav class="hidden md:block">
        <ul class="flex space-x-6">
          <li>
            <router-link
              to="/"
              class="text-white hover:text-gray-200 transition-colors font-montserrat"
              active-class="text-accent"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="text-white hover:text-gray-200 transition-colors font-montserrat"
              active-class="text-accent"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/skills"
              class="text-white hover:text-gray-200 transition-colors font-montserrat"
              active-class="text-accent"
            >
              Skills
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="text-white hover:text-gray-200 transition-colors font-montserrat"
              active-class="text-accent"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Navigation Mobile -->
      <nav
        class="fixed inset-0 bg-primary bg-opacity-95 md:hidden transition-transform duration-300 ease-in-out z-[150]"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        @click="closeMenu"
      >
        <ul class="flex flex-col items-center justify-center h-full space-y-8">
          <li>
            <router-link
              to="/"
              class="text-white text-2xl hover:text-accent transition-colors font-montserrat"
              active-class="text-accent"
              @click="closeMenu"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="text-white text-2xl hover:text-accent transition-colors font-montserrat"
              active-class="text-accent"
              @click="closeMenu"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/skills"
              class="text-white text-2xl hover:text-accent transition-colors font-montserrat"
              active-class="text-accent"
              @click="closeMenu"
            >
              Skills
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="text-white text-2xl hover:text-accent transition-colors font-montserrat"
              active-class="text-accent"
              @click="closeMenu"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<style scoped>
/* Ajout d'une hauteur fixe pour le header */
header {
  height: 72px;
  mix-blend-mode: normal;
}

.burger-line {
  height: 3px;
  background-color: white;
  transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center;
  position: absolute;
  right: 8px;
}

.menu-open .burger-line {
  background-color: white;
  height: 3px;
}

.line-1 {
  width: 32px;
  top: 12px;
}

.line-2 {
  width: 24px;
  top: 20px;
  right: 12px;
}

.line-3 {
  width: 28px;
  top: 28px;
  right: 10px;
}

.menu-open .line-1 {
  width: 32px;
  top: 20px;
  right: 8px;
  transform: rotate(45deg);
  background-color: white;
}

.menu-open .line-2 {
  width: 0;
  opacity: 0;
}

.menu-open .line-3 {
  width: 32px;
  top: 20px;
  right: 8px;
  transform: rotate(-45deg);
  background-color: white;
}

/* Animation d'entrée et de sortie du menu mobile */
.translate-x-full {
  transform: translateX(100%);
}

.translate-x-0 {
  transform: translateX(0);
}
</style>
