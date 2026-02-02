<script setup>
// 1. 匯入我們剛剛轉換好的 Header 組件
import Header from "./components/Header.vue";
// 之後我們會在這裡匯入 Hero, Projects 等組件
// import Hero from './components/portfolio/Hero.vue'

// 這裡不需要重複定義 isDark 邏輯，因為 Header 裡面已經有主題切換功能了
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <div
      class="fixed top-[-10%] left-[-10%] w-125 h-125 bg-white light:bg-white dark:bg-blue-600 rounded-full blur-[120px] opacity-100 dark:opacity-20 animate-pulse pointer-events-none transition-all duration-1000"
    />
    <div
      class="fixed bottom-[-10%] right-[-10%] w-150 h-150 bg-white light:bg-white dark:bg-purple-900 rounded-full blur-[150px] opacity-100 dark:opacity-20 pointer-events-none transition-all duration-1000"
    />

    <Header />

    <main class="relative z-10 pt-16">
      <section
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
      </section>
    </main>
  </div>
</template>

<style>
/* 確保 html 滾動行為平滑 */
html {
  scroll-behavior: smooth;
}
</style>
