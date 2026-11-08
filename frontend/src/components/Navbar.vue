<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-2xl z-40 
               border-b border-gradient-to-r from-primary-500/30 via-secondary-500/30 to-indigo-500/30 
               transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
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
        <div class="hidden md:flex space-x-1">
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
            <!-- Animated Background -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Content -->
            <div class="relative flex items-center justify-between">
              <span class="font-medium group-hover:text-white transition-colors">
                {{ item.name }}
              </span>
              
              <!-- Active State Indicator -->
              <div 
                v-if="$route.path === item.path"
                class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              ></div>
              
              <!-- Hover Arrow -->
              <div 
                v-else
                class="w-0 h-0 border-t border-r border-transparent 
                       group-hover:border-white transition-all duration-300 
                       transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              ></div>
            </div>
            
            <!-- Bottom Border Effect -->
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                       from-primary-400 to-secondary-400 transform scale-x-0 
                       group-hover:scale-x-100 transition-transform duration-300 
                       origin-left"></div>
          </router-link>
        </div>
        
        <!-- Mobile Menu Footer -->
        <div class="px-3 py-2 border-t border-gray-700/50">
          <div class="flex items-center justify-center space-x-3">
            <a
              href="https://github.com/APKnation"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 
                     transform hover:scale-110"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/apk_nation"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 
                     transform hover:scale-110"
            >
              <Instagram class="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/255749288072"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300 
                     transform hover:scale-110"
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Github, Instagram, MessageCircle } from 'lucide-vue-next'

const route = useRoute()
const isMobileMenuOpen = ref(false)

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
