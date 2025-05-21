<template>
  <div class="home-test" :class="`bg-slide-${currentSlide + 1}`">
    <Header />

    <!-- Container des slides -->
    <div class="slides-container" :class="{ 'mobile-view': isMobile }">
      <!-- Slide 1 -->
      <section class="slide" :class="{ active: currentSlide === 0 }">
        <div class="slide-content">
          <div class="squares-container">
            <!-- Premier carré : Titre et texte -->
            <div class="square text-square">
              <div class="rotating-title animate-title">
                <div class="title-container">
                  <h2 class="text-4xl md:text-6xl font-sans">Curiosity</h2>
                  <h2 class="text-4xl md:text-6xl font-sans">Reflect</h2>
                  <h2 class="text-4xl md:text-6xl font-sans">Adapt</h2>
                  <h2 class="text-4xl md:text-6xl font-sans">Forge</h2>
                  <h2 class="text-4xl md:text-6xl font-sans">Test</h2>
                </div>
                <div class="responsive-title">
                  Curiosity.Reflect.Adapt.Forge.Test.
                </div>
              </div>
              <p class="description-text animate-text">
                Coding as a state of mind — riding the momentum instead of
                forcing the structure. No fixed roadmap, just curiosity and the
                freedom to follow what feels right. Experimenting with tools,
                ideas, and interactions to see what clicks. Creating things that
                feel natural, intentional, and quietly powerful. Letting the
                process unfold — adapting to what emerges rather than chasing
                control. Code becomes a language for intuition, not just
                instruction. The goal isn't perfection, it's resonance. Tuning
                into rhythm, space, and flow. Building experiences that breathe,
                speak softly, and leave room for interpretation.
              </p>
              <p class="quote-text animate-quote">
                "You don't control the muse — you simply show up and get out of
                the way."
                <span class="quote-author">— Rick Rubin</span>
              </p>
            </div>

            <!-- Deuxième carré : Image Luffy -->
            <div class="square">
              <img
                src="../assets/images/home/luffy-unicorn.png"
                alt="Luffy Unicorn"
                class="luffy-image"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Slide 2 -->
      <section class="slide" :class="{ active: currentSlide === 1 }">
        <div class="slide-content">
          <h1>Slide 2</h1>
          <p>Contenu du deuxième slide</p>
        </div>
      </section>

      <!-- Slide 3 -->
      <section class="slide" :class="{ active: currentSlide === 2 }">
        <div class="slide-content">
          <h1>Slide 3</h1>
          <p>Contenu du troisième slide</p>
        </div>
      </section>

      <!-- Slide 4 -->
      <section class="slide" :class="{ active: currentSlide === 3 }">
        <div class="slide-content">
          <h1>Slide 4</h1>
          <p>Contenu du quatrième slide</p>
        </div>
      </section>
    </div>

    <!-- Overlay pour l'animation -->
    <div class="transition-overlay"></div>

    <!-- Navigation -->
    <nav class="slide-navigation">
      <button
        v-for="(_, index) in 4"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: currentSlide === index }"
        class="nav-dot"
      >
        <span class="sr-only">Slide {{ index + 1 }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import Header from "../components/Header.vue";

const currentSlide = ref(0);
const isAnimating = ref(false);
const isMobile = ref(window.innerWidth <= 768);

const mosaicCanvas = ref(null);
const luffyImage = ref(null);
let animationFrame = null;

const goToSlide = (index) => {
  if (isAnimating.value || index < 0 || index > 3) return;

  // Mettre à jour le slide actuel
  currentSlide.value = index;

  // Animer la transition du slide
  const currentSlideEl = document.querySelector(
    `.slide:nth-child(${currentSlide.value + 1})`
  );
  const nextSlideEl = document.querySelector(`.slide:nth-child(${index + 1})`);

  if (currentSlideEl && nextSlideEl) {
    isAnimating.value = true;

    const timeline = gsap.timeline({
      onComplete: () => {
        isAnimating.value = false;
      },
    });

    timeline
      .to(currentSlideEl, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
      })
      .fromTo(
        nextSlideEl,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.6"
      );
  }
};

// Gestion du scroll
const handleWheel = (e) => {
  if (isMobile.value) return; // Désactive le scroll horizontal sur mobile
  e.preventDefault();
  if (isAnimating.value) return;

  const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (Math.abs(delta) < 50) return;

  const direction = delta > 0 ? 1 : -1;
  if (
    (direction > 0 && currentSlide.value < 3) ||
    (direction < 0 && currentSlide.value > 0)
  ) {
    goToSlide(currentSlide.value + direction);
  }
};

// Gestion du touch
const touchStart = ref(0);
const touchEnd = ref(0);

