<template>
  <div class="bubbles-bg">
    <div
      v-for="bubble in bubbles"
      :key="bubble.id"
      class="bubble"
      :style="bubble.style"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

/**
 * @typedef Bubble
 * @property {number} id
 * @property {Record<string, any>} style
 */

const NUM_BUBBLES = 40;
const MIN_VISIBLE = 10;

/** @type {import('vue').Ref<Bubble[]>} */
const bubbles = ref([]);

const COLORS = [
  "rgba(173,216,230,0.18)", // bleu très pâle
  "rgba(255,182,193,0.16)", // rose très pâle
  "rgba(221,160,221,0.14)", // violet très pâle
  "rgba(255,255,255,0.13)", // blanc
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBubble(i) {
  // 30% des bulles devant, le reste derrière
  const z = Math.random();
  const zIndex = z < 0.3 ? 100 : -1;
  const size = zIndex > 0 ? random(80, 180) : random(40, 220);
  const left = random(0, 100);
  const blur = zIndex > 0 ? random(0, 2) : random(0, 8);
  const opacity = zIndex > 0 ? random(0.01, 0.025) : random(0.008, 0.018);
  const duration = random(14, 28);
  const delay = random(-duration * (NUM_BUBBLES / MIN_VISIBLE), 16);
  const animName = `bubbleRainX${i % 4}`;
  const color = COLORS[Math.floor(random(0, COLORS.length))];

  return {
    id: i,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      top: `-${size}px`,
      filter: `blur(${blur}px)`,
      opacity,
      animation: `${animName} ${duration}s linear ${delay}s infinite`,
      "--bubble-color": color,
      zIndex,
      pointerEvents: "none",
    },
  };
}

onMounted(() => {
  bubbles.value = Array.from({ length: NUM_BUBBLES }).map((_, i) =>
    createBubble(i)
  );
});
</script>

<style>
.bubbles-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  /* Dégradé radial coloré, centre transparent, contour coloré/fumé */
  background: radial-gradient(
    circle at 60% 40%,
    rgba(255, 255, 255, 0.01) 0%,
    rgba(255, 255, 255, 0.04) 30%,
    var(--bubble-color, rgba(255, 255, 255, 0.13)) 80%,
    transparent 100%
  );
  will-change: transform;
}
@keyframes bubbleRainX0 {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.5;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateX(-30px) translateY(55vh) scale(1.04);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-40px) translateY(110vh) scale(1.08);
    opacity: 0.1;
  }
}
@keyframes bubbleRainX1 {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.5;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateX(30px) translateY(55vh) scale(1.04);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(40px) translateY(110vh) scale(1.08);
    opacity: 0.1;
  }
}
@keyframes bubbleRainX2 {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.5;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateX(-20px) translateY(55vh) scale(1.04);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-30px) translateY(110vh) scale(1.08);
    opacity: 0.1;
  }
}
@keyframes bubbleRainX3 {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.5;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateX(20px) translateY(55vh) scale(1.04);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(30px) translateY(110vh) scale(1.08);
    opacity: 0.1;
  }
}
</style>
