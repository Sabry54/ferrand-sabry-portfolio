<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

// Gestion du curseur personnalisé
onMounted(() => {
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
    // Animation fluide pour chaque curseur avec des délais différents
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
    if (
      e.target.tagName === "A" ||
      e.target.tagName === "BUTTON" ||
      e.target.classList.contains("clickable")
    ) {
      cursor1.classList.add("cursor-hover");
      cursor2.classList.add("cursor-hover");
      cursor3.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (
      e.target.tagName === "A" ||
      e.target.tagName === "BUTTON" ||
      e.target.classList.contains("clickable")
    ) {
      cursor1.classList.remove("cursor-hover");
      cursor2.classList.remove("cursor-hover");
      cursor3.classList.remove("cursor-hover");
    }
  });
});

onUnmounted(() => {
  const cursors = document.querySelectorAll(".cursor");
  cursors.forEach((cursor) => cursor.remove());
  window.removeEventListener("mousemove", moveCursor);
});
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

.min-h-screen {
  min-height: 100vh;
}

/* Curseurs personnalisés */
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

/* Permettre les clics sur les liens tout en gardant le curseur personnalisé */
a,
button,
.clickable {
  position: relative;
  z-index: 2;
}

* {
  cursor: none !important;
  user-select: none;
}

/* Cache le curseur système mais garde la fonctionnalité */
a *,
button *,
.clickable * {
  cursor: pointer !important;
}
</style>
