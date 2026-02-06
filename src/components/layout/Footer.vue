<template>
  <footer class="border-t border-white/10 glass-effect relative z-10">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <p class="font-mono text-sm text-green-500 mb-2">
          {{ "// Let's Connect" }}
        </p>
        <h2
          class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          {{ t("footer.title") }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          {{ t("footer.subtitle") }}
        </p>

        <a
          href="mailto:holmes9073@gmail.com"
          class="inline-flex items-center gap-2 px-8 py-4 font-mono bg-blue-500 text-white rounded-xl hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all shadow-lg"
        >
          <Mail class="h-4 w-4" />
          {{ t("footer.sendMessage") }}
        </a>
      </div>

      <div class="flex justify-center gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.href"
          target="_blank"
          class="p-3 text-slate-500 hover:text-blue-500 glass-effect border border-white/10 rounded-xl hover:scale-110 transition-all shadow-md"
          :aria-label="link.name"
        >
          <component :is="link.icon" class="h-5 w-5" />
        </a>
      </div>
    </div>

    <div class="border-t border-white/5 bg-white/5">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500"
        >
          <div
            class="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-slate-100"
          >
            <Terminal class="h-4 w-4 text-blue-500" />
            <span>{{ "<IAN />" }}</span>
          </div>

          <p class="flex items-center gap-1.5">
            Built with
            <Heart
              class="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse"
            />
            using <span class="text-blue-500 font-medium">Vue 3</span> &
            <span class="text-blue-500 font-medium">Tailwind v4</span>
          </p>

          <p class="font-mono text-xs opacity-70">
            &copy; {{ currentYear }} Ian Wu. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Github,
  Linkedin,
  Mail,
  FileUser,
  Heart,
  Terminal,
} from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { githubUrl } from "@/config/url";

const { t } = useI18n();
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    href: githubUrl,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "#", // 建議填入你的 LinkedIn
    icon: Linkedin,
  },
  {
    name: "FileUser",
    href: "mailto:your-email@example.com",
    icon: FileUser,
  },
];
</script>
