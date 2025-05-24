<template>
  <main class="min-h-[calc(100vh+200px)] home-test bg-slide-1">
    <BackToTop />
    <!-- Hero Section avec effet de parallaxe -->
    <div
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=60"
          alt="Hero background"
          class="w-full h-full object-cover transform scale-110"
        />
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div class="relative z-10 text-center px-4">
        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight glitch-title whitespace-nowrap"
        >
          <span class="glitch-text" data-text="About this project"
            >About this project</span
          >
        </h1>
      </div>
    </div>

    <!-- Contenu Principal -->
    <div class="relative">
      <!-- Section Expérience avec effet de décalage -->
      <div class="py-32 relative">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="relative">
              <div
                class="absolute -left-8 -top-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"
              ></div>
              <div
                class="absolute -right-8 -bottom-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"
              ></div>
              <div
                class="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl transform hover:rotate-1 transition-transform"
              >
                <h2 class="text-4xl font-bold text-black mb-6 font-montserrat">
                  Why ?
                </h2>
                <p class="text-lg text-black/80 mb-6 font-montserrat">
                  The idea for this project came from a video on Twitter that
                  mentioned vibecoding—a concept that immediately caught my
                  attention because of the benefits it highlighted. I wanted to
                  take the idea further: to explore what could be created
                  without writing a single line of code by hand, purely by
                  collaborating with tools like ChatGPT, Cursor, Claude, and
                  other AI systems. This wasn't just a technical curiosity—it
                  was a real experiment to test their limits, their
                  understanding, and their ability to turn a creative vision
                  into a tangible result, all without relying on heavy technical
                  knowledge. The challenge was clear from the start: not to type
                  a single line of code manually, and still aim for the
                  cleanest, most polished outcome possible. My mindset evolved
                  throughout the project—from initial hesitation, to curiosity,
                  to the genuine fun of experimentation. There were
                  surprises—some good, some frustrating—but that's what made the
                  process feel alive. In the end, it became a double
                  exploration: the limits of vibecoding, and the boundaries of
                  what AI can achieve in a creative, ambitious project.
                </p>
              </div>
            </div>
            <div class="relative">
              <img
                src="/images/about/aboutwhy.png"
                alt="About Why"
                class="w-full h-[500px] object-cover shadow-2xl transform hover:scale-105 transition-transform"
              />
              <div
                class="absolute -bottom-6 -right-6 w-32 h-32 bg-black/10 rounded-full blur-2xl"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Compétences avec effet de carte -->
      <div class="py-32 bg-black/5">
        <div class="container mx-auto px-4">
          <h2 class="text-5xl font-bold text-black mb-16 text-center">
            My approach
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="group relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform group-hover:scale-105 transition-transform"
              ></div>
              <div
                class="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full"
              >
                <div
                  class="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform"
                >
                  <span class="text-3xl">💻</span>
                </div>
                <h3 class="text-2xl font-bold text-black mb-4">
                  Tool-driven Creation
                </h3>
                <p class="text-black/80">
                  I built everything using tools like ChatGPT, Cursor, Claude,
                  and other AI platforms. The idea wasn't to skip the hard work,
                  but to see how far these tools could be pushed to execute a
                  creative vision. Learning how to "speak" their language became
                  part of the craft.
                </p>
              </div>
            </div>
            <div class="group relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform group-hover:scale-105 transition-transform"
              ></div>
              <div
                class="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full"
              >
                <div
                  class="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform"
                >
                  <span class="text-3xl">🎨</span>
                </div>
                <h3 class="text-2xl font-bold text-black mb-4">
                  Design by Constraint
                </h3>
                <p class="text-black/80">
                  No manual coding. That was the rule. Every decision had to
                  work within this limit — and instead of seeing it as a block,
                  I used it as a guide. The constraint shaped the outcome and
                  taught me how creativity often thrives with clear boundaries.
                </p>
              </div>
            </div>
            <div class="group relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl transform group-hover:scale-105 transition-transform"
              ></div>
              <div
                class="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full"
              >
                <div
                  class="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform"
                >
                  <span class="text-3xl">🚀</span>
                </div>
                <h3 class="text-2xl font-bold text-black mb-4">
                  Learning in Public
                </h3>
                <p class="text-black/80">
                  This wasn't about showing off mastery — it was about learning
                  out loud. I entered this with curiosity, not certainty. I
                  documented the missteps, surprises, and insights along the
                  way. It's a process-first mindset, where progress matters more
                  than polish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Process avec timeline -->
      <div class="py-32">
        <div class="container mx-auto px-4">
          <h2 class="text-5xl font-bold text-black mb-16 text-center">
            My Process
          </h2>
          <div class="relative">
            <div
              class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black/10"
            ></div>
            <div class="space-y-16">
              <div class="relative flex items-center">
                <div
                  class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full"
                ></div>
                <div class="w-1/2 pr-12 text-right">
                  <h3 class="text-2xl font-bold text-black mb-2">
                    Talk, Don't Dictate
                  </h3>
                  <p class="text-black/80">
                    Every step began as a conversation with the tools. I wasn't
                    issuing commands — I was exploring, adjusting, listening.
                    The goal was to understand how the AI thinks, how it
                    responds, and how to guide it without forcing it. It wasn't
                    about control, but about collaboration and subtle influence.
                  </p>
                </div>
                <div class="w-1/2 pl-12">
                  <img
                    src="/images/about/aboutprocess1.png"
                    alt="Talk, Don't Dictate"
                    class="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div class="relative flex items-center">
                <div
                  class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full"
                ></div>
                <div class="w-1/2 pr-12">
                  <img
                    src="/images/about/aboutprocess3.jpg"
                    alt="Steer Without a Keyboard"
                    class="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div class="w-1/2 pl-12">
                  <h3 class="text-2xl font-bold text-black mb-2">
                    Steer Without a Keyboard
                  </h3>
                  <p class="text-black/80">
                    Nothing was written by hand, but nothing was random either.
                    I iterated with intention — tweaking, refining, sometimes
                    rewriting entire chunks prompt by prompt. Not to code, but
                    to shape. The AI moved fast, and I slowed down just enough
                    to keep it on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section avec effet de parallaxe -->
      <div class="relative py-32 overflow-hidden">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&auto=format&fit=crop&q=60"
            alt="CTA background"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div
          class="relative container mx-auto px-4 text-center flex flex-col items-center"
        >
          <h2 class="text-5xl font-bold text-white mb-8 glitch-title">
            <span class="glitch-text" data-text="Let's Work Together"
              >Let's Work Together</span
            >
          </h2>
          <div class="mt-8">
            <router-link
              to="/?slide=3"
              class="inline-block px-12 py-6 bg-white text-black rounded-full text-xl font-bold hover:bg-white/90 transition-colors transform hover:scale-105 transition-transform"
            >
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import BackToTop from "../components/BackToTop.vue";
</script>

