<template>
  <div class="slider-wrapper">
    <LightBubbles />
    <!-- Container des slides -->
    <div id="sliderTrack" class="slider-track">
      <!-- Slide 1 : Introduction -->
      <div
        class="slide h-screen bg-[#BF4158] p-8 flex items-center md:items-start md:pt-32"
        :class="{ 'desktop-slide': isDesktop }"
      >
        <div
          class="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-32 md:mt-[72px]"
        >
          <div class="text-white max-w-xl slide-content order-2 md:order-1">
            <div
              class="rotating-title h-[80px] md:h-[100px] overflow-hidden md:mb-12"
            >
              <div class="title-container">
                <h2 class="text-4xl md:text-6xl font-sans font-extrabold">
                  🌊 Flow
                </h2>
                <h2 class="text-4xl md:text-6xl font-sans font-extrabold">
                  🧭 Explore
                </h2>
                <h2 class="text-4xl md:text-6xl font-sans font-extrabold">
                  🧪 Tinker
                </h2>
                <h2 class="text-4xl md:text-6xl font-sans font-extrabold">
                  ✨ Resonate
                </h2>
              </div>
            </div>
            <div class="mt-4 md:mb-12">
              <p
                class="font-limelight animate-slideUp hidden md:block md:text-[1.25rem]"
                style="
                  line-height: 1.75rem;
                  max-width: 40rem;
                  margin-bottom: 0.2em;
                "
              >
                Coding as a state of mind — riding the momentum instead of
                forcing the structure.
              </p>
              <p
                class="font-limelight animate-slideUp hidden md:block md:text-[1.25rem]"
                style="
                  line-height: 1.75rem;
                  max-width: 40rem;
                  margin-bottom: 0.2em;
                "
              >
                No fixed roadmap, just curiosity and the freedom to follow what
                feels right.
              </p>
              <p
                class="font-limelight animate-slideUp hidden md:block md:text-[1.25rem]"
                style="
                  line-height: 1.75rem;
                  max-width: 40rem;
                  margin-bottom: 0.2em;
                "
              >
                Experimenting with tools, ideas, and interactions to see what
                clicks.
              </p>
              <p
                class="font-limelight animate-slideUp hidden md:block md:text-[1.25rem]"
                style="line-height: 1.75rem; max-width: 40rem; margin-bottom: 0"
              >
                Creating things that feel natural, intentional, and quietly
                powerful.
              </p>
              <!-- Version mobile simplifiée -->
              <p
                class="font-limelight animate-slideUp md:hidden"
                style="
                  font-size: 0.85rem;
                  line-height: 1.5rem;
                  max-width: 40rem;
                  margin-bottom: 0.2em;
                "
              >
                Coding as a state of mind — riding the momentum instead of
                forcing the structure. No fixed roadmap, just curiosity and the
                freedom to follow what feels right.
              </p>
              <p
                class="font-limelight animate-slideUp md:hidden"
                style="
                  font-size: 0.85rem;
                  line-height: 1.5rem;
                  max-width: 40rem;
                  margin-bottom: 0;
                "
              >
                Creating things that feel natural, intentional, and quietly
                powerful.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 order-1 md:order-2 relative">
            <img
              src="../assets/images/home/luffy-unicorn.png"
              alt="Creative mascot"
              class="absolute max-w-[200px] md:max-w-md w-full h-auto opacity-100 transition-all duration-300 z-[8] right-[-80px] md:right-[-140px] top-[calc(50%-57px)] md:top-[calc(50%+100px)] animate-fadeIn"
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
          src="../assets/images/home/sanji-smoke.png"
          alt="Sanji smoking"
          class="absolute w-1/3 md:w-1/4 h-auto opacity-100 transition-all duration-300 z-[8]"
          :class="{
            'right-0 top-1/2 -translate-y-1/2': !isMobile,
            'left-8 bottom-8 -translate-x-0': isMobile,
          }"
        />
        <div
          class="container mx-auto text-white slide-content relative h-[calc(100vh-144px)] mt-[72px] flex items-center -mt-[30px] md:mt-0"
        >
          <div class="w-full">
            <div class="relative z-[20] mb-12">
              <h2
                class="text-4xl md:text-7xl font-montserrat font-extrabold animate-fadeIn"
              >
                WELCOME
              </h2>
              <h3
                class="text-2xl md:text-5xl font-montserrat font-extrabold animate-fadeIn"
              >
                TO MY PROJECT
              </h3>
            </div>
            <div class="relative z-[15] mb-12">
              <p
                class="font-limelight animate-fadeIn md:text-[1.25rem]"
                style="
                  line-height: 1.5rem;
                  max-width: 50rem;
                  margin-bottom: 0.2em;
                "
              >
                This project is an exploration of vibe coding: a flexible,
                intuitive approach with no rigid roadmap—just moving forward
                with whatever tools feel right. The goal is to experiment,
                build, and adjust in real time without being locked into a fixed
                structure.
              </p>
            </div>
            <div
              v-if="!isMobile"
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 animate-slideUp relative z-[10] w-full max-w-6xl"
            >
              <!-- Inspiration -->
              <div
                class="p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
              >
                <div class="flex flex-col items-center gap-1 mb-1">
                  <div class="text-2xl mb-1 animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-base font-bold mb-1 text-center hidden md:block"
                  >
                    Inspiration
                  </h3>
                </div>
                <p
                  class="text-sm text-center font-medium text-white/90 px-2 py-1 rounded-xl border border-white/10 hidden md:block"
                >
                  What sparked this project. A vague idea, a desire to
                  explore... and here we go.
                </p>
              </div>
              <!-- Process -->
              <div
                class="p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
              >
                <div class="flex flex-col items-center gap-1 mb-1">
                  <div class="text-2xl mb-1 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-base font-bold mb-1 text-center hidden md:block"
                  >
                    Process
                  </h3>
                </div>
                <p
                  class="text-sm text-center font-medium text-white/90 px-2 py-1 rounded-xl border border-white/10 hidden md:block"
                >
                  Coding without a strict roadmap. Testing, undoing, starting
                  over. The journey matters more than the destination.
                </p>
              </div>
              <!-- Current Tools -->
              <div
                class="p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
              >
                <div class="flex flex-col items-center gap-1 mb-1">
                  <div class="text-2xl mb-1 animate-spin-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-base font-bold mb-1 text-center hidden md:block"
                  >
                    Current Tools
                  </h3>
                </div>
                <p
                  class="text-sm text-center font-medium text-white/90 px-2 py-1 rounded-xl border border-white/10 hidden md:block"
                >
                  No fixed stack. Using what speaks to me today: Cursor, some
                  JS, maybe Supabase tomorrow?
                </p>
              </div>
            </div>
            <div
              class="flex justify-center items-center mt-12 animate-slideUp relative z-[25]"
            >
              <router-link
                to="/about"
                class="group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-bold text-white transition-all duration-500 ease-out rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/30"
              >
                <span
                  class="relative flex items-center text-base tracking-wide"
                >
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
      </div>

      <!-- Slide 3 : Portfolio avec cartes holographiques -->
      <div
        class="slide bg-[#333844] p-8 flex items-center justify-center"
        :class="{ 'desktop-slide': isDesktop }"
      >
        <div class="container mx-auto text-white slide-content md:mt-[72px]">
          <h2
            class="text-6xl font-extrabold mb-12 animate-fadeIn font-montserrat"
          >
            Portfolio
          </h2>
          <p
            class="font-limelight text-center animate-fadeIn md:text-[1.25rem] text-white/90 mb-12"
          >
            A selection of recent projects and creative experiments.
          </p>
          <section class="cards">
            <div class="three-d-wrapper">
              <router-link
                :to="{
                  path: '/portfolio',
                  query: { section: portfolioCards[0]?.folder },
                }"
                class="card portfolio-1 animated"
                style="display: block; text-decoration: none"
                :style="{ '--front': `url(${portfolioCards[0]?.image})` }"
              ></router-link>
            </div>
            <div class="three-d-wrapper hidden md:block">
              <router-link
                :to="{
                  path: '/portfolio',
                  query: { section: portfolioCards[1]?.folder },
                }"
                class="card portfolio-2 animated"
                style="display: block; text-decoration: none"
                :style="{ '--front': `url(${portfolioCards[1]?.image})` }"
              ></router-link>
            </div>
            <div class="three-d-wrapper hidden md:block">
              <router-link
                :to="{
                  path: '/portfolio',
                  query: { section: portfolioCards[2]?.folder },
                }"
                class="card portfolio-3 animated"
                style="display: block; text-decoration: none"
                :style="{ '--front': `url(${portfolioCards[2]?.image})` }"
              ></router-link>
            </div>
            <div class="three-d-wrapper hidden md:block">
              <router-link
                :to="{
                  path: '/portfolio',
                  query: { section: portfolioCards[3]?.folder },
                }"
                class="card portfolio-4 animated"
                style="display: block; text-decoration: none"
                :style="{ '--front': `url(${portfolioCards[3]?.image})` }"
              ></router-link>
            </div>
          </section>
          <div
            class="flex justify-center items-center mt-12 animate-slideUp relative z-[25]"
          >
            <router-link
              to="/portfolio"
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
              <p class="text-2xl mb-8 font-sans">
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
import { initHolographicEffect } from "./HolographicEffect.js";

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

  // Préparation des éléments pour l'animation
  const nextSlideElement = document.querySelector(
    `.slide:nth-child(${currentSlide.value + 1})`
  );
  if (nextSlideElement) {
    // Cacher tous les éléments avant l'animation
    gsap.set(
      nextSlideElement.querySelectorAll("h2:not(.title-container h2), h3, p"),
      {
        opacity: 0,
        x: -50,
      }
    );
    gsap.set(nextSlideElement.querySelectorAll("a[href], button"), {
      opacity: 0,
    });
  }

  if (isMobile.value) {
    // Animation verticale sur mobile
    gsap.to(track, {
      y: `${-currentSlide.value * 100}vh`,
      x: 0,
      duration: 1,
      ease: "power3.inOut",
      onStart: () => {
        // Démarrer l'animation du contenu pendant la transition
        if (nextSlideElement) {
          animateSlideContent(nextSlideElement);
        }
      },
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
      onStart: () => {
        // Démarrer l'animation du contenu pendant la transition
        if (nextSlideElement) {
          animateSlideContent(nextSlideElement);
        }
      },
      onComplete: () => {
        isAnimating.value = false;
      },
    });
  }
};

