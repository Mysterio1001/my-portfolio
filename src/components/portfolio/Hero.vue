<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div class="space-y-8 text-left">
          <div class="space-y-4">
            <p class="font-mono text-sm text-green-500 tracking-wider">
              {{ "// Hello, World!" }}
            </p>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
            >
              <span>I'm&nbsp;</span>
              <span class="text-5xl sm:text-6xl lg:text-7xl text-blue-500">
                &nbsp;Ian Wu</span
              >
            </h1>
            <div class="h-12 sm:h-14">
              <p
                class="font-mono text-xl sm:text-2xl text-slate-500 dark:text-slate-400"
              >
                {{ ">" }} {{ displayedText }}
                <span class="animate-pulse text-blue-500">|</span>
              </p>
            </div>
          </div>

          <p
            class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg"
          >
            {{ $t("hero.description") }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              class="flex items-center justify-center gap-2 px-6 py-3 font-mono bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30"
            >
              <FolderOpen class="h-4 w-4" />
              {{ $t("hero.viewProjects") }}
            </a>
            <a
              href="/resume.pdf"
              download
              class="flex items-center justify-center gap-2 px-6 py-3 font-mono glass-effect rounded-xl hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10"
            >
              <FileText class="h-4 w-4" />
              {{ $t("hero.downloadResume") }}
            </a>
          </div>
        </div>

        <div class="hidden lg:block relative">
          <div
            class="absolute -inset-1 bg-linear-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-50"
          ></div>
          <div
            class="relative glass-effect rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div
              class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10"
            >
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span class="font-mono text-xs text-slate-500 ml-2">
                developer.vue
              </span>
            </div>
            <!-- 程式碼展現 -->
            <pre class="p-6 font-mono text-sm leading-relaxed text-left">
<code class="font-mono text-sm sm:text-base leading-relaxed">
    <span class="text-purple-600 dark:text-purple-400 font-bold">const</span> 
    <span class="text-blue-600 dark:text-blue-400">developer</span> = {
      <span class="text-red-600 dark:text-red-400">name</span>: <span class="text-green-600 dark:text-green-400">'Ian Wu'</span>,
      <span class="text-red-600 dark:text-red-400">role</span>: <span class="text-green-600 dark:text-green-400">'Frontend Engineer'</span>,
      <span class="text-red-600 dark:text-red-400">industry</span>: <span class="text-green-600 dark:text-green-400">'MES System'</span>,
      <span class="text-red-600 dark:text-red-400">skills</span>: [
        <span class="text-green-600 dark:text-green-400">'Vue 2/3'</span>, <span class="text-green-600 dark:text-green-400">'React'</span>, <span class="text-green-600 dark:text-green-400">'TypeScript'</span>
        <span class="text-green-600 dark:text-green-400">'SCSS/Tailwind CSS'</span>, <span class="text-green-600 dark:text-green-400">'RWD'</span>
        <span class="text-green-600 dark:text-green-400">'AI-Assisted Development'</span>
      ]
      <span class="text-red-600 dark:text-red-400">available</span>: <span class="text-green-600 dark:text-green-400">true</span>
    };
  </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowDown, FileText, FolderOpen } from "lucide-vue-next";

const { t, locale } = useI18n();

// 1. 打字機邏輯
const displayedText = ref("");
const isDeleting = ref(false);
const currentTitleIndex = ref(0);

// 從 i18n 獲取標題清單
const titlesKey = [
  "hero.typewriter.0",
  "hero.typewriter.1",
  "hero.typewriter.2",
  "hero.typewriter.3",
];
const titles = computed(() => titlesKey.map((i) => t(i)));

const type = () => {
  if (titles.value.length === 0) return;

  const currentTitle = titles.value[currentTitleIndex.value];
  const fullText = currentTitle;

  if (isDeleting.value) {
    displayedText.value = fullText.substring(0, displayedText.value.length - 1);
  } else {
    displayedText.value = fullText.substring(0, displayedText.value.length + 1);
  }

  let typeSpeed = isDeleting.value ? 50 : 80;

  if (!isDeleting.value && displayedText.value === fullText) {
    typeSpeed = 1000; // 打完字停頓
    isDeleting.value = true;
  } else if (isDeleting.value && displayedText.value === "") {
    isDeleting.value = false;
    currentTitleIndex.value =
      (currentTitleIndex.value + 1) % titles.value.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
};

// 當語言切換時，重置打字機避免索引溢出
watch(locale, () => {
  displayedText.value = "";
  isDeleting.value = false;
  currentTitleIndex.value = 0;
});
onMounted(() => {
  type();
});
</script>
