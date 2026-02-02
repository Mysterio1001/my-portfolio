<script setup>
import BackgroundGlow from "./components/layout/BackgroundGlow.vue";
import Header from "./components/layout/Header.vue";
import Hero from "./components/portfolio/Hero.vue";
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- 背景呼吸球 -->
    <BackgroundGlow />
    <Header />

    <Hero />
    <!-- <section
        id="home"
        class="min-h-screen flex items-center justify-center p-6"
      >
        <div
          class="glass-effect p-12 rounded-[2.5rem] max-w-2xl w-full text-center"
        >
          <h1 class="text-4xl font-bold mb-4 tracking-tight">
            前端工程師作品集
          </h1>
          <p class="text-lg opacity-70 leading-relaxed mb-6">
            地基已打好，接下來我們準備將 Hero Section 搬移過來。
          </p>
          <div class="flex justify-center gap-4">
            <span
              class="px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-mono border border-blue-500/20"
              >Vue 3</span
            >
            <span
              class="px-4 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-mono border border-purple-500/20"
              >Vite 7</span
            >
            <span
              class="px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-mono border border-emerald-500/20"
              >Tailwind v4</span
            >
          </div>
        </div>
      </section> -->
  </div>
</template>

<style>
/* 確保 html 滾動行為平滑 */
html {
  scroll-behavior: smooth;
}
</style>
