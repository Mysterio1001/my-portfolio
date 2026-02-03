<template>
  <section id="projects" class="py-24 relative z-10">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="font-mono text-sm text-green-500 mb-2">
          {{ "// My Projects" }}
        </p>
        <h2
          class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          {{ $t("projects.title") }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ $t("projects.subtitle") }}
        </p>
      </div>
      <!-- 專案清單 -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in defaultProjects"
          :key="project.id"
          class="group glass-effect border border-white/10 overflow-hidden rounded-2xl hover:border-blue-500/30 transition-all duration-500 shadow-xl"
        >
          <div class="relative aspect-video overflow-hidden bg-slate-800">
            <img
              :src="project.image"
              :alt="project.title"
              @error="handleImgError"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div
              class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            >
              <a
                :href="project.github"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 px-3 py-2 font-mono text-xs glass-effect border border-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Github class="h-3.5 w-3.5" /> Code
              </a>
              <a
                :href="project.demo"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 px-3 py-2 font-mono text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                <ExternalLink class="h-3.5 w-3.5" /> Demo
              </a>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-500 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2"
            >
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 py-1 font-mono text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-md"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 展示超過三筆以上的資料 -->
      <div class="text-center mt-12" v-if="projects.length >= 3">
        <div
          class="group inline-flex items-center gap-2 px-6 py-3 font-mono glass-effect border border-white/10 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
          @click="showAllProjects"
        >
          <span v-if="!isExpanded">
            {{ t("projects.viewAllProjects") }}
          </span>
          <ArrowUp
            v-if="isExpanded"
            class="h-4 w-4 group-hover:animate-bounce"
          />
          <ArrowDown v-else class="h-4 w-4 group-hover:animate-bounce" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { ExternalLink, Github, ArrowDown, ArrowUp } from "lucide-vue-next";
import { projects } from "@/data/projects.js";

const { t } = useI18n();

const defaultImg = "/public/default/placeholder.svg";
// 資料是否展開
const isExpanded = ref(false);

// 僅展示前三筆資料
const defaultProjects = computed(() => {
  return isExpanded.value ? projects : projects.slice(0, 3);
});
// 展示全部資料
const showAllProjects = () => {
  isExpanded.value = !isExpanded.value;
};

// 圖片錯誤時處理
const handleImgError = (e) => {
  // 找不到圖就用預設
  e.target.src = defaultImg;
  // 處理為預設圖後關閉錯誤 防止無限迴圈
  e.target.onerror = null;
};
</script>
