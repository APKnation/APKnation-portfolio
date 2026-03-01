<template>
  <div>
    <!-- Simple Animation Background -->
    <SimpleAnimation />
    
    <section id="hero" class="h-screen flex items-center justify-center text-white relative overflow-hidden">
      <!-- Dark Background Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95"></div>
      
      <!-- Subtle Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      <!-- Enhanced Floating Particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-150"></div>
        <div class="absolute bottom-40 right-1/3 w-36 h-36 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <!-- Text Content -->
          <div class="w-full lg:w-1/2 text-center lg:text-left">
            <transition appear name="slide-up">
              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                Hi, I'm
                <span class="name-highlight">
                  Atanas Patrick
                </span>
              </h1>
            </transition>
            
            <transition appear name="slide-up" :delay="200">
              <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6 text-cyan-300">
                Software Engineer
              </h2>
            </transition>
            
            <transition appear name="slide-up" :delay="400">
              <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-300 max-w-lg mx-auto lg:mx-0">
                I build exceptional digital experiences using modern technologies like Django, Laravel, Vue.js, Angular, and Tailwind CSS. 
                From intuitive user interfaces to robust backend systems, I focus on creating innovative, scalable, and impactful 
                solutions that solve real-world problems and elevate user satisfaction.
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
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 
                             rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="/src/assets/images/profile.jpg" 
                  alt="Atanas Patrick" 
                  class="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 
                         object-cover border-4 border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/25 
                         transition-all duration-300"
                >
              </div>
            </div>
          </transition>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#about" class="animate-bounce text-cyan-300 hover:text-white transition-colors duration-200">
            <ChevronDown class="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
      </section>

    <!-- About Section -->
    <section id="about" class="py-4 sm:py-8 bg-gray-900 text-white">
      <About />
    </section>
    
    <!-- Skills Section -->
    <section id="skills" class="py-4 sm:py-8 bg-gray-800 text-white">
      <Skills />
    </section>
    
    <!-- Experience Section -->
    <section id="experience" class="py-4 sm:py-8 bg-gray-900 text-white">
      <Experience />
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="py-4 sm:py-8 bg-gray-800 text-white">
      <Projects />
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="py-4 sm:py-8 bg-gray-900 text-white">
      <Contact />
    </section>
  </div>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next'
import About from './About.vue'
import Skills from './Skills.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import SimpleAnimation from '@/components/SimpleAnimation.vue'
</script>

<style scoped>
.name-highlight {
  color: #ffffff;
  font-weight: 800;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
               0 0 40px rgba(255, 255, 255, 0.3),
               0 0 60px rgba(255, 255, 255, 0.1);
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
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  border-radius: 8px;
  animation: name-shine 4s linear infinite;
}

@keyframes name-glow {
  0%, 100% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                 0 0 40px rgba(255, 255, 255, 0.3),
                 0 0 60px rgba(255, 255, 255, 0.1);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
                 0 0 50px rgba(255, 255, 255, 0.5),
                 0 0 70px rgba(255, 255, 255, 0.3);
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
