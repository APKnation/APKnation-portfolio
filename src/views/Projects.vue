<template>
  <section id="projects" class="py-16 sm:py-20 px-4 bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
          My Projects 
        </h2>
      </transition>
      
      <p class="text-center text-gray-400 text-sm max-w-3xl mx-auto mb-8">
        Explore my diverse portfolio of projects showcasing practical applications of modern web technologies. 
        Each project represents unique challenges solved through innovative solutions and best practices.
      </p>

      <!-- Filter Controls -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="activeCategory === category 
            ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'"
          class="px-4 py-2 rounded-lg font-medium transition-all duration-300"
        >
          {{ category }}
        </button>
      </div>

      <!-- Search Bar -->
      <div class="max-w-md mx-auto mb-8">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search projects..."
            class="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="project-card group relative overflow-hidden"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Project Image Container -->
          <div class="relative overflow-hidden h-40 sm:h-48">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              loading="lazy"
            >
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <!-- Quick Actions Overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 
                         group-hover:opacity-100 transition-all duration-500 transform 
                         translate-y-4 group-hover:translate-y-0">
              <div class="flex space-x-3">
                <a 
                  :href="project.demoUrl" 
                  class="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full 
                         transition-all duration-300 transform hover:scale-110 hover:rotate-12 
                         shadow-lg hover:shadow-primary-500/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`View live demo of ${project.title}`"
                >
                  <ExternalLink class="w-5 h-5" />
                </a>
                <a 
                  :href="project.githubUrl" 
                  class="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full 
                         transition-all duration-300 transform hover:scale-110 hover:-rotate-12 
                         shadow-lg hover:shadow-gray-500/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`View source code of ${project.title}`"
                >
                  <Github class="w-5 h-5" />
                </a>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm px-3 py-1 
                         rounded-full text-xs text-gray-300 opacity-0 group-hover:opacity-100 
                         transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
              {{ project.category }}
            </div>

            <!-- Featured Badge -->
            <div v-if="project.featured" 
                 class="absolute top-3 right-3 bg-primary-600 px-3 py-1 rounded-full 
                        text-xs text-white font-medium opacity-0 group-hover:opacity-100 
                        transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              Featured
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-4 sm:p-6 relative">
            <!-- Title with Hover Effect -->
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-2 
                       transition-all duration-300 group-hover:text-primary-300 
                       transform group-hover:translate-x-1">
              {{ project.title }}
            </h3>
            
            <!-- Description with Expand on Hover -->
            <p class="text-gray-400 mb-4 text-sm sm:text-base line-clamp-2 
                       group-hover:line-clamp-none transition-all duration-300 
                       group-hover:text-gray-300 max-h-12 sm:max-h-none overflow-hidden">
              {{ project.description }}
            </p>
            
            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-2 mb-4 max-h-12 sm:max-h-none overflow-hidden">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="bg-gray-700/50 text-gray-300 text-xs px-2 sm:px-3 py-1 
                       rounded-full border border-gray-600/30 
                       hover:bg-primary-600/30 hover:border-primary-500/50 
                       hover:text-primary-300 transition-all duration-300 
                       transform hover:scale-105 cursor-default"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Links with Enhanced Hover -->
            <div class="flex space-x-3 items-center">
              <a 
                :href="project.demoUrl" 
                class="text-primary-400 hover:text-primary-300 font-medium text-xs sm:text-base 
                       transition-all duration-300 hover:scale-110 flex items-center space-x-1 
                       group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Demo</span>
                <ArrowUpRight class="w-3 h-3 opacity-0 group-hover:opacity-100 
                                transition-all duration-300 transform group-hover:translate-x-1 
                                group-hover:-translate-y-1" />
              </a>
              <a 
                :href="project.githubUrl" 
                class="text-gray-400 hover:text-gray-300 font-medium text-xs sm:text-base 
                       transition-all duration-300 hover:scale-110 flex items-center space-x-1 
                       group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Source Code</span>
                <Github class="w-3 h-3 opacity-0 group-hover:opacity-100 
                           transition-all duration-300 transform group-hover:translate-x-1 
                           group-hover:-translate-y-1" />
              </a>
            </div>

            <!-- Hover Border Effect -->
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                         from-primary-600 to-secondary-600 transform scale-x-0 
                         group-hover:scale-x-100 transition-transform duration-500 
                         origin-left"></div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <p class="text-gray-400 text-lg">No projects found matching your criteria.</p>
      </div>

      <!-- View All Projects Button -->
      <transition appear name="slide-up">
        <div class="text-center mt-8 sm:mt-12">
          <button class="inline-flex items-center space-x-2 btn-primary text-sm sm:text-base">
            <span>View All Projects</span>
            <ExternalLink class="w-4 h-4" />
          </button>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePortfolioStore } from '@/stores/index'
import { Search, ExternalLink, Github, ArrowUpRight } from 'lucide-vue-next'

const portfolioStore = usePortfolioStore()
const activeCategory = ref('All')
const searchQuery = ref('')

const categories = ['All', 'Web', 'Mobile', 'Design']

const filteredProjects = computed(() => {
  let projects = portfolioStore.projects
  
  // Filter by category
  if (activeCategory.value !== 'All') {
    projects = projects.filter(project => 
      project.category.toLowerCase() === activeCategory.value.toLowerCase()
    )
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    projects = projects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    )
  }
  
  return projects
})
</script>
