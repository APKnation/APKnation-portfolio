<template>
  <section id="skills" class="py-4 sm:py-6 px-4 text-white dark:text-gray-100 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40 dark:from-purple-950/50 dark:via-blue-950/50 dark:to-indigo-950/50">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 v-reveal class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-white dark:text-gray-100">
          My Skills
        </h2>
      </transition>

      <div class="space-y-4 sm:space-y-6">
        <!-- Technical Skills Overview -->
        <div>
          <transition appear name="slide-up">
            <h3 v-reveal class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Technical Proficiency
            </h3>
          </transition>
          <p class="text-center text-gray-400 dark:text-gray-500 text-sm max-w-3xl mx-auto mb-6">
            My technical expertise spans across modern web development technologies, with a focus on building
            scalable, performant applications that deliver exceptional user experiences.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            <div
              v-for="(skill, index) in skills"
              :key="skill.id || skill.name"
              v-reveal="index * 60"
              class="skill-card group relative p-px rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              :class="skill.topics?.length ? 'col-span-2' : ''"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-800/50 to-gray-700/50
                          group-hover:from-primary-500 group-hover:via-secondary-500 group-hover:to-primary-500 transition-colors duration-500"></div>
              <div
                class="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-[15px] p-5
                       group-hover:bg-gray-800/90 transition-colors duration-500"
                :class="skill.topics?.length ? 'flex flex-col' : 'flex flex-col items-center justify-center text-center'"
              >
                <!-- Skill header -->
                <div :class="skill.topics?.length ? 'flex items-center gap-3' : 'flex flex-col items-center'">
                  <div
                    class="shrink-0 flex items-center justify-center rounded-xl bg-gray-800/80
                           border border-gray-700/50 group-hover:border-primary-500/50 group-hover:bg-gray-700/80 transition-all duration-300"
                    :class="skill.topics?.length ? 'w-14 h-14' : 'w-14 h-14 lg:w-16 lg:h-16 mb-3'"
                  >
                    <img v-if="skill.image" :src="skill.image" :alt="skill.name"
                         class="w-full h-full object-contain p-1.5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 drop-shadow-md" />
                    <span v-else class="text-2xl font-bold text-gray-400 group-hover:scale-110 transition-transform duration-300">
                      {{ initials(skill.name) }}
                    </span>
                  </div>
                  <div :class="skill.topics?.length ? 'min-w-0' : 'w-full'">
                    <h4 class="font-semibold text-gray-300 text-sm sm:text-base tracking-wide
                               group-hover:text-white transition-colors duration-300">
                      {{ skill.name }}
                    </h4>
                    <p v-if="skill.summary" class="mt-1 text-[11px] leading-snug text-gray-500 line-clamp-2">
                      {{ skill.summary }}
                    </p>
                  </div>
                </div>

                <!-- Overall level -->
                <div v-if="skill.level" class="mt-4">
                  <div class="flex justify-between text-[11px] mb-1">
                    <span class="text-gray-400">Overall</span>
                    <span class="text-gray-400">{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div :class="skillBarClass(skill.color)" class="bar-fill h-1.5 rounded-full" :style="{ '--bar-w': `${skill.level}%` }"></div>
                  </div>
                </div>

                <!-- Visible sub-skills (topics) -->
                <div v-if="skill.topics?.length" class="mt-4 pt-4 border-t border-gray-700/50">
                  <p class="text-[10px] uppercase tracking-wider text-gray-500 mb-3">What I know</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    <div v-for="topic in skill.topics" :key="topic.id || topic.name">
                      <div class="flex justify-between text-xs mb-1">
                        <span class="text-gray-200 font-medium truncate">{{ topic.name }}</span>
                        <span v-if="topic.percent" class="text-gray-500 ml-2">{{ topic.percent }}%</span>
                      </div>
                      <div v-if="topic.percent" class="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                        <div :class="skillBarClass(skill.color)" class="bar-fill h-1 rounded-full" :style="{ '--bar-w': `${topic.percent}%` }"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p v-if="!skills.length" class="text-center text-gray-500 text-sm">
            {{ loading ? 'Loading skills…' : (error || 'No skills yet. Add them from the Django admin.') }}
          </p>
        </div>

        <!-- Development Methodologies (backend-managed) -->
        <div>
          <transition appear name="slide-up">
            <h3 v-reveal class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Development Approach
            </h3>
          </transition>

          <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(approach, i) in devApproaches"
              :key="(approach.title || '') + i"
              v-reveal="i * 100"
              :class="approachCardClass(approach.color)"
              class="group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50
                     hover:bg-gray-800/60 transition-all duration-500 shadow-lg"
            >
              <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div :class="approachGlowClass(approach.color)" class="w-12 h-12 rounded-full blur-xl"></div>
              </div>
              <h4 class="text-white text-base lg:text-lg font-semibold mb-3 flex items-center">
                <div :class="approachDotClass(approach.color)" class="w-2.5 h-2.5 rounded-full mr-3"></div>
                {{ approach.title }}
              </h4>
              <p class="text-gray-400 text-sm leading-relaxed">{{ approach.description }}</p>
            </div>
          </div>
        </div>

        <!-- Skill Categories (backend-managed) -->
        <div>
          <transition appear name="slide-up">
            <h3 v-reveal class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Skill Categories
            </h3>
          </transition>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div v-for="(cat, i) in skillCategories" :key="(cat.title || '') + i" v-reveal="i * 100" class="category-card group relative">
              <div :class="categoryGlowOuter(cat.theme)" class="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div :class="categoryBorderClass(cat.theme)" class="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-700/50 transition-all duration-500">
                <div class="text-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl
                              flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <component :is="categoryIcon(cat)" :class="categoryIconClass(cat.theme)" class="w-8 h-8" />
                  </div>
                  <h4 class="text-lg font-bold text-white tracking-wide mb-2">{{ cat.title }}</h4>
                  <p class="text-gray-400 text-sm">{{ cat.subtitle }}</p>
                </div>

                <div class="space-y-5">
                  <div v-for="(item, j) in (cat.items || [])" :key="(item.name || '') + j" class="skill-progress">
                    <div class="flex justify-between text-sm mb-1.5">
                      <span class="text-gray-200 font-medium">{{ item.name }}</span>
                      <span :class="categoryTextClass(cat.theme)">{{ item.percent }}%</span>
                    </div>
                    <div class="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        :class="categoryBarClass(cat.theme)"
                        class="bar-fill h-1.5 rounded-full"
                        :style="{ '--bar-w': `${item.percent}%` }"
                      ></div>
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
const profile = computed(() => portfolioStore.profile)
const loading = computed(() => portfolioStore.loading)
const error = computed(() => portfolioStore.error)

const initials = (name = '') =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

const skillBarClass = (color) => ({
  blue: 'bg-gradient-to-r from-blue-600 to-cyan-400',
  green: 'bg-gradient-to-r from-green-600 to-emerald-400',
  purple: 'bg-gradient-to-r from-purple-600 to-pink-400',
  red: 'bg-gradient-to-r from-red-600 to-orange-400',
  orange: 'bg-gradient-to-r from-orange-600 to-yellow-400',
  yellow: 'bg-gradient-to-r from-yellow-500 to-amber-300',
  pink: 'bg-gradient-to-r from-pink-600 to-rose-400',
  cyan: 'bg-gradient-to-r from-cyan-600 to-sky-400',
}[color] || 'bg-gradient-to-r from-primary-600 to-secondary-400')

const devApproaches = computed(() => profile.value.devApproaches || [])
const skillCategories = computed(() => profile.value.skillCategories || [])

const approachCardClass = (color) => ({
  green: 'hover:border-green-500/50 hover:shadow-green-500/10',
  blue: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
  purple: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
}[color] || 'hover:border-gray-500/50')

const approachGlowClass = (color) => ({ green: 'bg-green-500', blue: 'bg-blue-500', purple: 'bg-purple-500' }[color] || 'bg-gray-500')
const approachDotClass = (color) => ({
  green: 'bg-green-500 shadow-[0_0_8px_rgba(161,193,129,0.6)]',
  blue: 'bg-blue-500 shadow-[0_0_8px_rgba(13,59,102,0.6)]',
  purple: 'bg-purple-500 shadow-[0_0_8px_rgba(161,193,129,0.6)]',
}[color] || 'bg-gray-500')

const categoryGlowOuter = (theme) => ({
  blue: 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30',
  green: 'bg-gradient-to-br from-green-500/30 to-emerald-500/30',
  purple: 'bg-gradient-to-br from-purple-500/30 to-pink-500/30',
}[theme] || 'bg-gradient-to-br from-gray-500/20 to-gray-400/20')

const categoryBorderClass = (theme) => ({
  blue: 'group-hover:border-blue-500/50',
  green: 'group-hover:border-green-500/50',
  purple: 'group-hover:border-purple-500/50',
}[theme] || 'group-hover:border-gray-500/50')

const categoryIcon = (cat) => {
  const t = (cat.theme || '').toLowerCase()
  const title = (cat.title || '').toLowerCase()
  if (t === 'green' || title.includes('backend') || title.includes('server')) return Server
  if (t === 'purple' || title.includes('tool')) return Wrench
  return Code
}
const categoryIconClass = (theme) => ({ blue: 'text-blue-400', green: 'text-green-400', purple: 'text-purple-400' }[theme] || 'text-gray-400')
const categoryTextClass = (theme) => ({ blue: 'text-blue-400', green: 'text-green-400', purple: 'text-purple-400' }[theme] || 'text-gray-400')
const categoryBarClass = (theme) => ({
  blue: 'bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(13,59,102,0.5)]',
  green: 'bg-gradient-to-r from-green-600 to-emerald-400 shadow-[0_0_10px_rgba(161,193,129,0.5)]',
  purple: 'bg-gradient-to-r from-purple-600 to-pink-400 shadow-[0_0_10px_rgba(250,240,202,0.5)]',
}[theme] || 'bg-gradient-to-r from-gray-500 to-gray-400')
</script>

<style scoped>
/* Progress bars fill only once their card is revealed */
.bar-fill {
  width: 0;
  transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
}

.is-visible .bar-fill {
  width: var(--bar-w, 0%);
}

@media (prefers-reduced-motion: reduce) {
  .bar-fill {
    width: var(--bar-w, 0%);
    transition: none;
  }
}
</style>
