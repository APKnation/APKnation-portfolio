<template>
  <section id="about" class="py-6 sm:py-16 px-4 text-white dark:text-gray-100">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 v-reveal class="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white dark:text-gray-100">
          About Me
        </h2>
      </transition>

      <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        <!-- Information Card -->
        <transition appear name="slide-in-left">
          <div v-reveal.left class="lg:w-1/3 flex justify-center">
            <div class="relative group cursor-pointer w-full max-w-sm">
              <!-- Card Background Layers -->
              <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl
                           transform rotate-3 group-hover:rotate-6 transition-all duration-700
                           shadow-2xl border border-gray-700/50"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl
                           transform -rotate-2 group-hover:-rotate-4 transition-all duration-700
                           shadow-2xl border border-gray-600/50 opacity-50"></div>

              <!-- Main Card -->
              <div class="relative bg-gray-800/95 backdrop-blur-sm rounded-2xl overflow-hidden
                         border border-gray-700/50 shadow-xl transform hover:scale-105
                         transition-all duration-700 hover:shadow-2xl group-hover:border-gray-600/50">

                <!-- Card Header -->
                <div class="relative w-full h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-cyan-600 to-purple-600 overflow-hidden">
                  <!-- Animated Background Pattern -->
                  <div class="absolute inset-0 opacity-20">
                    <div class="absolute top-0 left-0 w-full h-full">
                      <div class="absolute top-2 left-2 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-pulse"></div>
                      <div class="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/10 rounded-full animate-pulse delay-75"></div>
                      <div class="absolute top-1/2 left-1/2 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-white/5 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>

                  <!-- Header Content -->
                  <div class="relative z-10 flex items-center justify-center h-full px-2">
                    <div class="text-center">
                      <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden
                                  flex items-center justify-center mx-auto mb-1 sm:mb-2 transform transition-all duration-500
                                  group-hover:scale-110 group-hover:rotate-12">
                        <img
                          src="/src/assets/images/profile.jpg"
                          :alt="profile.name"
                          class="w-full h-full object-cover"
                        >
                      </div>
                      <h3 class="text-sm sm:text-base lg:text-xl font-bold text-white group-hover:text-cyan-200
                                 transition-colors duration-300">{{ profile.name }}</h3>
                    </div>
                  </div>
                </div>

                <!-- Card Content -->
                <div class="p-3 sm:p-4 lg:p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                  <!-- Quick Stats -->
                  <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div class="text-center transform transition-all duration-500
                               group-hover:translate-y-[-2px]">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400"><AnimatedNumber :value="profile.yearsExperience" /></div>
                      <div class="text-xs text-gray-400">Years</div>
                    </div>
                    <div class="text-center transform transition-all duration-500
                               group-hover:translate-y-[-2px] delay-75">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400"><AnimatedNumber :value="profile.projectsCount" /></div>
                      <div class="text-xs text-gray-400">Projects</div>
                    </div>
                    <div class="text-center transform transition-all duration-500
                               group-hover:translate-y-[-2px] delay-150">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-green-400"><AnimatedNumber :value="profile.skillsCount" /></div>
                      <div class="text-xs text-gray-400">Skills</div>
                    </div>
                  </div>

                  <!-- Key Information -->
                  <div class="space-y-2 sm:space-y-4">
                    <div class="flex items-center space-x-2 sm:space-x-3 opacity-100
                                transition-opacity duration-300">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-600/20 rounded-full flex items-center justify-center">
                        <span class="text-cyan-400 text-xs sm:text-sm">🎓</span>
                      </div>
                      <div>
                        <div class="text-white text-xs sm:text-sm font-medium">Education</div>
                        <div class="text-gray-400 text-xs">{{ educationLabel }}</div>
                      </div>
                    </div>

                    <div class="flex items-center space-x-2 sm:space-x-3 opacity-100
                                transition-opacity duration-300 delay-75">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                        <span class="text-purple-400 text-xs sm:text-sm">💼</span>
                      </div>
                      <div>
                        <div class="text-white text-xs sm:text-sm font-medium">Experience</div>
                        <div class="text-gray-400 text-xs">{{ experienceLabel }}</div>
                      </div>
                    </div>

                    <div class="flex items-center space-x-2 sm:space-x-3 opacity-100
                                transition-opacity duration-300 delay-150">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                        <span class="text-green-400 text-xs sm:text-sm">🚀</span>
                      </div>
                      <div>
                        <div class="text-white text-xs sm:text-sm font-medium">Focus</div>
                        <div class="text-gray-400 text-xs">{{ profile.title }}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Summary Section -->
                  <div class="mt-3 sm:mt-6 p-2 sm:p-4 bg-gray-700/30 rounded-lg border border-gray-600/30
                              opacity-100 transition-opacity duration-500 delay-200 max-h-24 sm:max-h-none overflow-hidden">
                    <h4 class="text-white text-xs sm:text-sm font-semibold mb-1 sm:mb-2 flex items-center">
                      <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                      Professional Summary
                    </h4>
                    <p class="text-gray-300 text-xs leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {{ profile.aboutSummary }}
                    </p>
                  </div>

                  <!-- Core Values -->
                  <div class="mt-2 sm:mt-4 opacity-100 transition-opacity duration-500 delay-300 max-h-16 sm:max-h-none overflow-hidden">
                    <h4 class="text-white text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Core Values</h4>
                    <div class="flex flex-wrap gap-1 sm:gap-2">
                      <span
                        v-for="(tag, i) in (profile.coreValuesTags || [])"
                        :key="tag + i"
                        :class="tagChipClass(i)"
                        class="px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded-full border"
                      >{{ tag }}</span>
                    </div>
                  </div>

                  <!-- Contact Button -->
                  <div class="mt-3 sm:mt-6 opacity-100 transition-opacity duration-500">
                    <router-link to="/contact" class="block w-full text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white
                                 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg font-medium text-sm
                                 hover:from-cyan-500 hover:to-purple-500
                                 transition-all duration-300 transform hover:scale-105">
                      Get In Touch
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Floating Particles -->
              <div class="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400/30 rounded-full
                           animate-pulse opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/30 rounded-full
                           animate-pulse delay-75 opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </transition>

        <!-- Content with Advanced Card -->
        <transition appear name="slide-in-right">
          <div v-reveal.right="120" class="lg:w-2/3">
            <div class="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8
                       border border-gray-700/50 shadow-xl hover:shadow-2xl
                       transition-all duration-500 hover:border-gray-600/50">

              <!-- Bio Section -->
              <div class="mb-8">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Personal Background
                </h3>
                <div class="space-y-4 text-gray-300 leading-relaxed">
                  <p v-if="profile.aboutBio1" class="text-base">{{ profile.aboutBio1 }}</p>
                  <p v-if="profile.aboutBio2" class="text-base">{{ profile.aboutBio2 }}</p>
                  <p v-if="profile.aboutBio3" class="text-base">{{ profile.aboutBio3 }}</p>
                </div>
              </div>

              <!-- Personal Values & Philosophy -->
              <div class="mb-8">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Core Values & Philosophy
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    v-for="(val, i) in (profile.coreValues || [])"
                    :key="(val.title || '') + i"
                    class="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30"
                  >
                    <div class="text-white text-sm font-semibold mb-2">{{ val.title }}</div>
                    <p class="text-gray-400 text-xs">{{ val.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Contact Information -->
              <div>
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Personal Information
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg
                               hover:bg-gray-700/50 transition-all duration-300 group">
                    <div class="bg-gray-600/30 p-2 rounded-lg group-hover:bg-gray-600/50
                                transition-colors duration-300">
                      <MapPin class="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p class="text-xs text-gray-500">Location</p>
                      <p class="text-sm text-gray-300">{{ profile.location }}</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg
                               hover:bg-gray-700/50 transition-all duration-300 group">
                    <div class="bg-gray-600/30 p-2 rounded-lg group-hover:bg-gray-600/50
                                transition-colors duration-300">
                      <Mail class="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p class="text-xs text-gray-500">Email</p>
                      <p class="text-sm text-gray-300">{{ profile.email }}</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg
                               hover:bg-gray-700/50 transition-all duration-300 group">
                    <div class="bg-gray-600/30 p-2 rounded-lg group-hover:bg-gray-600/50
                                transition-colors duration-300">
                      <Phone class="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p class="text-xs text-gray-500">Phone</p>
                      <p class="text-sm text-gray-300">{{ profile.phone }}</p>
                    </div>
                  </div>

                  <!-- Download Resume Button -->
                  <div class="flex items-center justify-center">
                    <a
                      :href="profile.resumeUrl || '#'"
                      download
                      class="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600
                             text-white px-4 py-2 rounded-lg transition-all duration-300
                             transform hover:scale-105 text-sm"
                    >
                      <Download class="w-4 h-4" />
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { MapPin, Mail, Phone, Download } from 'lucide-vue-next'
import AnimatedNumber from '@/components/AnimatedNumber.vue'
import { usePortfolioStore } from '@/stores/index'

const portfolioStore = usePortfolioStore()
const profile = computed(() => portfolioStore.profile)
const educationLabel = computed(() => portfolioStore.education?.[0]?.degree || 'Software Engineering')
const experienceLabel = computed(() => portfolioStore.experiences?.[0]?.position || profile.value.title)
</script>
