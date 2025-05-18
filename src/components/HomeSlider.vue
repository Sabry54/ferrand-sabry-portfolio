<template>
  <div class="slider-wrapper">
    <!-- Container des slides -->
    <div id="sliderTrack" class="slider-track">
      <!-- Slide 1 : Introduction -->
      <div
        class="slide h-screen bg-[#BF4158] p-8 flex items-center"
        :class="{ 'desktop-slide': isDesktop }"
      >
        <div
          class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
        >
          <div class="text-white max-w-xl slide-content order-2 md:order-1">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Design Web Créatif
            </h2>
            <p class="text-xl md:text-2xl max-w-2xl animate-slideUp">
              Création d'expériences numériques uniques et mémorables pour votre
              présence en ligne.
            </p>
          </div>
          <div class="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="../assets/luffy-unicorn.png"
              alt="Mascotte créative"
              class="w-3/4 md:w-full h-auto max-w-[200px] md:max-w-md mx-auto animate-fadeIn"
            />
          </div>
        </div>
      </div>

      <!-- Slide 2 : Services -->
      <div
        class="slide bg-gradient-to-br from-accent to-primary p-8 flex items-center"
        :class="{ 'desktop-slide': isDesktop }"
      >
        <div class="container mx-auto text-white slide-content">
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
        :class="{ 'desktop-slide': isDesktop }"
      >
        <div class="container mx-auto text-white slide-content">
          <h2 class="text-6xl font-bold mb-8 animate-fadeIn">Portfolio</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slideUp">
            <div class="aspect-square bg-white/20 rounded-lg"></div>
            <div class="aspect-square bg-white/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      <!-- Slide 4 : Contact -->
      <div
        class="slide bg-gradient-to-br from-primary to-accent flex flex-col"
        :class="{ 'desktop-slide': isDesktop }"
      >
        <div class="flex-grow p-8 flex items-center">
          <div class="container mx-auto text-white slide-content">
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
      </div>
    </div>

    <!-- Indicateurs de pagination -->
    <div v-if="isDesktop" class="pagination-indicators">
      <button
        v-for="index in 4"
        :key="index"
        @click="goToSlide(index - 1)"
        class="pagination-dot"
        :class="{ active: currentSlide === index - 1 }"
        :aria-label="'Aller au slide ' + index"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";

const currentSlide = ref(0);
const isAnimating = ref(false);
const touchStart = ref(0);
const touchEnd = ref(0);
const isDesktop = computed(() => window.innerWidth > 768);

const handleWheel = (e) => {
  e.preventDefault();

  if (isAnimating.value) return;

  const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

  if (Math.abs(delta) < 50) return;

  isAnimating.value = true;
  const direction = delta > 0 ? 1 : -1;

  if (
    (direction > 0 && currentSlide.value < 3) ||
    (direction < 0 && currentSlide.value > 0)
  ) {
    currentSlide.value += direction;
    animateSlide();
  } else {
    isAnimating.value = false;
  }
};

const handleTouchStart = (e) => {
  touchStart.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  e.preventDefault();
  touchEnd.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const swipeDistance = touchStart.value - touchEnd.value;

  if (Math.abs(swipeDistance) > 50) {
    const direction = swipeDistance > 0 ? 1 : -1;
    if (
      (direction > 0 && currentSlide.value < 3) ||
      (direction < 0 && currentSlide.value > 0)
    ) {
      currentSlide.value += direction;
      animateSlide();
    }
  }
};

const animateSlide = () => {
  const track = document.getElementById("sliderTrack");
  if (!track) {
    isAnimating.value = false;
    return;
  }

  gsap.to(track, {
    x: `${-currentSlide.value * 100}vw`,
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      isAnimating.value = false;
    },
  });
};

const goToSlide = (index) => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  currentSlide.value = index;
  animateSlide();
};

onMounted(() => {
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleTouchEnd);

  const track = document.getElementById("sliderTrack");
  if (track) {
    gsap.set(track, { x: 0 });
  }
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
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slider-track {
  position: relative;
  width: 400vw;
  height: 100%;
  display: flex;
}

.slide {
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
}

/* Styles pour mobile (< 768px) */
@media (max-width: 768px) {
  .slider-track {
    position: relative;
    width: 400vw;
    height: 100%;
    display: flex;
  }

  .slide {
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
  }
}

/* Styles pour desktop (>= 768px) */
@media (min-width: 769px) {
  .slider-track {
    position: relative;
    width: 400vw;
    height: 100%;
    display: flex;
  }

  .slide {
    width: 100vw;
    height: 100%;
    flex-shrink: 0;
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

/* Styles pour les indicateurs de pagination */
.pagination-indicators {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 50;
}

.pagination-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
}

.pagination-dot.active {
  background: white;
  border-color: white;
  transform: scale(1.2);
}

.pagination-dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .pagination-indicators {
    display: none;
  }
}
</style>