const animatedSlides = ref(new Set());

const animateSlideContent = (slideElement) => {
  if (!slideElement) return;

  // Vérifier si le slide a déjà été animé
  const slideIndex = Array.from(document.querySelectorAll(".slide")).indexOf(
    slideElement
  );
  if (animatedSlides.value.has(slideIndex)) {
    // Si déjà animé, on s'assure que les éléments sont visibles
    const elements = slideElement.querySelectorAll(
      "h2:not(.title-container h2), h3, p, a[href], button"
    );
    gsap.set(elements, {
      opacity: 1,
      x: 0,
    });
    return;
  }

  // Marquer le slide comme animé
  animatedSlides.value.add(slideIndex);

  // Animation des titres avec effet de cascade latéral
  const titles = slideElement.querySelectorAll(
    "h2:not(.title-container h2), h3"
  );
  gsap.fromTo(
    titles,
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.4,
      stagger: {
        amount: 0.9,
        from: "start",
      },
      ease: "sine.out",
      delay: 0.4,
    }
  );

  // Animation des paragraphes avec effet de cascade latéral
  const paragraphs = slideElement.querySelectorAll("p");
  gsap.fromTo(
    paragraphs,
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      stagger: {
        amount: 0.8,
        from: "start",
      },
      ease: "sine.out",
      delay: 0.8,
    }
  );

  // Animation simple des boutons (fade uniquement)
  const buttons = slideElement.querySelectorAll("a[href], button");
  gsap.fromTo(
    buttons,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 1.2,
    }
  );
};

