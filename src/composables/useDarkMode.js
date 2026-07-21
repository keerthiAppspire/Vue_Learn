import { ref, watch } from 'vue'
export function useDarkMode() {
  const darkMode = ref(
    JSON.parse(localStorage.getItem('dark-mode')) || false
  )
  watch(
    darkMode,
    (enabled) => {
      document.documentElement.classList.toggle('dark', enabled)

      localStorage.setItem(
        'dark-mode',
        JSON.stringify(enabled)
      )
    },
    { immediate: true }
  )

  return {
    darkMode
  }
}