<template>
  <main class="min-h-[calc(100vh+200px)] bg-[#BF4158]">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl font-bold text-white mb-12">Ce Que Je Sais Faire</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Design UI/UX -->
        <div class="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
          <h3 class="text-xl font-bold text-white mb-4">Design UI/UX</h3>
          <ul class="space-y-2 text-white/80">
            <li>• Interfaces modernes et intuitives</li>
            <li>• Prototypage et wireframing</li>
            <li>• Design responsive</li>
            <li>• Tests utilisateurs</li>
          </ul>
        </div>

        <!-- Développement Frontend -->
        <div class="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
          <h3 class="text-xl font-bold text-white mb-4">
            Développement Frontend
          </h3>
          <ul class="space-y-2 text-white/80">
            <li>• HTML5 / CSS3 / JavaScript</li>
            <li>• Vue.js / React</li>
            <li>• Tailwind CSS</li>
            <li>• Responsive Design</li>
          </ul>
        </div>

        <!-- Outils de Design -->
        <div class="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
          <h3 class="text-xl font-bold text-white mb-4">Outils de Design</h3>
          <ul class="space-y-2 text-white/80">
            <li>• Figma</li>
            <li>• Adobe XD</li>
            <li>• Photoshop</li>
            <li>• Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
}
</style>
