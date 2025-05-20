<template>
  <div class="test-container">
    <div class="holographic">
      <h2>Test Carte Holographique</h2>
      <p>Une carte de test pour l'effet holographique</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initHolographicEffect } from "../components/HolographicEffect.js";

onMounted(() => {
  initHolographicEffect();
});
</script>

<style scoped>
.test-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  padding: 2rem;
}

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
  perspective: 1000px;
  cursor: pointer;
  width: 300px;
  height: 400px;
  padding: 2rem;
  color: white;
  text-align: center;
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

/* Variables de couleurs */
.holographic {
  --color1: #54a29e;
  --color2: #a79d66;
}
</style>
