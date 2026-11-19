<template>
  <nav
    class="fixed top-0 left-0 w-full backdrop-blur-lg shadow-2xl z-40
           border-b border-gradient-to-r from-primary-500/30 via-secondary-500/30 to-indigo-500/30
           transition-all duration-500"
    :class="scrolled ? 'bg-gray-900/80 shadow-primary-950/40' : 'bg-gray-900/95'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center transition-all duration-500" :class="scrolled ? 'h-14' : 'h-16'">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-xl font-bold text-white hover:text-primary-300
                                     transition flex items-center group">
            <span class="mr-2 text-2xl group-hover:animate-pulse">📱</span>
            <span class="gradient-text group-hover:from-primary-300 group-hover:to-secondary-300
                           transition-all duration-300">APKnation</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-1 items-center">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="nav-link text-white hover:bg-gradient-to-r hover:from-primary-600/80 hover:to-secondary-600/80
                     px-3 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base
                     hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            :class="{ 'bg-gradient-to-r from-primary-600/80 to-secondary-600/80':
                     $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
          <a
            :href="adminUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-gray-300 hover:text-white hover:bg-gray-700/70
                     px-3 py-2 rounded-lg transition-all duration-300 text-sm
                     border border-gray-700/60 hover:border-gray-500/60"
            title="Portfolio admin (manage content)"
          >
            Admin
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            class="inline-flex items-center justify-center p-2 rounded-md text-white
                     hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500
                     focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200
                     ease-in-out transform hover:scale-110 hover:bg-gray-700/80"
          >
            <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-x-full opacity-0"
      enter-to-class="transform translate-x-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-x-0 opacity-100"
      leave-to-class="transform translate-x-full opacity-0"
    >
      <div
        v-show="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden fixed top-16 right-0 w-64 bg-gradient-to-br from-gray-900 via-primary-900/95 to-gray-900/95 backdrop-blur-xl
                transition-all duration-300 ease-in-out border-l border-primary-500/30 shadow-2xl rounded-l-xl"
      >
        <div class="px-3 py-3 space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-lg text-white hover:bg-gradient-to-r
                     hover:from-primary-600/80 hover:to-secondary-600/80 transition-all
                     duration-300 relative overflow-hidden group text-sm"
            :class="{ 'bg-gradient-to-r from-primary-600/60 to-secondary-600/60':
                     $route.path === item.path }"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative flex items-center justify-between">
              <span class="font-medium group-hover:text-white transition-colors">{{ item.name }}</span>
              <div v-if="$route.path === item.path" class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <div v-else class="w-0 h-0 border-t border-r border-transparent
                       group-hover:border-white transition-all duration-300
                       transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r
                       from-primary-400 to-secondary-400 transform scale-x-0
                       group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </router-link>
          <a
            :href="adminUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-700/70 transition-all duration-300 text-sm border border-gray-700/50"
          >
            Admin (manage content)
          </a>
        </div>

        <!-- Mobile Menu Footer -->
        <div class="px-3 py-2 border-t border-gray-700/50">
          <div class="flex items-center justify-center space-x-3">
            <a
              v-if="profile.githubUrl"
              :href="profile.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              v-if="profile.instagramUrl"
              :href="profile.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram class="w-4 h-4" />
            </a>
            <a
              v-if="profile.whatsappUrl || profile.phone"
              :href="profile.whatsappUrl || ('https://wa.me/' + (profile.phone || '').replace(/[^0-9]/g, ''))"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <MessageCircle class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Github, Instagram, MessageCircle } from 'lucide-vue-next'
import { usePortfolioStore } from '@/stores/index'

const route = useRoute()
const portfolioStore = usePortfolioStore()
const profile = computed(() => portfolioStore.profile)
const isMobileMenuOpen = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

const adminUrl = (import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000').replace(/\/$/, '') + '/admin/'

const menuItems = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'About', path: '/about', icon: '👤' },
  { name: 'Skills', path: '/skills', icon: '💻' },
  { name: 'Experience', path: '/experience', icon: '💼' },
  { name: 'Projects', path: '/projects', icon: '🛠️' },
  { name: 'Contact', path: '/contact', icon: '📧' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 3px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #a1c181, #faf0ca);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:not(.router-link-active):hover::after {
  transform: scaleX(1);
}
</style>
