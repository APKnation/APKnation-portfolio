<template>
  <div>
    <!-- Simple Animation Background -->
    <SimpleAnimation />

    <section
      id="hero"
      ref="hero"
      class="pt-24 pb-16 sm:pt-32 sm:pb-20 flex flex-col items-center justify-center text-white relative overflow-hidden bg-gray-900 dark:bg-black"
      @mousemove="onHeroMove"
      @mouseleave="resetParallax"
    >
      <!-- Dark Background Overlay -->
      <div class="absolute inset-0 bg-gray-900/95"></div>

      <!-- Subtle Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-gray-900/80 to-gray-950/95"></div>

      <!-- Animated aurora glow -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="aurora-blob aurora-1 top-4 left-[8%] w-64 h-64 sm:w-80 sm:h-80 bg-secondary-500/40"></div>
        <div class="aurora-blob aurora-2 bottom-0 right-[10%] w-72 h-72 sm:w-96 sm:h-96 bg-cream-200/20"></div>
        <div class="aurora-blob aurora-3 top-1/3 right-1/3 w-56 h-56 sm:w-72 sm:h-72 bg-primary-400/40"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 relative z-10 w-full">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <!-- Text Content -->
          <div class="w-full lg:w-1/2 text-center lg:text-left">
            <transition appear name="slide-up">
              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white dark:text-gray-100">
                Hi, I'm
                <span class="name-highlight">
                  {{ profile.name }}
                </span>
              </h1>
            </transition>

            <transition appear name="slide-up" :delay="200">
              <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6 text-cyan-300 dark:text-cyan-400 min-h-[1.6em]">
                <span>{{ typedTitle }}</span><span class="type-caret" aria-hidden="true"></span>
              </h2>
            </transition>

            <transition appear name="slide-up" :delay="400">
              <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-300 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                {{ profile.heroIntro }}
              </p>
            </transition>

            <!-- Action Buttons -->
            <transition appear name="slide-up" :delay="600">
              <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                <router-link
                  to="/projects"
                  class="group relative btn-primary text-xs sm:text-sm md:text-base text-center overflow-hidden px-4 sm:px-6 py-2 sm:py-3"
                >
                  <span class="relative z-10">View My Work</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </router-link>

                <router-link
                  to="/contact"
                  class="group relative btn-secondary text-xs sm:text-sm md:text-base text-center overflow-hidden px-4 sm:px-6 py-2 sm:py-3"
                >
                  <span class="relative z-10">Contact Me</span>
                  <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- Profile Image -->
          <transition appear name="slide-up" :delay="800">
            <div class="w-full lg:w-1/2 flex justify-center">
              <div class="relative" :style="parallaxStyle">
                <!-- Rotating orbit rings -->
                <div class="orbit-ring absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-secondary-400/40"></div>
                <div class="orbit-ring-reverse absolute -inset-6 sm:-inset-8 rounded-full border border-cream-100/10"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-secondary-400 to-cream-200
                             rounded-full blur-xl opacity-30 animate-pulse"></div>
                <span class="pulse-ring absolute inset-0 rounded-full border border-secondary-300/40"></span>
                <img
                  src="/src/assets/images/profile.jpg"
                  :alt="profile.name"
                  class="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80
                         object-cover border-4 border-secondary-400/50 shadow-2xl hover:shadow-secondary-500/25
                         transition-all duration-300 hover:scale-[1.03]"
                >
              </div>
            </div>
          </transition>
        </div>

      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span class="text-[10px] uppercase tracking-[0.3em] text-cream-100/50">Scroll</span>
        <a href="#about" class="group relative h-10 w-6 rounded-full border border-cream-100/30 flex items-start justify-center pt-1.5 overflow-hidden" aria-label="Scroll to about section">
          <span class="block w-1 h-2 rounded-full bg-secondary-400 animate-bounce"></span>
          <span class="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-secondary-400/20 to-transparent scroll-line"></span>
        </a>
      </div>
    </section>

    <!-- Skill marquee -->
    <div v-if="marqueeSkills.length" class="relative overflow-hidden border-y border-secondary-400/20 bg-navy-900/70 py-3 marquee-mask">
      <div class="marquee-track gap-8">
        <template v-for="loop in 2" :key="loop">
          <span
            v-for="name in marqueeSkills"
            :key="`${loop}-${name}`"
            class="flex items-center gap-8 text-xs sm:text-sm uppercase tracking-[0.25em] text-cream-100/60"
          >
            {{ name }}
            <span class="w-1.5 h-1.5 rounded-full bg-secondary-400/70"></span>
          </span>
        </template>
      </div>
    </div>

    <!-- About Section -->
    <About />

    <!-- Skills Section -->
    <Skills />

    <!-- Experience Section -->
    <Experience />

    <!-- Projects Section -->
    <Projects />

    <!-- Contact Section -->
    <Contact />
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import SimpleAnimation from '@/components/SimpleAnimation.vue'
import { usePortfolioStore } from '@/stores/index'

