<template>
  <div class="app-container">
    <Header />
    <main class="flex-1 overflow-hidden">
      <router-view />
    </main>
    <Footer v-if="route.path !== '/'" class="footer-app" />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

const isDesktop = ref(window.innerWidth > 768);
const isMobile = ref(window.innerWidth <= 768);
const route = useRoute();

function createCursor() {
  if (!isDesktop.value) return;

  const cursor1 = document.createElement("div");
  const cursor2 = document.createElement("div");
  const cursor3 = document.createElement("div");

  cursor1.classList.add("cursor", "cursor-large");
  cursor2.classList.add("cursor", "cursor-medium");
  cursor3.classList.add("cursor", "cursor-small");

  document.body.appendChild(cursor1);
  document.body.appendChild(cursor2);
  document.body.appendChild(cursor3);

  let mouseX = -100,
    mouseY = -100;
  let cursor1X = -100,
    cursor1Y = -100;
  let cursor2X = -100,
    cursor2Y = -100;
  let cursor3X = -100,
    cursor3Y = -100;

  const moveCursor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const animateCursors = () => {
    if (!isDesktop.value) return;

    cursor1X += (mouseX - cursor1X) * 0.1;
    cursor1Y += (mouseY - cursor1Y) * 0.1;

    cursor2X += (mouseX - cursor2X) * 0.15;
    cursor2Y += (mouseY - cursor2Y) * 0.15;

    cursor3X += (mouseX - cursor3X) * 0.2;
    cursor3Y += (mouseY - cursor3Y) * 0.2;

    cursor1.style.left = `${cursor1X}px`;
    cursor1.style.top = `${cursor1Y}px`;

    cursor2.style.left = `${cursor2X}px`;
    cursor2.style.top = `${cursor2Y}px`;

    cursor3.style.left = `${cursor3X}px`;
    cursor3.style.top = `${cursor3Y}px`;

    requestAnimationFrame(animateCursors);
  };

  window.addEventListener("mousemove", moveCursor);
  animateCursors();

  // Effet hover
  document.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (
      target instanceof Element &&
      (target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("clickable"))
    ) {
      cursor1.classList.add("cursor-hover");
      cursor2.classList.add("cursor-hover");
      cursor3.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target;
    if (
      target instanceof Element &&
      (target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("clickable"))
    ) {
      cursor1.classList.remove("cursor-hover");
      cursor2.classList.remove("cursor-hover");
      cursor3.classList.remove("cursor-hover");
    }
  });
}

function updateCursor() {
  isDesktop.value = window.innerWidth > 768;
  if (!isDesktop.value) {
    const cursors = document.querySelectorAll(".cursor");
    cursors.forEach((cursor) => cursor.remove());
    document.body.style.cursor = "auto";
  } else {
    createCursor();
  }
}

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

// Gestion du curseur personnalisé
onMounted(() => {
  window.addEventListener("resize", updateCursor);
  window.addEventListener("resize", updateIsMobile);
  updateCursor();
  updateIsMobile();
});

onUnmounted(() => {
  const cursors = document.querySelectorAll(".cursor");
  cursors.forEach((cursor) => cursor.remove());
  window.removeEventListener("resize", updateCursor);
  window.removeEventListener("resize", updateIsMobile);
});
</script>

<style>
.app-container {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  overflow-x: hidden;
}

.min-h-screen {
  min-height: 100vh;
}

/* Sur la page d'accueil */
.h-screen {
  height: 100vh;
  overflow: hidden;
}

/* Curseur personnalisé - uniquement sur desktop */
@media (min-width: 769px) {
  body {
    cursor: none !important;
  }

  .cursor {
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, opacity 0.3s;
    background: rgba(255, 255, 255, 0.8);
    mix-blend-mode: difference;
  }

  .cursor-large {
    width: 40px;
    height: 40px;
    opacity: 0.3;
  }

  .cursor-medium {
    width: 25px;
    height: 25px;
    opacity: 0.5;
  }

  .cursor-small {
    width: 10px;
    height: 10px;
    opacity: 0.8;
  }

  .cursor-hover {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.9;
  }

  a,
  button,
  .clickable {
    cursor: none !important;
  }
}

/* Curseur normal sur mobile */
@media (max-width: 768px) {
  body,
  a,
  button,
  .clickable {
    cursor: auto !important;
  }

  .hide-footer-mobile ~ .footer-app {
    display: none !important;
  }
}
</style>