const handleTouchStart = (e) => {
  if (isMobile.value) return; // Désactive le swipe sur mobile
  touchStart.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  if (isMobile.value) return; // Désactive le swipe sur mobile
  e.preventDefault();
  touchEnd.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (isMobile.value) return; // Désactive le swipe sur mobile
  const swipeDistance = touchStart.value - touchEnd.value;
  if (Math.abs(swipeDistance) > 50) {
    const direction = swipeDistance > 0 ? 1 : -1;
    if (
      (direction > 0 && currentSlide.value < 3) ||
      (direction < 0 && currentSlide.value > 0)
    ) {
      goToSlide(currentSlide.value + direction);
    }
  }
};

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

const initMosaicEffect = () => {
  const canvas = mosaicCanvas.value;
  const img = luffyImage.value;
  if (!canvas || !img) return;

  const ctx = canvas.getContext("2d");
  const gridSize = 8;

  // Attendre que l'image soit complètement chargée
  const updateCanvasSize = () => {
    const container = canvas.parentElement;
    const containerRect = container.getBoundingClientRect();

    // Définir les dimensions du canvas pour qu'il corresponde au conteneur
    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    const tileSize = {
      width: canvas.width / gridSize,
      height: canvas.height / gridSize,
    };

    // Créer les tuiles
    const tiles = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        tiles.push({
          x: x * tileSize.width,
          y: y * tileSize.height,
          width: tileSize.width,
          height: tileSize.height,
          progress: 0,
          delay: Math.random() * 0.2,
        });
      }
    }

    // Mélanger les tuiles pour un effet aléatoire
    tiles.sort(() => Math.random() - 0.5);

    // Animation des tuiles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffb3ba";

      let allComplete = true;
      tiles.forEach((tile) => {
        if (tile.progress < 1) {
          allComplete = false;
          tile.progress += 0.015;
        }

        const scale = 1 - tile.progress;
        const x = tile.x + (tile.width * (1 - scale)) / 2;
        const y = tile.y + (tile.height * (1 - scale)) / 2;
        const width = tile.width * scale;
        const height = tile.height * scale;

        ctx.beginPath();
        ctx.roundRect(x, y, width, height, 2);
        ctx.fill();
      });

      if (!allComplete) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        canvas.style.opacity = "0";
      }
    };

    // Démarrer l'animation
    setTimeout(() => {
      animate();
    }, 800);
  };

  // S'assurer que l'image est chargée avant de démarrer l'animation
  if (img.complete) {
    updateCanvasSize();
  } else {
    img.onload = updateCanvasSize;
  }
};

onMounted(() => {
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("resize", updateIsMobile);
  updateIsMobile();

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

  // Animation du titre, texte et citation
  const title = document.querySelector(".animate-title");
  const text = document.querySelector(".animate-text");
  const quote = document.querySelector(".animate-quote");

  if (title && text && quote) {
    gsap.fromTo(
      title,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      text,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.6,
      }
    );

    gsap.fromTo(
      quote,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 1,
      }
    );
  }
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
  window.removeEventListener("resize", updateIsMobile);

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aladin&display=swap");

.home-test {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  will-change: background-color;
}

/* Classes de fond pour le conteneur principal */
.bg-slide-1 {
  background-color: #f2f2f2;
}

.bg-slide-2 {
  background-color: #f2f2f2;
}

.bg-slide-3 {
  background-color: #f2f2f2;
}

.bg-slide-4 {
  background-color: #f2f2f2;
}

/* Styles pour le header transparent */
:deep(header) {
  background-color: transparent;
}

/* Couleurs des slides */
.slide:nth-child(1) {
  background-color: #f2f2f2;
}

.slide:nth-child(2) {
  background-color: #f2f2f2;
}

.slide:nth-child(3) {
  background-color: #f2f2f2;
}

.slide:nth-child(4) {
  background-color: #f2f2f2;
}

.slides-container {
  flex: 1;
  position: relative;
  width: 100%;
  height: calc(100vh - 72px);
  margin-top: 72px;
  overflow: hidden;
}

.slides-container.mobile-view {
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
}

.slides-container.mobile-view .slide {
  position: relative;
  opacity: 1;
  visibility: visible;
  height: auto;
  min-height: 100vh;
  padding: 2rem 0;
}

.slide.active {
  opacity: 1;
  visibility: visible;
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 4rem);
}

/* Overlay pour l'animation */
.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #2d3748, #4a5568);
  clip-path: circle(0% at 50% 50%);
  pointer-events: none;
  z-index: 1000;
}

/* Navigation */
.slide-navigation {
  position: fixed;
  left: clamp(1rem, 2vw, 2rem);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1vw, 1rem);
  z-index: 50;
}

