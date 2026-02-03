<template>
  <section id="about" class="py-24 relative">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="font-mono text-sm text-green-500 mb-2">
          {{ "// Get to Know Me" }}
        </p>
        <h2
          class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100"
        >
          {{ t("about.title") }}
        </h2>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div class="space-y-6">
          <div
            class="glass-effect p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            <div class="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <MapPin class="h-4 w-4" />
              <span>{{ bioData.location }}</span>
            </div>

            <div
              class="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              <div v-for="(item, index) in bioData.content" :key="index">
                <h4
                  class="text-base font-semibold text-slate-900 dark:text-slate-100"
                >
                  {{ t(item.title) }}
                </h4>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {{ t(item.desc) }}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mt-6">
              <span
                v-for="tag in bioData.tags"
                :key="tag"
                class="px-3 py-1 font-mono text-xs glass-effect border border-white/10 rounded-full text-slate-500"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <h3
            class="font-mono text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6"
          >
            {{ "// Journey" }}
          </h3>
          <div class="relative space-y-8">
            <div
              class="absolute left-4.75 top-2 bottom-2 w-px bg-slate-200 dark:bg-white/10"
            />

            <div
              v-for="(item, index) in timelineData"
              :key="index"
              class="relative flex gap-6"
            >
              <div
                :class="[
                  'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-lg glass-effect',
                  typeColors[item.type],
                ]"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </div>

              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="font-mono text-xs text-blue-500">{{
                    item.year
                  }}</span>
                  <span
                    class="px-2 py-0.5 text-[10px] uppercase tracking-wider border rounded-md opacity-70"
                  >
                    {{ item.type }}
                  </span>
                </div>
                <h4 class="font-semibold text-slate-900 dark:text-slate-100">
                  {{ t(item.title) }}
                </h4>
                <p class="text-sm text-slate-500">{{ t(item.organization) }}</p>
                <p
                  class="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed"
                >
                  {{ t(item.desc) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { MapPin, Award, BookOpen } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { bioData, timelineData } from "@/data/about.js"; // 匯入數據

const { t } = useI18n();

const typeColors = {
  work: "text-blue-500 border-blue-500/20 bg-blue-500/10",
  certification: "text-green-500 border-green-500/20 bg-green-500/10",
  education: "text-amber-500 border-amber-500/20 bg-amber-500/10",
};
</script>
