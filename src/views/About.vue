<template>
  <section id="about" class="py-16 sm:py-20 px-4 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
          About Me
        </h2>
      </transition>
      
      <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        <!-- Information Card -->
        <transition appear name="slide-in-left">
          <div class="lg:w-1/3 flex justify-center">
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
                          alt="Atanas Patrick" 
                          class="w-full h-full object-cover"
                        >
                      </div>
                      <h3 class="text-sm sm:text-base lg:text-xl font-bold text-white group-hover:text-cyan-200 
                                 transition-colors duration-300">Atanas Patrick</h3>
                    </div>
                  </div>
                </div>
                
                <!-- Card Content -->
                <div class="p-3 sm:p-4 lg:p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                  <!-- Quick Stats -->
                  <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div class="text-center transform transition-all duration-500 
                               group-hover:translate-y-[-2px]">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400">1+</div>
                      <div class="text-[10px] sm:text-xs text-gray-400">Years</div>
                    </div>
                    <div class="text-center transform transition-all duration-500 
                               group-hover:translate-y-[-2px] delay-75">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">10+</div>
                      <div class="text-[10px] sm:text-xs text-gray-400">Projects</div>
                    </div>
                    <div class="text-center transform transition-all duration-500 
                               group-hover:translate-y-[-2px] delay-150">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">5+</div>
                      <div class="text-[10px] sm:text-xs text-gray-400">Skills</div>
                    </div>
                  </div>
                  
                  <!-- Key Information -->
                  <div class="space-y-2 sm:space-y-4">
                    <div class="flex items-center space-x-2 sm:space-x-3 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-600/20 rounded-full flex items-center justify-center">
                        <span class="text-cyan-400 text-[10px] sm:text-sm">🎓</span>
                      </div>
                      <div>
                        <div class="text-white text-[11px] sm:text-sm font-medium">Education</div>
                        <div class="text-gray-400 text-[9px] sm:text-xs">B.Sc Software Engineering</div>
                      </div>
                    </div>
                    
                    <div class="flex items-center space-x-2 sm:space-x-3 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 delay-75">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                        <span class="text-purple-400 text-[10px] sm:text-sm">💼</span>
                      </div>
                      <div>
                        <div class="text-white text-[11px] sm:text-sm font-medium">Experience</div>
                        <div class="text-gray-400 text-[9px] sm:text-xs">Software Engineer</div>
                      </div>
                    </div>
                    
                    <div class="flex items-center space-x-2 sm:space-x-3 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 delay-150">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                        <span class="text-green-400 text-[10px] sm:text-sm">🚀</span>
                      </div>
                      <div>
                        <div class="text-white text-[11px] sm:text-sm font-medium">Focus</div>
                        <div class="text-gray-400 text-[9px] sm:text-xs">Web Development</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Summary Section -->
                  <div class="mt-3 sm:mt-6 p-2 sm:p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <h4 class="text-white text-[11px] sm:text-sm font-semibold mb-1 sm:mb-2 flex items-center">
                      <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                      Professional Summary
                    </h4>
                    <p class="text-gray-300 text-[9px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">
                      Passionate software engineer specializing in modern web technologies. 
                      I build scalable applications with clean code and user-centric design.
                    </p>
                  </div>
                  
                  <!-- Core Values -->
                  <div class="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <h4 class="text-white text-[11px] sm:text-sm font-semibold mb-2 sm:mb-3">Core Values</h4>
                    <div class="flex flex-wrap gap-1 sm:gap-2">
                      <span class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-cyan-600/20 text-cyan-300 text-[9px] sm:text-xs rounded-full 
                                   border border-cyan-600/30">
                        Innovation
                      </span>
                      <span class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-purple-600/20 text-purple-300 text-[9px] sm:text-xs rounded-full 
                                   border border-purple-600/30">
                        Quality
                      </span>
                      <span class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-600/20 text-green-300 text-[9px] sm:text-xs rounded-full 
                                   border border-green-600/30">
                        Collaboration
                      </span>
                      <span class="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-600/20 text-blue-300 text-[9px] sm:text-xs rounded-full 
                                   border border-blue-600/30">
                        Growth
                      </span>
                    </div>
                  </div>
                  
                  <!-- Contact Button -->
                  <div class="mt-3 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button class="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white 
                                 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg font-medium text-[11px] sm:text-sm
                                 hover:from-cyan-500 hover:to-purple-500 
                                 transition-all duration-300 transform hover:scale-105">
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Floating Particles -->
              <div class="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400/30 rounded-full 
                           animate-pulse opacity-0 group-hover:opacity-100 transition-opacity 
                           duration-300"></div>
              <div class="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/30 rounded-full 
                           animate-pulse delay-75 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"></div>
            </div>
          </div>
        </transition>

        <!-- Content with Advanced Card -->
        <transition appear name="slide-in-right">
          <div class="lg:w-2/3">
            <div class="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
                       border border-gray-700/50 shadow-xl hover:shadow-2xl 
                       transition-all duration-500 hover:border-gray-600/50">
              
              <!-- Bio Section -->
              <div class="mb-8">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Introduction
                </h3>
                <div class="space-y-4 text-gray-300 leading-relaxed">
                  <p class="text-base">
                    I'm Atanas Patrick, a passionate software engineer with 1 year of experience building 
                    scalable web applications and solving complex problems with elegant code solutions.
                  </p>
                  <p class="text-base">
                    My approach combines technical expertise with a keen eye for user experience, ensuring that the 
                    solutions I build are not only functional but also intuitive and enjoyable to use. 
                    I specialize in modern web technologies and frameworks that deliver exceptional results.
                  </p>
                </div>
              </div>

              <!-- Skills & Expertise -->
              <div class="mb-8">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Expertise
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div class="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 
                               transition-colors duration-300">
                    <span class="text-gray-300 text-sm">JavaScript</span>
                  </div>
                  <div class="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 
                               transition-colors duration-300">
                    <span class="text-gray-300 text-sm">Vue.js</span>
                  </div>
                  <div class="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 
                               transition-colors duration-300">
                    <span class="text-gray-300 text-sm">Laravel</span>
                  </div>
                  <div class="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 
                               transition-colors duration-300">
                    <span class="text-gray-300 text-sm">React</span>
                  </div>
                  <div class="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 
                               transition-colors duration-300">
                    <span class="text-gray-300 text-sm">Node.js</span>
                  </div>
                  <div class="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 
                               transition-colors duration-300">
                    <span class="text-gray-300 text-sm">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <!-- Contact Information Grid -->
              <div>
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  Get In Touch
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
                      <p class="text-sm text-gray-300">Dodoma-Tanzania</p>
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
                      <p class="text-sm text-gray-300">atanasikafuka@gmail.com</p>
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
                      <p class="text-sm text-gray-300">+255749288072</p>
                    </div>
                  </div>
                  
                  <!-- Download Resume Button -->
                  <div class="flex items-center justify-center">
                    <a 
                      href="/src/assets/images/resume.pdf" 
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
import { MapPin, Mail, Phone, Download } from 'lucide-vue-next'
</script>
