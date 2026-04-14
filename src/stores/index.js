import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Import images directly for production build
import ecommerceImage from '@/assets/images/ecommerce.png'
import trackerImage from '@/assets/images/tracker.png'
import taskImage from '@/assets/images/task.png'
import farmerImage from '@/assets/images/farmer.png'
import timberImage from '@/assets/images/timber.jpeg'
import schoolImage from '@/assets/images/school.png'
import weatherImage from '@/assets/images/weather.jpeg'
import moviehubImage from '@/assets/images/moviehub.png'

// Fallback paths for local development
const getImagePath = (importedImage, fallbackPath) => {
  // Use imported image for production, fallback path for development
  return importedImage || fallbackPath
}

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    
    // Update DOM immediately
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  const setTheme = (theme) => {
    isDarkMode.value = theme === 'dark'
    localStorage.setItem('theme', theme)
    
    // Update DOM immediately
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  // Initialize on creation
  if (localStorage.getItem('theme') === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
  
  return {
    isDarkMode,
    toggleTheme,
    setTheme
  }
})

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      image: getImagePath(ecommerceImage, '/src/assets/images/ecommerce.png'),
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
      image: getImagePath(trackerImage, '/src/assets/images/tracker.png'),
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Collaborative tool for teams to manage projects and tasks efficiently.',
      image: getImagePath(taskImage, '/src/assets/images/task.png'),
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Sustainable Farm Marketplace',
      description: 'E-commerce platform connecting sustainable farmers with consumers for direct product sales.',
      image: getImagePath(farmerImage, '/src/assets/images/farmer.png'),
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Timber Management System',
      description: 'Mobile application for efficient timber inventory tracking, logging operations, and forest resource management.',
      image: getImagePath(timberImage, '/src/assets/images/timber.jpeg'),
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'GPS Tracking'],
      category: 'mobile',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'School Management System',
      description: 'Comprehensive platform for managing student records, attendance, grading, and communication between teachers, students, and parents.',
      image: getImagePath(schoolImage, '/src/assets/images/school.png'),
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 7,
      title: 'Tanzania Weather Tracker',
      description: 'Real-time weather tracking application that provides current weather conditions, forecasts, and location-based weather updates specifically for Tanzania regions.',
      image: getImagePath(weatherImage, '/src/assets/images/weather.jpeg'),
      technologies: ['Vue.js', 'OpenWeather API', 'Geolocation API', 'Chart.js', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 8,
      title: 'APKnation MovieHub',
      description: 'A modern movie discovery platform for finding the perfect film. Search thousands of movies with tailored recommendations for your next favorite viewing experience.',
      image: getImagePath(moviehubImage, '/src/assets/images/moviehub.png'),
      technologies: ['Vue.js', 'Tailwind CSS', 'REST API', 'TMDB API'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ])
  
  const skills = ref([
    { name: 'JavaScript', icon: '', color: 'yellow' },
    { name: 'PHP', icon: '', color: 'indigo' },
    { name: 'Django', icon: '', color: 'green' },
    { name: 'HTML/CSS', icon: '', color: 'orange' },
    { name: 'Tailwind', icon: '', color: 'cyan' },
    { name: 'Angular.js', icon: '', color: 'green' },
    { name: 'React.js', icon: '', color: 'blue' },
    { name: 'Vue.js', icon: '', color: 'green' },
    { name: 'SQL', icon: '', color: 'purple' }
  ])
  
  const filteredProjects = computed(() => {
    return projects.value
  })
  
  const featuredProjects = computed(() => {
    return projects.value.filter(project => project.featured)
  })
  
  const getProjectsByCategory = (category) => {
    return projects.value.filter(project => project.category === category)
  }
  
  return {
    projects,
    skills,
    filteredProjects,
    featuredProjects,
    getProjectsByCategory
  }
})
