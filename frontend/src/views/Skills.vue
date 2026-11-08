<template>
  <section id="skills" class="py-4 sm:py-6 px-4 text-white dark:text-gray-100 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 dark:from-purple-950/50 dark:via-blue-950/50 dark:to-indigo-950/50">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-white dark:text-gray-100">
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
          <p class="text-center text-gray-400 dark:text-gray-500 text-sm max-w-3xl mx-auto mb-6">
            My technical expertise spans across modern web development technologies, with a focus on building 
            scalable, performant applications that deliver exceptional user experiences.
          </p>
          
          <!-- Responsive Skills Display -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="skill-card group relative p-px rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              :style="{ transitionDelay: `${index * 30}ms` }"
            >
              <!-- Animated Border Gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-800/50 to-gray-700/50 
                          group-hover:from-primary-500 group-hover:via-secondary-500 group-hover:to-primary-500 transition-colors duration-500"></div>
              
              <div class="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-[15px] p-5 flex flex-col items-center justify-center
                          group-hover:bg-gray-800/90 transition-colors duration-500">
                <div class="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-3 flex items-center justify-center rounded-xl bg-gray-800/80 
                            border border-gray-700/50 group-hover:border-primary-500/50 group-hover:bg-gray-700/80 transition-all duration-300">
                  <span class="text-3xl lg:text-4xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 filter drop-shadow-md">
                    {{ skill.icon }}
                  </span>
                </div>
                <h4 class="font-semibold text-gray-300 text-sm sm:text-base text-center tracking-wide
                           group-hover:text-white transition-colors duration-300">
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
          
          <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 
                        hover:border-green-500/50 hover:bg-gray-800/60 transition-all duration-500 shadow-lg hover:shadow-green-500/10">
              <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div class="w-12 h-12 rounded-full bg-green-500 blur-xl"></div>
              </div>
              <h4 class="text-white text-base lg:text-lg font-semibold mb-3 flex items-center">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                Agile Methodologies
              </h4>
              <p class="text-gray-400 text-sm leading-relaxed">Scrum, Kanban, iterative development with continuous feedback loops ensuring rapid and reliable delivery.</p>
            </div>
            
            <div class="group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 
                        hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-500 shadow-lg hover:shadow-blue-500/10">
              <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div class="w-12 h-12 rounded-full bg-blue-500 blur-xl"></div>
              </div>
              <h4 class="text-white text-base lg:text-lg font-semibold mb-3 flex items-center">
                <div class="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                Clean Code
              </h4>
              <p class="text-gray-400 text-sm leading-relaxed">SOLID principles, DRY, KISS, crafting maintainable, scalable, and highly readable code architecture.</p>
            </div>
            
            <div class="group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 
                        hover:border-purple-500/50 hover:bg-gray-800/60 transition-all duration-500 shadow-lg hover:shadow-purple-500/10">
              <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div class="w-12 h-12 rounded-full bg-purple-500 blur-xl"></div>
              </div>
              <h4 class="text-white text-base lg:text-lg font-semibold mb-3 flex items-center">
                <div class="w-2.5 h-2.5 bg-purple-500 rounded-full mr-3 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                Testing Strategies
              </h4>
              <p class="text-gray-400 text-sm leading-relaxed">Comprehensive unit testing, integration testing, and a TDD approach for bulletproof software.</p>
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
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <!-- Frontend Development -->
            <div class="category-card group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 rounded-2xl blur opacity-0 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 group-hover:opacity-100 transition duration-700"></div>
              <div class="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-700/50 
                          group-hover:border-blue-500/50 transition-all duration-500">
                <div class="text-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl 
                              flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Code class="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 class="text-lg font-bold text-white tracking-wide mb-2">Frontend</h4>
                  <p class="text-gray-400 text-sm">Crafting responsive and interactive UIs</p>
                </div>
                
                <div class="space-y-5">
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Vue.js</span><span class="text-blue-400">90%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-cyan-400 h-1.5 rounded-full w-[90%] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div></div>
                  </div>
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">React</span><span class="text-blue-400">85%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-cyan-400 h-1.5 rounded-full w-[85%] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div></div>
                  </div>
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Tailwind CSS</span><span class="text-blue-400">95%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-blue-600 to-cyan-400 h-1.5 rounded-full w-[95%] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Development -->
            <div class="category-card group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-green-500/0 to-emerald-500/0 rounded-2xl blur opacity-0 group-hover:from-green-500/30 group-hover:to-emerald-500/30 group-hover:opacity-100 transition duration-700"></div>
              <div class="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-700/50 
                          group-hover:border-green-500/50 transition-all duration-500">
                <div class="text-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl 
                              flex items-center justify-center mx-auto mb-4 group-hover:-rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Server class="w-8 h-8 text-green-400" />
                  </div>
                  <h4 class="text-lg font-bold text-white tracking-wide mb-2">Backend</h4>
                  <p class="text-gray-400 text-sm">Robust server-side architectures</p>
                </div>
                
                <div class="space-y-5">
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Laravel</span><span class="text-green-400">85%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-emerald-400 h-1.5 rounded-full w-[85%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div></div>
                  </div>
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Node.js</span><span class="text-green-400">75%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-emerald-400 h-1.5 rounded-full w-[75%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div></div>
                  </div>
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Django</span><span class="text-green-400">80%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-green-600 to-emerald-400 h-1.5 rounded-full w-[80%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools & Tech -->
            <div class="category-card group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-purple-500/0 to-pink-500/0 rounded-2xl blur opacity-0 group-hover:from-purple-500/30 group-hover:to-pink-500/30 group-hover:opacity-100 transition duration-700"></div>
              <div class="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-700/50 
                          group-hover:border-purple-500/50 transition-all duration-500">
                <div class="text-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl 
                              flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Wrench class="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 class="text-lg font-bold text-white tracking-wide mb-2">Tools & Tech</h4>
                  <p class="text-gray-400 text-sm">Modern workflows and deployments</p>
                </div>
                
                <div class="space-y-5">
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Git/GitHub</span><span class="text-purple-400">95%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-pink-400 h-1.5 rounded-full w-[95%] shadow-[0_0_10px_rgba(232,121,249,0.5)]"></div></div>
                  </div>
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">Docker</span><span class="text-purple-400">70%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-pink-400 h-1.5 rounded-full w-[70%] shadow-[0_0_10px_rgba(232,121,249,0.5)]"></div></div>
                  </div>
                  <div class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5"><span class="text-gray-200 font-medium">VS Code</span><span class="text-purple-400">95%</span></div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden"><div class="bg-gradient-to-r from-purple-600 to-pink-400 h-1.5 rounded-full w-[95%] shadow-[0_0_10px_rgba(232,121,249,0.5)]"></div></div>
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

.skill-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
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
