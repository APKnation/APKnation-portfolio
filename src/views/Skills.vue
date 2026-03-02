<template>
  <section id="skills" class="py-4 sm:py-6 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-white">
          My Skills
        </h2>
      </transition>

      <div class="space-y-4 sm:space-y-6">
        <!-- Technical Skills Overview -->
        <div>
          <transition appear name="slide-up">
            <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Technical Proficiency
            </h3>
          </transition>
          <p class="text-center text-gray-400 text-sm max-w-3xl mx-auto mb-6">
            My technical expertise spans across modern web development technologies, with a focus on building 
            scalable, performant applications that deliver exceptional user experiences.
          </p>
          
          <!-- Responsive Skills Display -->
          <div class="space-y-4">
            <!-- Mobile: Horizontal Bars -->
            <div class="block sm:hidden space-y-3">
              <div
                v-for="(skill, index) in skills"
                :key="skill.name"
                class="skill-bar-mobile group"
                :style="{ transitionDelay: `${index * 50}ms` }"
              >
                <div class="flex items-center justify-between mb-1">
                  <div class="flex items-center space-x-2">
                    <span class="text-lg">{{ skill.icon }}</span>
                    <span class="text-white text-sm font-medium">{{ skill.name }}</span>
                  </div>
                  <span class="text-primary-400 text-sm font-bold">{{ skill.level }}%</span>
                </div>
                <div class="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: `${skill.level}%` }"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Desktop: Circular Progress -->
            <div class="hidden sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
              <div
                v-for="(skill, index) in skills"
                :key="skill.name"
                class="skill-circle group"
                :style="{ transitionDelay: `${index * 50}ms` }"
              >
                <!-- Circular Progress -->
                <div class="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-24 mx-auto mb-1 sm:mb-1.5">
                  <!-- SVG Circle Background -->
                  <svg class="absolute inset-0 transform -rotate-90 w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35%"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      class="text-gray-700"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35%"
                      stroke="currentColor"
                      stroke-width="3"
                      fill="none"
                      :stroke-dasharray="`${circumference}`"
                      :stroke-dashoffset="circumference - (skill.level / 100) * circumference"
                      class="text-primary-500 transition-all duration-1000 ease-out group-hover:text-primary-400"
                      stroke-linecap="round"
                    />
                  </svg>
                  
                  <!-- Center Content -->
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-xs sm:text-xs md:text-sm lg:text-lg mb-0.5 group-hover:animate-bounce">
                      {{ skill.icon }}
                    </span>
                    <span class="text-xs font-bold text-white">
                      {{ skill.level }}%
                    </span>
                  </div>
                </div>
                
                <!-- Skill Name -->
                <h4 class="font-medium text-white text-xs text-center 
                           group-hover:text-primary-300 transition-all duration-300 
                           transform group-hover:scale-105">
                  {{ skill.name }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Development Methodologies -->
        <div>
          <transition appear name="slide-up">
            <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Development Approach
            </h3>
          </transition>
          
          <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 
                           hover:border-primary-500/50 transition-all duration-500">
              <h4 class="text-white text-sm font-semibold mb-2 flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Agile Methodologies
              </h4>
              <p class="text-gray-400 text-xs">Scrum, Kanban, iterative development with continuous feedback loops</p>
            </div>
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 
                           hover:border-primary-500/50 transition-all duration-500">
              <h4 class="text-white text-sm font-semibold mb-2 flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Clean Code Principles
              </h4>
              <p class="text-gray-400 text-xs">SOLID principles, DRY, KISS, maintainable and readable code architecture</p>
            </div>
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 
                           hover:border-primary-500/50 transition-all duration-500">
              <h4 class="text-white text-sm font-semibold mb-2 flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Testing Strategies
              </h4>
              <p class="text-gray-400 text-xs">Unit testing, integration testing, TDD approach for reliable software</p>
            </div>
          </div>
        </div>

        <!-- Skills Categories - Card Design -->
        <div>
          <transition appear name="slide-up">
            <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Skill Categories
            </h3>
          </transition>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            <!-- Frontend Development -->
            <div class="category-card group">
              <div class="bg-gray-800/50 backdrop-blur-sm rounded-md p-2 sm:p-3 border border-gray-700/50 
                         hover:border-primary-500/50 transition-all duration-500 transform 
                         hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div class="text-center mb-1.5 sm:mb-2">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full 
                               flex items-center justify-center mx-auto mb-1.5 sm:mb-2 group-hover:animate-pulse">
                    <Code class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h4 class="text-xs sm:text-sm font-semibold text-white mb-0.5">Frontend Development</h4>
                  <p class="text-gray-400 text-xs">Building responsive and interactive user interfaces</p>
                </div>
                
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Vue.js</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">React</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Tailwind CSS</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Development -->
            <div class="category-card group">
              <div class="bg-gray-800/50 backdrop-blur-sm rounded-md p-2 sm:p-3 border border-gray-700/50 
                         hover:border-primary-500/50 transition-all duration-500 transform 
                         hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div class="text-center mb-1.5 sm:mb-2">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full 
                               flex items-center justify-center mx-auto mb-1.5 sm:mb-2 group-hover:animate-pulse">
                    <Server class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h4 class="text-xs sm:text-sm font-semibold text-white mb-0.5">Backend Development</h4>
                  <p class="text-gray-400 text-xs">Creating robust server-side applications and APIs</p>
                </div>
                
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Laravel</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Node.js</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Django</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools & Technologies -->
            <div class="category-card group">
              <div class="bg-gray-800/50 backdrop-blur-sm rounded-md p-2 sm:p-3 border border-gray-700/50 
                         hover:border-primary-500/50 transition-all duration-500 transform 
                         hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div class="text-center mb-1.5 sm:mb-2">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full 
                               flex items-center justify-center mx-auto mb-1.5 sm:mb-2 group-hover:animate-pulse">
                    <Wrench class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h4 class="text-xs sm:text-sm font-semibold text-white mb-0.5">Tools & Technologies</h4>
                  <p class="text-gray-400 text-xs">Modern development tools and workflows</p>
                </div>
                
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Git/GitHub</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">Docker</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-300">VS Code</span>
                    <div class="flex space-x-0.5">
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                      <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/index'
import { Code, Server, Wrench } from 'lucide-vue-next'

const portfolioStore = usePortfolioStore()

const skills = computed(() => portfolioStore.skills)

const professionalSkills = [
  { name: 'Problem Solving', level: 95 },
  { name: 'Teamwork', level: 90 },
  { name: 'Communication', level: 85 },
  { name: 'Project Management', level: 80 }
]

const circumference = computed(() => {
  const radius = 35 // 35% of container size (updated from 40%)
  return 2 * Math.PI * radius
})

const getSkillBarClass = (color) => {
  const colorClasses = {
    yellow: 'bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:from-yellow-300 group-hover:to-yellow-500',
    indigo: 'bg-gradient-to-r from-indigo-400 to-indigo-600 group-hover:from-indigo-300 group-hover:to-indigo-500',
    green: 'bg-gradient-to-r from-green-500 to-green-700 group-hover:from-green-400 group-hover:to-green-600',
    orange: 'bg-gradient-to-r from-orange-400 to-orange-600 group-hover:from-orange-300 group-hover:to-orange-500',
    cyan: 'bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:from-cyan-300 group-hover:to-cyan-500',
    red: 'bg-gradient-to-r from-red-500 to-red-600 group-hover:from-red-400 group-hover:to-red-500',
    purple: 'bg-gradient-to-r from-purple-400 to-purple-600 group-hover:from-purple-300 group-hover:to-purple-500'
  }
  return colorClasses[color] || colorClasses.green
}
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }
  100% {
    transform: translateX(100%) skewX(-12deg);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.skill-circle {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.skill-bar-mobile {
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInLeft 0.6s ease-out forwards;
}

.category-card {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
