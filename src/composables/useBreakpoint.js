import { ref, onMounted, onUnmounted } from "vue";

// Tailwind 預設斷點
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpoint() {
  // 也提供當前斷點名稱
  const current = ref("");

  const update = () => {
    const width = window.innerWidth;

    // 判斷當前斷點
    if (width >= BREAKPOINTS["2xl"]) {
      current.value = "2xl";
    } else if (width >= BREAKPOINTS.xl) {
      current.value = "xl";
    } else if (width >= BREAKPOINTS.lg) {
      current.value = "lg";
    } else if (width >= BREAKPOINTS.md) {
      current.value = "md";
    } else if (width >= BREAKPOINTS.sm) {
      current.value = "sm";
    } else {
      current.value = "xs";
    }
  };

  onMounted(() => {
    update();
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  return current; // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}