<style scoped>
main {
  overflow: hidden;
}

/* Animations personnalisées */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Effets de survol */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-10px);
}

/* Animation moderne Glitch */
.glitch-title {
  position: relative;
  display: inline-block;
}

.glitch-text {
  position: relative;
  display: inline-block;
  margin: 0 0.2em;
  animation: glitch 1s linear infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

@keyframes glitch-anim {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
  }
  4.166666667% {
    clip: rect(70px, 9999px, 71px, 0);
  }
  8.333333333% {
    clip: rect(75px, 9999px, 77px, 0);
  }
  12.5% {
    clip: rect(14px, 9999px, 82px, 0);
  }
  16.666666667% {
    clip: rect(28px, 9999px, 19px, 0);
  }
  20.833333333% {
    clip: rect(83px, 9999px, 30px, 0);
  }
  25% {
    clip: rect(73px, 9999px, 51px, 0);
  }
  29.166666667% {
    clip: rect(23px, 9999px, 29px, 0);
  }
  33.333333333% {
    clip: rect(19px, 9999px, 83px, 0);
  }
  37.5% {
    clip: rect(40px, 9999px, 73px, 0);
  }
  41.666666667% {
    clip: rect(95px, 9999px, 30px, 0);
  }
  45.833333333% {
    clip: rect(63px, 9999px, 68px, 0);
  }
  50% {
    clip: rect(37px, 9999px, 23px, 0);
  }
  54.166666667% {
    clip: rect(92px, 9999px, 38px, 0);
  }
  58.333333333% {
    clip: rect(76px, 9999px, 51px, 0);
  }
  62.5% {
    clip: rect(75px, 9999px, 75px, 0);
  }
  66.666666667% {
    clip: rect(67px, 9999px, 51px, 0);
  }
  70.833333333% {
    clip: rect(14px, 9999px, 79px, 0);
  }
  75% {
    clip: rect(1px, 9999px, 66px, 0);
  }
  79.166666667% {
    clip: rect(86px, 9999px, 30px, 0);
  }
  83.333333333% {
    clip: rect(23px, 9999px, 98px, 0);
  }
  87.5% {
    clip: rect(85px, 9999px, 72px, 0);
  }
  91.666666667% {
    clip: rect(71px, 9999px, 75px, 0);
  }
  95.833333333% {
    clip: rect(2px, 9999px, 48px, 0);
  }
  100% {
    clip: rect(30px, 9999px, 16px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 100px, 0);
  }
  4.166666667% {
    clip: rect(52px, 9999px, 74px, 0);
  }
  8.333333333% {
    clip: rect(79px, 9999px, 85px, 0);
  }
  12.5% {
    clip: rect(75px, 9999px, 5px, 0);
  }
  16.666666667% {
    clip: rect(67px, 9999px, 61px, 0);
  }
  20.833333333% {
    clip: rect(14px, 9999px, 79px, 0);
  }
  25% {
    clip: rect(1px, 9999px, 66px, 0);
  }
  29.166666667% {
    clip: rect(86px, 9999px, 30px, 0);
  }
  33.333333333% {
    clip: rect(23px, 9999px, 98px, 0);
  }
  37.5% {
    clip: rect(85px, 9999px, 72px, 0);
  }
  41.666666667% {
    clip: rect(71px, 9999px, 75px, 0);
  }
  45.833333333% {
    clip: rect(2px, 9999px, 48px, 0);
  }
  50% {
    clip: rect(30px, 9999px, 16px, 0);
  }
  54.166666667% {
    clip: rect(59px, 9999px, 50px, 0);
  }
  58.333333333% {
    clip: rect(66px, 9999px, 59px, 0);
  }
  62.5% {
    clip: rect(60px, 9999px, 88px, 0);
  }
  66.666666667% {
    clip: rect(67px, 9999px, 51px, 0);
  }
  70.833333333% {
    clip: rect(14px, 9999px, 79px, 0);
  }
  75% {
    clip: rect(1px, 9999px, 66px, 0);
  }
  79.166666667% {
    clip: rect(86px, 9999px, 30px, 0);
  }
  83.333333333% {
    clip: rect(23px, 9999px, 98px, 0);
  }
  87.5% {
    clip: rect(85px, 9999px, 72px, 0);
  }
  91.666666667% {
    clip: rect(71px, 9999px, 75px, 0);
  }
  95.833333333% {
    clip: rect(2px, 9999px, 48px, 0);
  }
  100% {
    clip: rect(30px, 9999px, 16px, 0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    flex-direction: column;
  }

  .glitch-text {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .glitch-text {
    font-size: 2rem;
  }
}
</style>
