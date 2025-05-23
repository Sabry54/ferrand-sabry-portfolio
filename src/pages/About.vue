<template>
  <main class="min-h-[calc(100vh+200px)] home-test bg-slide-1">
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
          class="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight glitch-title"
        >
          <span class="glitch-text" data-text="About">About</span>
          <span class="glitch-text" data-text="Me">Me</span>
        </h1>
        <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
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
                <h2 class="text-4xl font-bold text-black mb-6">My Journey</h2>
                <p class="text-lg text-black/80 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  enim ad minim veniam.
                </p>
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center"
                  >
                    <span class="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-black">
                      Design First
                    </h3>
                    <p class="text-black/70">Creating beautiful interfaces</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
                alt="Coding setup"
                class="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform"
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
            Skills & Expertise
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
                  Frontend Development
                </h3>
                <p class="text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <h3 class="text-2xl font-bold text-black mb-4">UI/UX Design</h3>
                <p class="text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <h3 class="text-2xl font-bold text-black mb-4">Performance</h3>
                <p class="text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  <h3 class="text-2xl font-bold text-black mb-2">Discovery</h3>
                  <p class="text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div class="w-1/2 pl-12">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60"
                    alt="Discovery"
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
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
                    alt="Design"
                    class="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div class="w-1/2 pl-12">
                  <h3 class="text-2xl font-bold text-black mb-2">Design</h3>
                  <p class="text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        <div class="relative container mx-auto px-4 text-center">
          <h2 class="text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <router-link
            to="/contact"
            class="inline-block px-12 py-6 bg-white text-black rounded-full text-xl font-bold hover:bg-white/90 transition-colors transform hover:scale-105 transition-transform"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

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
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .glitch-text {
    font-size: 2.5rem;
  }
}
</style>
