<script setup>
import BackgroundGlow from "./components/layout/BackgroundGlow.vue";
import Header from "./components/layout/Header.vue";
import Hero from "./components/portfolio/Hero.vue";
import Projects from "./components/portfolio/Projects.vue";
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- 背景呼吸球 -->
    <BackgroundGlow />
    <Header />

    <Hero />
    <Projects />
  </div>
</template>

<style>
/* 確保 html 滾動行為平滑 */
html {
  scroll-behavior: smooth;
}
</style>
