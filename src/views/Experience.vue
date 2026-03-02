<template>
  <section id="experience" class="py-8 sm:py-12 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div class="max-w-7xl mx-auto">
      <transition appear name="fade">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-white">
          Experience & Education
        </h2>
      </transition>

      <div class="space-y-4 sm:space-y-6">
        <!-- Professional Journey -->
        <div>
          <transition appear name="slide-up">
            <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Professional Journey
            </h3>
          </transition>
          <p class="text-center text-gray-400 text-sm max-w-3xl mx-auto mb-6">
            My professional experience spans software development roles where I've contributed to building 
            scalable applications, leading development teams, and implementing industry best practices.
          </p>
          
          <div class="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            <div
              v-for="(job, index) in experiences"
              :key="job.id"
              class="experience-card group"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 
                         hover:border-primary-500/50 transition-all duration-500 transform 
                         hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <!-- Company Info -->
                  <div class="flex-1">
                    <h4 class="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                      {{ job.position }}
                    </h4>
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full 
                                   flex items-center justify-center">
                        <Building class="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-xs sm:text-sm font-medium text-primary-300">{{ job.company }}</p>
                        <p class="text-xs text-gray-400">{{ job.location }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Duration -->
                  <div class="text-right">
                    <div class="flex items-center gap-1 text-xs text-gray-400 mb-2">
                      <Calendar class="w-3 h-3" />
                      <span>{{ job.duration }}</span>
                    </div>
                    <div class="flex flex-wrap gap-1">
                      <span 
                        v-for="tech in job.technologies" 
                        :key="tech"
                        class="bg-gray-700/50 text-gray-300 text-xs px-2 py-0.5 rounded-full 
                               border border-gray-600/30 hover:bg-primary-600/30 hover:border-primary-500/50 
                               hover:text-primary-300 transition-all duration-300"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <!-- Description -->
                <p class="text-xs sm:text-sm text-gray-300 mt-2 group-hover:text-gray-200 transition-colors">
                  {{ job.description }}
                </p>
                
                <!-- Achievements -->
                <ul class="mt-2 space-y-1">
                  <li 
                    v-for="achievement in job.achievements" 
                    :key="achievement"
                    class="text-xs text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors"
                  >
                    <div class="w-1 h-1 bg-primary-500 rounded-full mt-1.5 flex-shrink-0 
                                 group-hover:bg-primary-400 transition-colors"></div>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Background -->
        <div>
          <transition appear name="slide-up">
            <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-white">
              Academic Foundation
            </h3>
          </transition>
          <p class="text-center text-gray-400 text-sm max-w-3xl mx-auto mb-6">
            My academic journey in Software Engineering has provided me with strong theoretical foundations 
            and practical skills that complement my professional experience.
          </p>
          
          <div class="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            <div
              v-for="(edu, index) in education"
              :key="edu.id"
              class="education-card group"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 
                         hover:border-primary-500/50 transition-all duration-500 transform 
                         hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <!-- School Info -->
                  <div class="flex-1">
                    <h4 class="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                      {{ edu.degree }}
                    </h4>
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full 
                                   flex items-center justify-center">
                        <GraduationCap class="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-xs sm:text-sm font-medium text-primary-300">{{ edu.school }}</p>
                        <p class="text-xs text-gray-400">{{ edu.location }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Duration and Status -->
                  <div class="text-right">
                    <div class="flex items-center gap-1 text-xs text-gray-400 mb-2">
                      <Calendar class="w-3 h-3" />
                      <span>{{ edu.duration }}</span>
                    </div>
                    <div class="text-xs font-medium text-green-400">
                      {{ edu.status }}
                    </div>
                  </div>
                </div>
                
                <!-- Description -->
                <p class="text-xs sm:text-sm text-gray-300 mt-2 group-hover:text-gray-200 transition-colors">
                  {{ edu.description }}
                </p>
                
                <!-- Relevant Coursework -->
                <div class="mt-2">
                  <p class="text-xs text-gray-400 mb-1">Relevant Coursework:</p>
                  <div class="flex flex-wrap gap-1">
                    <span 
                      v-for="course in edu.coursework" 
                      :key="course"
                      class="bg-gray-700/50 text-gray-300 text-xs px-2 py-0.5 rounded-full 
                             border border-gray-600/30 hover:bg-blue-600/30 hover:border-blue-500/50 
                             hover:text-blue-300 transition-all duration-300"
                    >
                      {{ course }}
                    </span>
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
import { ref } from 'vue'
import { Building, Calendar, GraduationCap } from 'lucide-vue-next'

const experiences = ref([
  {
    id: 1,
    position: 'Software Engineer',
    company: 'Tech Solutions Ltd',
    location: 'Dodoma, Tanzania',
    duration: '2023 - Present',
    description: 'Full-stack development of web applications using modern technologies. Leading development teams and implementing best practices.',
    technologies: ['Vue.js', 'Laravel', 'Node.js', 'MySQL', 'Docker'],
    achievements: [
      'Leading development of 5 major client projects',
      'Implementing modern development practices',
      'Mentoring junior developers',
      'Setting up CI/CD pipelines'
    ]
  }
])

const education = ref([
  {
    id: 1,
    degree: 'Bachelor of Science in Software Engineering',
    school: 'University of Dodoma',
    location: 'Dodoma, Tanzania',
    duration: '2023 - Present',
    status: 'In Progress',
    description: 'Currently pursuing comprehensive software engineering education with focus on software development methodologies, system design, and practical implementation.',
    coursework: ['Software Architecture', 'System Design', 'Web Development', 'Database Systems', 'Software Engineering Principles', 'Agile Development', 'Cloud Computing']
  }
])
</script>

<style scoped>
.experience-card,
.education-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
