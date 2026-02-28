<script setup lang="ts">
import ParticleImage from './components/ParticleImage.vue'
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden bg-black text-white">
    <ParticleImage />
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-4 drop-shadow-lg text-center px-4">In order to build the AI Native future.</h1>
    </div>
  </div>
</template>
