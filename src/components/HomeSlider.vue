<template>
  <div class="slider-wrapper">
    <LightBubbles />
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
            <div class="rotating-title h-[80px] md:h-[100px] overflow-hidden">
              <div class="title-container">
                <h2 class="text-4xl md:text-6xl font-bold font-limelight">
                  Think
                </h2>
                <h2 class="text-4xl md:text-6xl font-bold font-limelight">
                  Build
                </h2>
                <h2 class="text-4xl md:text-6xl font-bold font-limelight">
                  Enhance
                </h2>
                <h2 class="text-4xl md:text-6xl font-bold font-limelight">
                  Engage
                </h2>
              </div>
            </div>
            <div class="mt-4 space-y-2">
              <p class="text-xl md:text-2xl max-w-2xl animate-slideUp">
                Thinking beyond the brief.
              </p>
              <p class="text-xl md:text-2xl max-w-2xl animate-slideUp">
                Building unique digital experiences powered by AI, design, and
                interactivity.
              </p>
              <p class="text-xl md:text-2xl max-w-2xl animate-slideUp">
                Optimizing every detail for maximum impact.
              </p>
              <p class="text-xl md:text-2xl max-w-2xl animate-slideUp">
                Creating real connections, capturing attention, driving true
                engagement.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="../assets/luffy-unicorn.png"
              alt="Creative mascot"
              class="w-3/4 md:w-full h-auto max-w-[200px] md:max-w-md mx-auto animate-fadeIn"
            />
          </div>
        </div>
      </div>

      <!-- Slide 2 : Services -->
      <div
        class="slide bg-[#73CCB4] p-8 flex items-center relative overflow-hidden"
        :class="{ 'desktop-slide': isDesktop }"
      >
        <img
          src="../assets/sanji-smoke.png"
          alt="Sanji smoking"
          class="absolute w-1/3 md:w-1/4 h-auto opacity-100 transition-all duration-300 z-[8]"
          :class="{
            'right-0 top-1/2 -translate-y-1/2': !isMobile,
            'left-8 bottom-8 -translate-x-0': isMobile,
          }"
        />
        <div class="container mx-auto text-white slide-content relative">
          <div class="relative z-[20]">
            <h2
              class="text-5xl md:text-[7.5rem] font-extrabold uppercase tracking-tighter mb-0 animate-fadeIn"
            >
              WELCOME
            </h2>
            <h3
              class="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter mt-0 mb-0 animate-fadeIn"
            >
              TO MY PROJECT
            </h3>
          </div>
          <div class="relative z-[15]">
            <p
              class="text-base md:text-lg font-medium mt-16 mb-8 animate-fadeIn"
            >
              This project is an exploration of vibe coding: a flexible,
              intuitive approach with no rigid roadmap—just moving forward with
              whatever tools feel right. The goal is to experiment, build, and
              adjust in real time without being locked into a fixed structure.
            </p>
          </div>
          <div
            v-if="!isMobile"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp relative z-[10]"
          >
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p>
                Intuitive and aesthetic interfaces that captivate your users
              </p>
            </div>
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">Web Development</h3>
              <p>Modern and efficient technical solutions</p>
            </div>
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">[Case 3]</h3>
              <p>Description for case 3</p>
            </div>
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">[Case 4]</h3>
              <p>Description for case 4</p>
            </div>
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">[Case 5]</h3>
              <p>Description for case 5</p>
            </div>
            <div class="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-4">[Case 6]</h3>
              <p>Description for case 6</p>
            </div>
          </div>
          <div
            class="flex justify-center items-center mt-12 animate-slideUp relative z-[25]"
          >
            <router-link
              to="/about"
              class="group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-bold text-white transition-all duration-500 ease-out rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/30"
            >
              <span class="relative flex items-center text-base tracking-wide">
                Discover More
                <svg
                  class="w-4 h-4 ml-1 transform transition-transform duration-500 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </router-link>
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
              Let's Work Together
            </h2>
            <div class="max-w-xl animate-slideUp">
              <p class="text-2xl mb-8">
                Ready to bring your project to life? Contact me to discuss it.
              </p>
              <router-link
                to="/contact"
                class="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-opacity-90 transition-all"
              >
                Contact Me
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
        :aria-label="'Go to slide ' + index"
      ></button>
    </div>

    <!-- Footer mobile : rendu uniquement après le dernier slide, dans le flux -->
    <div v-if="showFooterMobile" style="width: 100%">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { gsap } from "gsap";