const goToSlide = (index) => {
  if (isAnimating.value || index < 0 || index > 3) return;

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

// --- Début logique encarts portfolio dynamiques ---

// Liste des dossiers et titres anglais
const portfolioFolders = [
  {
    name: "divers",
    title: "Various",
    images: [
      "image00051.png",
      "image00052.png",
      "image00066.png",
      "image00067.png",
      "image00068.png",
      "image00069.png",
      "image00085.png",
      "image00087.png",
      "image00095.png",
      "image00096.png",
      "image00098.png",
    ],
  },
  {
    name: "réaliste",
    title: "Realistic",
    images: [
      "image00032.png",
      "image00033.png",
      "image00034.png",
      "image00043.png",
      "image00047.png",
      "image00048.png",
      "image00049.png",
      "image00050.png",
      "image00101.png",
      "image00102.png",
      "image00103.png",
      "image00104.png",
      "image00116.png",
      "image00117.png",
      "image00118.png",
      "image00119.png",
      "image00120.png",
      "image00123.png",
      "image00124.png",
      "image00125.png",
      "image00126.png",
      "image00127.png",
      "image00128.png",
      "image00142.png",
      "image00143.png",
      "image00144.png",
      "image00145.png",
    ],
  },
  {
    name: "live-action",
    title: "Live Action",
    images: [
      "image00053.png",
      "image00054.png",
      "image00055.png",
      "image00056.png",
      "image00057.png",
      "image00058.png",
      "image00059.png",
      "image00060.png",
      "image00061.png",
      "image00062.png",
      "image00063.png",
      "image00064.png",
      "image00065.png",
      "image00097.png",
      "image00105.png",
      "image00106.png",
      "image00107.png",
      "image00108.png",
      "image00109.png",
      "image00110.png",
      "image00111.png",
      "image00112.png",
      "image00113.png",
      "image00114.png",
      "image00115.png",
      "image00129.png",
      "image00130.png",
      "image00131.png",
      "image00132.png",
      "image00133.png",
      "image00134.png",
      "image00135.png",
      "image00136.png",
      "image00153.png",
      "image00154.png",
      "image00155.png",
      "image00156.png",
      "image00157.png",
      "image00158.png",
      "image00159.png",
      "image00160.png",
    ],
  },
  {
    name: "mangas",
    title: "Mangas",
    images: [
      "0_1.webp",
      "0_3.webp",
      "image00001.png",
      "image00002.png",
      "image00003.png",
      "image00004.png",
      "image00005.png",
      "image00006.png",
      "image00007.png",
      "image00008.png",
      "image00009.png",
      "image00010.png",
      "image00011.png",
      "image00012.png",
      "image00013.png",
      "image00014.png",
      "image00015.png",
      "image00016.png",
      "image00017.png",
      "image00018.png",
      "image00019.png",
      "image00020.png",
      "image00021.png",
      "image00022.png",
      "image00023.png",
      "image00024.png",
      "image00025.png",
      "image00026.png",
      "image00027.png",
      "image00028.png",
      "image00029.png",
      "image00030.png",
      "image00031.png",
      "image00035.png",
      "image00036.png",
      "image00037.png",
      "image00039.png",
      "image00040.png",
      "image00041.png",
      "image00044.png",
      "image00045.png",
      "image00046.png",
      "image00081.png",
      "image00137.png",
      "image00138.png",
      "image00139.png",
      "image00140.png",
      "image00141.png",
      "image00146.png",
      "image00147.png",
      "image00148.png",
      "image00161.png",
      "image00162.png",
      "image00163.png",
      "image00164.png",
      "image00165.png",
      "image00166.png",
      "image00167.png",
      "image00168.png",
      "image00169.png",
      "image00170.png",
    ],
  },
  {
    name: "ghibli",
    title: "Ghibli",
    images: [
      "0_0 (1).webp",
      "0_0 (2).webp",
      "0_0 (3).webp",
      "0_0.webp",
      "0_1 (1).webp",
      "0_1 (2).webp",
    ],
  },
  {
    name: "art",
    title: "Art",
    images: [
      "image00121.png",
      "image00122.png",
      "image00150.png",
      "image00151.png",
      "image00152.png",
    ],
  },
];

// Définition du type pour les cartes portfolio (JSDoc)
/**
 * @typedef {Object} PortfolioCard
 * @property {string} title
 * @property {string} image
 * @property {string} [description]
 * @property {string} [folder]
 */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * @param {Object} folder
 * @returns {string}
 */
function getRandomImage(folder) {
  const idx = getRandomInt(folder.images.length);
  // Chemin compatible avec la structure du dossier public en production
  return `/images/portfolio/${folder.name}/${folder.images[idx]}`;
}

/**
 * @param {number} count
 * @returns {PortfolioCard[]}
 */
function getRandomPortfolioCards(count) {
  // On clone et on mélange le tableau
  const shuffled = [...portfolioFolders].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((folder) => ({
    title: folder.title,
    image: getRandomImage(folder),
    description: folder.description || "",
    folder: folder.name,
  }));
}

/** @type {import('vue').Ref<PortfolioCard[]>} */
const portfolioCards = ref([]);

const updatePortfolioCards = () => {
  if (window.innerWidth <= 768) {
    portfolioCards.value = getRandomPortfolioCards(1);
  } else {
    portfolioCards.value = getRandomPortfolioCards(4);
  }
};

// Ajout d'un intervalle pour changer les cartes toutes les 30 secondes
let cardsInterval;

onMounted(() => {
  updatePortfolioCards();
  window.addEventListener("resize", updatePortfolioCards);
  initHolographicEffect();

  // Changer les cartes toutes les 30 secondes
  cardsInterval = setInterval(() => {
    updatePortfolioCards();
  }, 30000);
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePortfolioCards);
  clearInterval(cardsInterval);
});
// --- Fin logique encarts portfolio dynamiques ---

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

  // Animation initiale du contenu du premier slide avec un délai
  const firstSlide = document.querySelector(".slide");
  if (firstSlide) {
    // Cacher uniquement les textes, titres et boutons
    gsap.set(
      firstSlide.querySelectorAll("h2:not(.title-container h2), h3, p"),
      {
        opacity: 0,
        x: -50,
      }
    );
    gsap.set(firstSlide.querySelectorAll("a[href], button"), {
      opacity: 0,
    });
    // Animer le contenu avec un délai initial
    setTimeout(() => {
      animateSlideContent(firstSlide);
    }, 500);
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

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

.animate-ping-slow {
  animation: ping-slow 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}

.slide3-img {
  position: absolute;
  max-width: 200px;
  width: 100%;
  height: auto;
  opacity: 1;
  transition: all 0.3s;
  z-index: 8;
  right: -80px;
  top: calc(50% + 35px);
  margin-top: 8%;
  margin-right: 20%;
}
@media (min-width: 768px) {
  .slide3-img {
    max-width: 28rem;
    right: -140px;
    top: calc(50% + 100px);
    margin-top: 8%;
    margin-right: 20%;
  }
}

/* Effet holographique style carte Pokémon */
.holographic {
  position: relative;
  overflow: hidden;
  z-index: 10;
  touch-action: none;
  isolation: isolate;
  border-radius: 5% / 3.5%;
  box-shadow: -5px -5px 5px -5px var(--color1), 5px 5px 5px -5px var(--color2),
    -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease, box-shadow 0.2s ease;
  will-change: transform, filter;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  transform-style: preserve-3d;
  cursor: pointer;
}

.holographic:before,
.holographic:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-repeat: no-repeat;
  opacity: 0.5;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
  pointer-events: none;
}

