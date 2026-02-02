<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <a
          href="#"
          class="flex items-center gap-2 font-mono text-lg font-semibold"
        >
          <Terminal class="h-5 w-5 text-blue-500" />
          <span class="hidden sm:inline text-slate-900 dark:text-slate-100">
            {{ "<IAN />" }}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="font-mono text-sm text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <div class="relative">
            <button
              @click="langMenuOpen = !langMenuOpen"
              class="flex items-center gap-1 font-mono text-xs text-slate-600 dark:text-slate-300 hover:text-blue-500 cursor-pointer"
            >
              {{ currentLang }}
              <ChevronDown
                class="w-3 h-3 transition-transform"
                :class="{ 'rotate-180': langMenuOpen }"
              />
            </button>

            <transition name="fade">
              <div
                v-if="langMenuOpen"
                class="absolute top-full right-0 mt-2 w-32 glass-effect rounded-xl overflow-hidden py-1 shadow-xl"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="selectLang(lang.code)"
                  class="w-full text-left px-4 py-2 text-xs font-mono hover:bg-blue-500/10 transition-colors"
                >
                  {{ lang.code }} - {{ lang.label }}
                </button>
              </div>
            </transition>
          </div>

          <button
            @click="toggleDark()"
            class="relative w-10 h-10 flex items-center justify-center rounded-xl glass-effect hover:scale-110 active:scale-95 transition-all cursor-pointer overflow-hidden"
          >
            <transition name="sun-moon" mode="out-in">
              <Sun v-if="isDark" key="sun" class="h-5 w-5 text-yellow-400" />
              <Moon v-else key="moon" class="h-5 w-5 text-blue-500" />
            </transition>
          </button>

          <button
            class="md:hidden p-2 text-slate-600 dark:text-slate-200 cursor-pointer"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <X v-if="mobileMenuOpen" class="h-6 w-6" />
            <Menu v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden border-t border-white/10 py-6"
        >
          <nav class="flex flex-col gap-4">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="mobileMenuOpen = false"
              class="font-mono text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Moon, Sun, Menu, X, Terminal, ChevronDown } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

// 1. 主題管理
// Header.vue
const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark", // 深色時加上 .dark (配合 Tailwind v4)
  valueLight: "light", // 淺色時加上 .light (配合我們新的 CSS 設定)
  initialValue: "dark", // 強制預設初始值為深色
});
const toggleDark = useToggle(isDark);

// 2. 狀態定義
const mobileMenuOpen = ref(false);
const currentLang = ref("ZH");
const langMenuOpen = ref(false);

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

const languages = [
  { code: "ZH", label: "中文" },
  { code: "EN", label: "English" },
];

const selectLang = (code) => {
  locale.value = code; // 直接修改全域語系
  currentLang.value = code;
  langMenuOpen.value = false;
};
</script>

<style scoped>
/* 簡單的動畫效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sun-moon-enter-active,
.sun-moon-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.sun-moon-enter-from {
  transform: rotate(90deg) scale(0);
  opacity: 0;
}
.sun-moon-leave-to {
  transform: rotate(-90deg) scale(0);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
  max-height: 200px;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
