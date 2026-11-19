<template>
  <div id="app" :class="{ 'dark': isDarkMode }">
    <ScrollProgress />
    <CursorGlow />
    <Navbar />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />

    <!-- Theme Toggle Button -->
    <button
      @click="toggleTheme"
      class="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary-600 to-secondary-600 
                 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <Sun v-if="isDarkMode" class="w-6 h-6 text-white" />
      <Moon v-else class="w-6 h-6 text-white" />
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useThemeStore, usePortfolioStore } from '@/stores/index'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import CursorGlow from '@/components/CursorGlow.vue'
import { Sun, Moon } from 'lucide-vue-next'

const themeStore = useThemeStore()
const portfolioStore = usePortfolioStore()
const isDarkMode = computed(() => themeStore.isDarkMode)

const toggleTheme = () => {
  themeStore.toggleTheme()
}

onMounted(() => {
  if (themeStore.isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  portfolioStore.fetchFromApi()
})
</script>

<style>
/* Page transitions */
.fade-enter-active {
  transition:
    opacity 0.55s ease,
    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.55s ease;
}

.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.992);
  filter: blur(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.996);
  filter: blur(4px);
}

.slide-up-enter-active {
  transition:
    opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-leave-active {
  transition: all 0.45s ease;
}

.slide-up-enter-from {
  transform: translateY(40px);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}

/* Single palette: navy #0d3b66, cream #faf0ca, sage #a1c181 */
.dark {
  color-scheme: dark !important;
}

/* Force backgrounds with highest specificity */
html.dark body,
html.dark #app,
.dark #app,
.dark section {
  background-color: #0d3b66 !important;
}

.dark .bg-gray-900 {
  background-color: #0a2f53 !important;
}

.dark .bg-gray-800,
.dark .bg-gray-700 {
  background-color: #1c4a72 !important;
}

/* Force text colors */
html.dark body,
html.dark #app,
.dark .text-white {
  color: #faf0ca !important;
}

.dark .text-gray-100 {
  color: #faf0ca !important;
}

.dark .text-gray-300 {
  color: #d9e8f4 !important;
}

.dark .text-gray-400 {
  color: #b6cfe3 !important;
}

.dark .text-gray-500 {
  color: #7e9bb4 !important;
}

.dark .text-cyan-300,
.dark .text-cyan-400 {
  color: #a1c181 !important;
}

/* Force card backgrounds */
.dark .bg-gray-800\/50,
.dark .bg-gray-700\/30 {
  background-color: #1c4a72 !important;
}

/* Light mode keeps the same navy/cream/sage palette */
html:not(.dark) body,
html:not(.dark) #app,
:not(.dark) #app,
:not(.dark) section {
  background-color: #0d3b66 !important;
}

:not(.dark) .bg-gray-900,
:not(.dark) .bg-gray-800 {
  background-color: #1c4a72 !important;
}

:not(.dark) .text-white {
  color: #faf0ca !important;
}

:not(.dark) .text-gray-400 {
  color: #b6cfe3 !important;
}

:not(.dark) .text-gray-500 {
  color: #7e9bb4 !important;
}

:not(.dark) .text-cyan-300 {
  color: #a1c181 !important;
}

/* Theme button visibility */
.theme-toggle-btn {
  position: fixed !important;
  top: 20px !important;
  right: 20px !important;
  z-index: 9999 !important;
  background: transparent !important;
  padding: 10px !important;
  border-radius: 50% !important;
}
</style>