const portfolioStore = usePortfolioStore()
const profile = computed(() => portfolioStore.profile)
const skills = computed(() => portfolioStore.skills)

const marqueeSkills = computed(() => {
  const names = skills.value.map((skill) => skill.name).filter(Boolean)
  return names.length ? names : []
})

/* ---------- Typewriter effect for the job title ---------- */
const typedTitle = ref('')
let typeTimer = null

const startTyping = (text) => {
  clearInterval(typeTimer)
  typedTitle.value = ''
  if (!text) return

  let index = 0
  typeTimer = setInterval(() => {
    index += 1
    typedTitle.value = text.slice(0, index)
    if (index >= text.length) clearInterval(typeTimer)
  }, 55)
}

watch(
  () => profile.value.title,
  (title) => startTyping(title || ''),
  { immediate: true },
)

onUnmounted(() => clearInterval(typeTimer))

/* ---------- Pointer parallax on the hero image ---------- */
const hero = ref(null)
const tilt = ref({ x: 0, y: 0 })

const parallaxStyle = computed(() => ({
  transform: `translate3d(${tilt.value.x * 18}px, ${tilt.value.y * 14}px, 0)`,
  transition: 'transform 250ms ease-out',
}))

const onHeroMove = (event) => {
  if (!hero.value) return
  const rect = hero.value.getBoundingClientRect()
  tilt.value = {
    x: (event.clientX - rect.left) / rect.width - 0.5,
    y: (event.clientY - rect.top) / rect.height - 0.5,
  }
}

const resetParallax = () => {
  tilt.value = { x: 0, y: 0 }
}
</script>

<style scoped>
.orbit-ring {
  animation: spin-slow 22s linear infinite;
}

.orbit-ring-reverse {
  animation: spin-reverse 30s linear infinite;
}

.pulse-ring {
  animation: pulse-ring 3.4s ease-out infinite;
}

.scroll-line {
  animation: scroll-line 2.2s ease-in-out infinite;
}
</style>

<style scoped>
.name-highlight {
  color: #faf0ca;
  font-weight: 800;
  text-shadow: 0 0 20px rgba(250, 240, 202, 0.5),
               0 0 40px rgba(250, 240, 202, 0.3),
               0 0 60px rgba(250, 240, 202, 0.1);
  animation: name-glow 3s ease-in-out infinite;
  position: relative;
  display: inline-block;
}

.name-highlight::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, transparent, rgba(250, 240, 202, 0.1), transparent);
  border-radius: 8px;
  animation: name-shine 4s linear infinite;
}

@keyframes name-glow {
  0%, 100% {
    text-shadow: 0 0 20px rgba(250, 240, 202, 0.5),
                 0 0 40px rgba(250, 240, 202, 0.3),
                 0 0 60px rgba(250, 240, 202, 0.1);
  }
  50% {
    text-shadow: 0 0 30px rgba(250, 240, 202, 0.8),
                 0 0 50px rgba(250, 240, 202, 0.5),
                 0 0 70px rgba(250, 240, 202, 0.3);
  }
}

@keyframes name-shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
    opacity: 0;
  }
  50% {
    transform: translateX(100%) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translateX(200%) rotate(45deg);
    opacity: 0;
  }
}
</style>
