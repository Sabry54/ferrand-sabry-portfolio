<!-- Footer.vue -->
<template>
  <footer class="footer-overlay">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-center">
          <p
            class="text-xs md:text-base text-white hover:text-accent transition-colors cursor-pointer"
          >
            © {{ new Date().getFullYear() }} Ferrand Sabry. All rights reserved.
          </p>
        </div>
        <nav>
          <ul class="flex space-x-3 md:space-x-6">
            <li>
              <a
                href="/mentions-legales"
                class="text-xs md:text-base text-white hover:text-accent transition-colors"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/politique-confidentialite"
                class="text-xs md:text-base text-white hover:text-accent transition-colors"
              >
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Le composant est entièrement statique pour l'instant
</script>

<style scoped>
.footer-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  background: transparent;
  z-index: 40;
  pointer-events: auto;
}

@media (max-width: 768px) {
  .footer-overlay {
    padding: 0.5rem 0;
  }
}
</style>
