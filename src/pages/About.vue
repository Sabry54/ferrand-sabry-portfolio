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
          class="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          <span class="block transform hover:scale-105 transition-transform"
            >About</span
          >
          <span class="block transform hover:scale-105 transition-transform"
            >Me</span
          >
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    flex-direction: column;
  }
}
</style>
