import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(localStorage.getItem('theme') === 'dark')
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  }
  
  const setTheme = (theme) => {
    isDarkMode.value = theme === 'dark'
    localStorage.setItem('theme', theme)
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
      image: '/src/assets/images/ecommerce.png',
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
      image: '/src/assets/images/tracker.png',
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
      image: '/src/assets/images/task.png',
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
      image: '/src/assets/images/farmer.png',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ])
  
  const skills = ref([
    { name: 'JavaScript', level: 90, icon: '🟨', color: 'yellow' },
    { name: 'PHP', level: 85, icon: '🐘', color: 'indigo' },
    { name: 'Django', level: 88, icon: '⚛️', color: 'green' },
    { name: 'HTML/CSS', level: 95, icon: '🖥️', color: 'orange' },
    { name: 'Tailwind', level: 92, icon: '🌀', color: 'cyan' },
    { name: 'Angular.js', level: 80, icon: '🟢', color: 'green' },
    { name: 'Laravel', level: 87, icon: '🔷', color: 'red' },
    { name: 'Vue.js', level: 83, icon: '💚', color: 'green' },
    { name: 'SQL', level: 75, icon: '🗄️', color: 'purple' }
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