.holographic:before {
  background-position: 50% 50%;
  background-size: 300% 300%;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    var(--color1) 25%,
    transparent 47%,
    transparent 53%,
    var(--color2) 75%,
    transparent 100%
  );
  opacity: 0.5;
  filter: brightness(0.5) contrast(1);
  z-index: 1;
}

.holographic:after {
  opacity: 1;
  background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
    url(https://assets.codepen.io/13471/holo.png),
    linear-gradient(
      125deg,
      #ff008450 15%,
      #fca40040 30%,
      #ffff0030 40%,
      #00ff8a20 60%,
      #00cfff40 70%,
      #cc4cfa50 85%
    );
  background-position: 50% 50%;
  background-size: 160%;
  background-blend-mode: overlay;
  z-index: 2;
  filter: brightness(1) contrast(1);
  transition: all 0.33s ease;
  mix-blend-mode: color-dodge;
  opacity: 0.75;
}

.holographic:hover {
  box-shadow: -20px -20px 30px -25px var(--color1),
    20px 20px 30px -25px var(--color2), -7px -7px 10px -5px var(--color1),
    7px 7px 10px -5px var(--color2), 0 0 13px 4px rgba(255, 255, 255, 0.3),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
}

.holographic:hover:before {
  background-image: linear-gradient(
    110deg,
    transparent 25%,
    var(--color1) 48%,
    var(--color2) 52%,
    transparent 75%
  );
  background-position: 50% 50%;
  background-size: 250% 250%;
  opacity: 0.88;
  filter: brightness(0.66) contrast(1.33);
}

.holographic:hover:after {
  filter: brightness(1) contrast(1);
  opacity: 1;
}

/* Variables de couleurs pour chaque encart */
.holographic {
  --color1: #54a29e;
  --color2: #a79d66;
}

/* Animation de la carte */
@keyframes holoCard {
  0%,
  100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  5%,
  8% {
    transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
  }
  13%,
  16% {
    transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
  }
  35%,
  38% {
    transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
  }
  55% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}

.holographic.animated {
  animation: holoCard 12s ease 0s 1;
}

/* Effet de mouvement au survol */
.holographic {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.holographic:hover {
  transform: rotateX(5deg) rotateY(5deg);
}

.holographic:hover:before {
  background-position: 50% 50%;
  background-size: 250% 250%;
  opacity: 0.88;
  filter: brightness(0.66) contrast(1.33);
}

.holographic:hover:after {
  filter: brightness(1) contrast(1);
  opacity: 1;
}

/* Effet de brillance */
.glare {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  mix-blend-mode: overlay;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.holographic:hover .glare {
  opacity: 1;
}

:root {
  --color1: rgb(0, 231, 255);
  --color2: rgb(255, 0, 231);
  --back: url(https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg);
  --charizard1: #fac;
  --charizard2: #ddccaa;
  --charizardfront: url(https://assets.codepen.io/13471/charizard-gx.webp);
  --pika1: #54a29e;
  --pika2: #a79d66;
  --pikafront: url(https://assets.codepen.io/13471/pikachu-gx.webp);
  --eevee1: #efb2fb;
  --eevee2: #acc6f8;
  --eeveefront: url(https://assets.codepen.io/13471/eevee-gx.webp);
  --mewtwo1: #efb2fb;
  --mewtwo2: #acc6f8;
  --mewtwofront: url(https://assets.codepen.io/13471/mewtwo-gx.webp);
  --portfolio1: #54a29e;
  --portfolio2: #a79d66;
  --portfolio3: #efb2fb;
  --portfolio4: #acc6f8;
  --portfolio1-front: url("/images/portfolio/divers/image00051.png");
  --portfolio2-front: url("/images/portfolio/réaliste/image00032.png");
  --portfolio3-front: url("/images/portfolio/live-action/image00053.png");
  --portfolio4-front: url("/images/portfolio/mangas/image00001.png");
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
}

@media screen and (min-width: 600px) {
  .cards {
    flex-direction: row;
  }
}

.card {
  width: 51.48vw;
  height: 72vw;
  position: relative;
  overflow: hidden;
  margin: 20px;
  z-index: 10;
  touch-action: none;
  isolation: isolate;
  border-radius: 5% / 3.5%;
  box-shadow: -5px -5px 5px -5px var(--color1), 5px 5px 5px -5px var(--color2),
    -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease, box-shadow 0.2s ease;
  will-change: transform, filter;
  background-color: #040712;
  background-image: var(--front);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transform-style: preserve-3d;
  display: block;
  text-decoration: none;
}

@media screen and (min-width: 600px) {
  .card {
    width: clamp(10.32vw, 48.8vh, 14.4vw);
    height: clamp(14.4vw, 68vh, 20.16vw);
  }
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-repeat: no-repeat;
  opacity: 0.5;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
}

.card:before {
  background-position: 50% 50%;
  background-size: 300% 300%;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    var(--color1) 25%,
    transparent 47%,
    transparent 53%,
    var(--color2) 75%,
    transparent 100%
  );
  opacity: 0.5;
  filter: brightness(0.5) contrast(1);
  z-index: 1;
}

.card:after {
  opacity: 1;
  background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
    url(https://assets.codepen.io/13471/holo.png),
    linear-gradient(
      125deg,
      #ff008450 15%,
      #fca40040 30%,
      #ffff0030 40%,
      #00ff8a20 60%,
      #00cfff40 70%,
      #cc4cfa50 85%
    );
  background-position: 50% 50%;
  background-size: 160%;
  background-blend-mode: overlay;
  z-index: 2;
  filter: brightness(1) contrast(1);
  transition: all 0.33s ease;
  mix-blend-mode: color-dodge;
  opacity: 0.75;
}

.card.charizard {
  --color1: var(--charizard1);
  --color2: var(--charizard2);
  --front: var(--charizardfront);
}

.card.pika {
  --color1: var(--pika1);
  --color2: var(--pika2);
  --front: var(--pikafront);
}

.card.mewtwo {
  --color1: var(--mewtwo1);
  --color2: var(--mewtwo2);
  --front: var(--mewtwofront);
}

.card.eevee {
  --color1: #ec9bb6;
  --color2: #ccac6f;
  --color3: #69e4a5;
  --color4: #8ec5d6;
  --color5: #b98cce;
  --front: var(--eeveefront);
}

.card.portfolio-1 {
  --color1: var(--portfolio1);
  --color2: var(--portfolio2);
  --front: var(--portfolio1-front);
}

.card.portfolio-2 {
  --color1: var(--portfolio3);
  --color2: var(--portfolio4);
  --front: var(--portfolio2-front);
}

.card.portfolio-3 {
  --color1: var(--portfolio1);
  --color2: var(--portfolio3);
  --front: var(--portfolio3-front);
}

.card.portfolio-4 {
  --color1: var(--portfolio2);
  --color2: var(--portfolio4);
  --front: var(--portfolio4-front);
}

.three-d-wrapper {
  perspective: 750px;
  isolation: isolate;
  transform: translate3d(0.1px, 0.1px, 0.1px);
}

@keyframes holoSparkle {
  0%,
  100% {
    opacity: 0.75;
    background-position: 50% 50%;
    filter: brightness(1.2) contrast(1.25);
  }
  5%,
  8% {
    opacity: 1;
    background-position: 40% 40%;
    filter: brightness(0.8) contrast(1.2);
  }
  13%,
  16% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(1.2) contrast(0.8);
  }
  35%,
  38% {
    opacity: 1;
    background-position: 60% 60%;
    filter: brightness(1) contrast(1);
  }
  55% {
    opacity: 0.33;
    background-position: 45% 45%;
    filter: brightness(1.2) contrast(1.25);
  }
}

@keyframes holoGradient {
  0%,
  100% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(0.5) contrast(1);
  }
  5%,
  9% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(0.75) contrast(1.25);
  }
  13%,
  17% {
    background-position: 0% 0%;
    opacity: 0.88;
  }
  35%,
  39% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(0.5) contrast(1);
  }
  55% {
    background-position: 0% 0%;
    opacity: 1;
    filter: brightness(0.75) contrast(1.25);
  }
}

@keyframes holoCard {
  0%,
  100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  5%,
  8% {
    transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
  }
  13%,
  16% {
    transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
  }
  35%,
  38% {
    transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
  }
  55% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}

.card.animated {
  transition: none;
  animation: holoCard 12s ease 0s 1;
}

.card.animated:before {
  transition: none;
  animation: holoGradient 12s ease 0s 1;
}

.card.animated:after {
  transition: none;
  animation: holoSparkle 12s ease 0s 1;
}

.cards .card:nth-child(2) {
  animation-delay: 0.25s;
}

.cards .card:nth-child(3) {
  animation-delay: 0.5s;
}

.cards .card:nth-child(4) {
  animation-delay: 0.75s;
}
</style>
