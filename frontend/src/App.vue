<template>
  <div id="app" :class="{ 'dark': isDarkMode }">
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* AGGRESSIVE Dark Mode Styles */
.dark {
  color-scheme: dark !important;
}

/* Force backgrounds with highest specificity */
html.dark body,
html.dark #app,
.dark #app,
.dark section {
  background-color: #000000 !important;
}

.dark .bg-gray-900,
.dark .bg-gray-800,
.dark .bg-gray-700 {
  background-color: #000000 !important;
}

/* Force text colors */
html.dark body,
html.dark #app,
.dark .text-white {
  color: #f9fafb !important;
}

.dark .text-gray-100 {
  color: #f3f4f6 !important;
}

.dark .text-gray-300 {
  color: #d1d5db !important;
}

.dark .text-gray-400 {
  color: #9ca3af !important;
}

.dark .text-gray-500 {
  color: #6b7280 !important;
}

.dark .text-cyan-300 {
  color: #67e8f9 !important;
}

.dark .text-cyan-400 {
  color: #22d3ee !important;
}

/* Force card backgrounds */
.dark .bg-gray-800\/50,
.dark .bg-gray-700\/30 {
  background-color: #111827 !important;
}

/* Light mode with highest specificity */
html:not(.dark) body,
html:not(.dark) #app,
:not(.dark) #app,
:not(.dark) section {
  background-color: #111827 !important;
}

:not(.dark) .bg-gray-900,
:not(.dark) .bg-gray-800 {
  background-color: #111827 !important;
}

:not(.dark) .text-white {
  color: #ffffff !important;
}

:not(.dark) .text-gray-400 {
  color: #9ca3af !important;
}

:not(.dark) .text-gray-500 {
  color: #6b7280 !important;
}

:not(.dark) .text-cyan-300 {
  color: #67e8f9 !important;
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
