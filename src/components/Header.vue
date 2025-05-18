<!-- Header.vue -->
<template>
  <header class="py-4 border-b border-gray-200">
    <div class="container flex justify-between items-center">
      <a
        href="/"
        class="text-2xl font-bold text-primary hover:text-accent transition-colors"
      >
        Ferrand Sabry
      </a>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <a
              href="/"
              class="text-secondary hover:text-accent transition-colors"
              >Accueil</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="text-secondary hover:text-accent transition-colors"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Le composant est entièrement statique pour l'instant
</script>
