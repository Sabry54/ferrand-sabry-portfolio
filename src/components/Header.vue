<!-- Header.vue -->
<template>
  <header class="py-4 border-b border-gray-200">
    <div class="container flex justify-between items-center">
      <router-link
        to="/"
        class="text-2xl font-bold text-primary hover:text-accent transition-colors"
      >
        Ferrand Sabry
      </router-link>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <router-link
              to="/"
              class="text-secondary hover:text-accent transition-colors"
              active-class="text-accent"
            >
              Accueil
            </router-link>
          </li>
          <li>
            <router-link
              to="/a-propos"
              class="text-secondary hover:text-accent transition-colors"
              active-class="text-accent"
            >
              À propos
            </router-link>
          </li>
          <li>
            <router-link
              to="/competences"
              class="text-secondary hover:text-accent transition-colors"
              active-class="text-accent"
            >
              Compétences
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="text-secondary hover:text-accent transition-colors"
              active-class="text-accent"
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
// Le composant est entièrement statique pour l'instant
</script>
