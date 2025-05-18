<template>
  <div class="slider-wrapper">
    <!-- Container des slides -->
    <div id="sliderTrack" class="slider-track">
      <!-- Slide 1 : Introduction -->
      <div
        class="slide bg-gradient-to-br from-primary to-secondary p-8 flex items-center"
      >
        <div class="container mx-auto text-white">
          <h2 class="text-6xl font-bold mb-6 animate-fadeIn">
            Design Web Créatif
          </h2>
          <p class="text-2xl max-w-2xl animate-slideUp">
            Création d'expériences numériques uniques et mémorables pour votre
            présence en ligne.
          </p>
        </div>
      </div>

      <!-- Slide 2 : Services -->
      <div
        class="slide bg-gradient-to-br from-accent to-primary p-8 flex items-center"
      >
        <div class="container mx-auto text-white">
          <h2 class="text-6xl font-bold mb-8 animate-fadeIn">Mes Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">Design UI/UX</h3>
              <p>
                Interfaces intuitives et esthétiques qui captivent vos
                utilisateurs
              </p>
            </div>
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">Développement Web</h3>
              <p>Solutions techniques modernes et performantes</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 : Portfolio -->
      <div
        class="slide bg-gradient-to-br from-secondary to-accent p-8 flex items-center"
      >
        <div class="container mx-auto text-white">
          <h2 class="text-6xl font-bold mb-8 animate-fadeIn">Portfolio</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slideUp">
            <div class="aspect-square bg-white/20 rounded-lg"></div>
            <div class="aspect-square bg-white/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      <!-- Slide 4 : Contact -->
      <div class="slide bg-gradient-to-br from-primary to-accent flex flex-col">
        <div class="flex-grow p-8 flex items-center">
          <div class="container mx-auto text-white">
            <h2 class="text-6xl font-bold mb-8 animate-fadeIn">
              Travaillons Ensemble
            </h2>
            <div class="max-w-xl animate-slideUp">
              <p class="text-2xl mb-8">
                Prêt à donner vie à votre projet ? Contactez-moi pour en
                discuter.
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

    <!-- Navigation points (desktop only) -->
    <div
      class="nav-dots hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-4"
    >
      <button
        v-for="index in 4"
        :key="index"
        @click="goToSlide(index - 1)"
        class="w-3 h-3 rounded-full bg-white/50 transition-all"
        :class="{ 'bg-white': currentSlide === index - 1 }"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Footer from "./Footer.vue";

const currentSlide = ref(0);
const isAnimating = ref(false);
const touchStart = ref(0);
const touchEnd = ref(0);

const handleWheel = (e) => {
  if (window.innerWidth <= 768) return; // Désactive sur mobile
  e.preventDefault();

  if (isAnimating.value) return;

  const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

  if (Math.abs(delta) < 50) return; // Seuil minimum pour le défilement

  isAnimating.value = true;

  if (delta > 0 && currentSlide.value < 3) {
    currentSlide.value++;
  } else if (delta < 0 && currentSlide.value > 0) {
    currentSlide.value--;
  }

  updateSlidePosition();

  setTimeout(() => {
    isAnimating.value = false;
  }, 500);
};

const handleTouchStart = (e) => {
  touchStart.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  if (window.innerWidth > 768) e.preventDefault();
  touchEnd.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (window.innerWidth <= 768) return;

  const swipeDistance = touchStart.value - touchEnd.value;

  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0 && currentSlide.value < 3) {
      currentSlide.value++;
    } else if (swipeDistance < 0 && currentSlide.value > 0) {
      currentSlide.value--;
    }
    updateSlidePosition();
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
  updateSlidePosition();
};

const updateSlidePosition = () => {
  const track = document.getElementById("sliderTrack");
  if (!track) return;
  const position = currentSlide.value * -100;
  track.style.transform = `translateX(${position}vw)`;
};

onMounted(() => {
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleTouchEnd);
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
});
</script>

<style>
.slider-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

/* Styles pour mobile (< 768px) */
@media (max-width: 768px) {
  .slider-track {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
  }

  .slide {
    width: 100%;
    min-height: 100vh;
  }
}

/* Styles pour desktop (>= 768px) */
@media (min-width: 769px) {
  .slider-wrapper {
    overflow: hidden;
  }

  .slider-track {
    display: flex;
    flex-direction: row;
    width: 400vw;
    height: 100%;
    transition: transform 0.3s ease-out;
    touch-action: none;
  }

  .slide {
    width: 100vw;
    height: 100%;
  }
}

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

.footer-container {
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
