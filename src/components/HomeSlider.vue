<template>
  <div
    class="h-full overflow-x-auto snap-x snap-mandatory scroll-smooth md:w-[400vw] flex flex-col md:flex-row"
  >
    <!-- Slide 1 : Introduction -->
    <div
      class="w-full md:w-screen h-screen md:h-full bg-gradient-to-br from-primary to-secondary p-8 flex items-center snap-start"
    >
      <div class="container mx-auto text-white">
        <h2 class="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Design Web Créatif
        </h2>
        <p class="text-xl md:text-2xl max-w-2xl animate-slideUp">
          Création d'expériences numériques uniques et mémorables pour votre
          présence en ligne.
        </p>
      </div>
    </div>

    <!-- Slide 2 : Services -->
    <div
      class="w-full md:w-screen h-screen md:h-full bg-gradient-to-br from-accent to-primary p-8 flex items-center snap-start"
    >
      <div class="container mx-auto text-white">
        <h2 class="text-4xl md:text-6xl font-bold mb-8 animate-fadeIn">
          Mes Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
          <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h3 class="text-xl md:text-2xl font-bold mb-4">Design UI/UX</h3>
            <p>
              Interfaces intuitives et esthétiques qui captivent vos
              utilisateurs
            </p>
          </div>
          <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h3 class="text-xl md:text-2xl font-bold mb-4">
              Développement Web
            </h3>
            <p>Solutions techniques modernes et performantes</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 3 : Portfolio -->
    <div
      class="w-full md:w-screen h-screen md:h-full bg-gradient-to-br from-secondary to-accent p-8 flex items-center snap-start"
    >
      <div class="container mx-auto text-white">
        <h2 class="text-4xl md:text-6xl font-bold mb-8 animate-fadeIn">
          Portfolio
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slideUp">
          <div class="aspect-square bg-white/20 rounded-lg"></div>
          <div class="aspect-square bg-white/20 rounded-lg"></div>
          <div class="aspect-square bg-white/20 rounded-lg"></div>
        </div>
      </div>
    </div>

    <!-- Slide 4 : Contact -->
    <div
      class="w-full md:w-screen h-screen md:h-full bg-gradient-to-br from-primary to-accent flex flex-col snap-start"
    >
      <div class="flex-grow p-8 flex items-center">
        <div class="container mx-auto text-white">
          <h2 class="text-4xl md:text-6xl font-bold mb-8 animate-fadeIn">
            Travaillons Ensemble
          </h2>
          <div class="max-w-xl animate-slideUp">
            <p class="text-xl md:text-2xl mb-8">
              Prêt à donner vie à votre projet ? Contactez-moi pour en discuter.
            </p>
            <router-link
              to="/contact"
              class="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              Me Contacter
            </router-link>
          </div>
        </div>
      </div>
      <Footer class="footer-container hidden md:block" />
    </div>
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Masquer la barre de défilement tout en gardant la fonctionnalité */
.overflow-x-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.footer-container {
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .snap-x {
    scroll-snap-type: y mandatory;
  }
}
</style>
