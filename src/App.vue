<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <Hero />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";
</script>