import Footer from "./Footer.vue";
import LightBubbles from "./LightBubbles.vue";

const currentSlide = ref(0);
const isAnimating = ref(false);
const touchStart = ref(0);
const touchEnd = ref(0);
const isMobile = ref(window.innerWidth <= 768);
const isDesktop = computed(() => window.innerWidth > 768);
const showFooterMobile = ref(false);

const burgerOpen = ref(false); // menu burger mobile
const selectedCard = ref(null); // encart sélectionné mobile

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleWheel = (e) => {
  e.preventDefault();

  if (isAnimating.value) return;

  let delta;
  if (isMobile.value) {
    // Sur mobile, scroll vertical
    delta = e.deltaY;
  } else {
    // Sur desktop/tablette, scroll horizontal
    delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  }

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
  if (isMobile.value) {
    touchStart.value = e.touches[0].clientY;
  } else {
    touchStart.value = e.touches[0].clientX;
  }
};

const handleTouchMove = (e) => {
  e.preventDefault();
  if (isMobile.value) {
    touchEnd.value = e.touches[0].clientY;
  } else {
    touchEnd.value = e.touches[0].clientX;
  }
};

const handleTouchEnd = () => {
  let swipeDistance;
  if (isMobile.value) {
    swipeDistance = touchStart.value - touchEnd.value;
  } else {
    swipeDistance = touchStart.value - touchEnd.value;
  }

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

  if (isMobile.value) {
    // Animation verticale sur mobile
    gsap.to(track, {
      y: `${-currentSlide.value * 100}vh`,
      x: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.value = false;
      },
    });
  } else {
    // Animation horizontale sur desktop/tablette
    gsap.to(track, {
      x: `${-currentSlide.value * 100}vw`,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.value = false;
      },
    });
  }
};

const goToSlide = (index) => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  currentSlide.value = index;
  animateSlide();
};

// Affichage différé du footer mobile sur le dernier slide
watch([isMobile, currentSlide], ([mobile, slide]) => {
  if (mobile && slide === 3) {
    setTimeout(() => {
      if (isMobile.value && currentSlide.value === 3) {
        showFooterMobile.value = true;
      }
    }, 400); // délai pour n'afficher le footer qu'après l'arrivée sur le dernier slide
  } else {
    showFooterMobile.value = false;
  }
});

onMounted(() => {
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("resize", updateIsMobile);

  const track = document.getElementById("sliderTrack");
  if (track) {
    gsap.set(track, { x: 0, y: 0 });
  }

  // Animation du titre rotatif
  const titleContainer = document.querySelector(".title-container");
  if (titleContainer) {
    const titles = titleContainer.querySelectorAll("h2");
    let currentIndex = 0;

    const animateTitles = () => {
      gsap.to(titles[currentIndex], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          currentIndex = (currentIndex + 1) % titles.length;
          gsap.to(titles[currentIndex], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
              setTimeout(animateTitles, 1500);
            },
          });
        },
      });
    };

    setTimeout(animateTitles, 1500);
  }
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
  window.removeEventListener("resize", updateIsMobile);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

html,
body {
  height: -webkit-fill-available;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: visible;
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
    flex-direction: column;
    width: 100vw;
    height: 400vh;
  }
  .slide {
    width: 100vw;
    height: 100vh;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mobile-cards-scroll {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1.5rem;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1rem;
  }
  .mobile-cards-scroll > div {
    min-width: 80vw;
    flex: 0 0 auto;
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
  left: 2rem;
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

.font-limelight {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
}

.rotating-title {
  position: relative;
}

.title-container {
  position: relative;
}

.title-container h2 {
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  margin: 0;
  padding: 0;
  line-height: 1;
}

.title-container h2:first-child {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