.nav-dot {
  width: clamp(8px, 1vw, 16px);
  height: clamp(8px, 1vw, 16px);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: clamp(1px, 0.2vw, 2px) solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-dot.active {
  background: white;
  border-color: white;
  transform: scale(1.2);
}

.nav-dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Styles pour le conteneur des carrés */
.squares-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  height: 100%;
  max-width: min(2000px, 90vw);
  margin: 0 auto;
  gap: clamp(1rem, 3vw, 4rem);
  align-items: center;
}

/* Styles pour les carrés */
.square {
  height: 100%;
  max-height: calc(100vh - 72px - 4rem);
  padding: clamp(1rem, 2vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-square {
  gap: clamp(1rem, 2vw, 3rem);
  padding-left: clamp(1rem, 2vw, 3rem);
}

/* Styles pour le titre rotatif */
.rotating-title {
  position: relative;
  height: 30%;
  max-height: 200px;
  overflow: hidden;
}

.title-container {
  position: relative;
  height: 100%;
}

.responsive-title {
  display: none;
  font-family: "Aladin", cursive;
  color: black;
  font-size: clamp(1.5rem, 6vw, 6rem);
  line-height: 1.1;
  text-align: left;
  font-weight: 400;
}

.title-container h2 {
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  margin: 0;
  padding: 0;
  line-height: 1.1;
  color: black;
  text-align: left;
  font-size: clamp(1.5rem, 6vw, 6rem);
  white-space: nowrap;
  font-family: "Aladin", cursive;
  font-weight: 400;
}

.title-container h2:first-child {
  opacity: 1;
  transform: translateY(0);
}

.description-text {
  font-size: clamp(0.875rem, 1.5vw, 1.5rem);
  line-height: 1.5;
  color: black;
  max-width: min(60rem, 90%);
  text-align: left;
  margin-top: clamp(0.5rem, 1vw, 1.5rem);
  overflow-wrap: break-word;
  font-family: "Aladin", cursive;
  font-weight: 400;
}

.quote-text {
  font-size: clamp(0.75rem, 1.2vw, 1.2rem);
  line-height: 1.5;
  color: black;
  max-width: min(60rem, 90%);
  text-align: left;
  margin-top: clamp(1.5rem, 2vw, 3rem);
  font-family: "Aladin", cursive;
  font-weight: 400;
  font-style: italic;
}

.quote-author {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9em;
}

/* Responsive */
@media (max-width: 768px) {
  .squares-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: clamp(2rem, 4vw, 6rem);
    height: auto;
  }

  .square {
    height: auto;
    max-height: none;
    padding: clamp(1rem, 4vw, 6rem);
  }

  .text-square {
    padding-left: clamp(1rem, 4vw, 6rem);
    gap: clamp(2rem, 4vw, 6rem);
  }

  .rotating-title {
    height: auto;
    max-height: none;
  }

  .title-container {
    display: none;
  }

  .responsive-title {
    display: block;
  }

  .title-container h2 {
    font-size: clamp(2rem, 8vw, 8rem);
  }

  .description-text {
    font-size: clamp(1rem, 3vw, 3rem);
    line-height: 1.4;
  }

  .luffy-image {
    max-height: 250px;
    width: auto;
    margin: 0 auto;
  }

  .slide-navigation {
    display: none;
  }
}

@media (max-width: 480px) {
  .slide-content {
    padding: clamp(0.5rem, 2vw, 3rem);
  }

  .square {
    padding: clamp(0.5rem, 2vw, 3rem);
  }

  .text-square {
    padding-left: clamp(0.5rem, 2vw, 3rem);
  }

  .title-container h2 {
    font-size: clamp(1.75rem, 10vw, 10rem);
  }

  .description-text {
    font-size: clamp(0.875rem, 4vw, 4rem);
  }

  .luffy-image {
    max-height: 180px;
    width: auto;
    margin: 0 auto;
  }
}

.canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.mosaic-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.luffy-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  transition: all 0.3s ease;
}

/* Tablette */
@media (max-width: 1024px) {
  .luffy-image {
    max-height: 400px;
    width: auto;
    margin: 0 auto;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .luffy-image {
    max-height: 250px;
    width: auto;
    margin: 0 auto;
  }
}

/* Petit mobile */
@media (max-width: 480px) {
  .luffy-image {
    max-height: 180px;
    width: auto;
    margin: 0 auto;
  }
}

/* Animations pour le texte et la citation */
.animate-title {
  opacity: 0;
  transform: translateX(50px);
}

.animate-text {
  opacity: 0;
  transform: translateX(50px);
}

.animate-quote {
  opacity: 0;
  transform: translateX(50px);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-title {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.2s;
}

.animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.6s;
}

.animate-quote {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 1s;
}
</style>
