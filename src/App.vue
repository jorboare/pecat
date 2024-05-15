<script setup>
import Navbar from './layout/NavbarComponent.vue'
import Hero from './components/HeroSection.vue'
import About from './components/AboutSection.vue'
import Where from './components/WhereSection.vue'
import Contact from './components/ContactSection.vue'
</script>

<template>
  <Navbar />
  <div class="page"><Hero /> <About /><Where /><Contact /></div>
</template>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
