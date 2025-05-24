<template>
  <div class="test-page">
    <Header />
    <main class="test-content">
      <h1>Page de Test</h1>
      <p>Contenu de test</p>
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  background-color: #f2f2f2;
}

.test-content {
  padding-top: 72px;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

h1 {
  font-family: "Aladin", cursive;
  font-size: clamp(2rem, 5vw, 4rem);
  color: black;
  margin-bottom: 2rem;
}

p {
  font-family: "Aladin", cursive;
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: black;
}
</style>
