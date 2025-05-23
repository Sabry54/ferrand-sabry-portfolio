<!-- Footer.vue -->
<template>
  <footer class="legal-footer">
    <div class="footer-content">
      <p class="footer-text">© 2025 Ferrand Sabry. All rights reserved.</p>
      <div class="footer-links">
        <router-link to="/legal-notice" class="footer-link"
          >Legal Notice</router-link
        >
        <router-link to="/privacy-policy" class="footer-link"
          >Privacy Policy</router-link
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
// Le composant est entièrement statique pour l'instant
</script>

<style scoped>
.legal-footer {
  position: relative;
  width: 100%;
  height: 72px;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  z-index: 100;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.footer-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
}

.footer-text {
  font-size: 0.875rem;
  color: #333;
  font-weight: 400;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: #333;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #666;
}

@media (max-width: 768px) {
  .legal-footer {
    height: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .footer-text {
    font-size: 0.75rem;
  }

  .footer-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-link {
    font-size: 0.75rem;
  }
}
</style>
