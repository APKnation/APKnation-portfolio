import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Import images directly for production build
import furnitureImage from '@/assets/images/furniture.png'
import kazihubImage from '@/assets/images/kazihub.png'
import ecommerceImage from '@/assets/images/ecommerce.png'
import trackerImage from '@/assets/images/tracker.png'
import taskImage from '@/assets/images/task.png'
import farmerImage from '@/assets/images/farmer.png'
import timberImage from '@/assets/images/timber.jpeg'
import schoolImage from '@/assets/images/school.png'
import weatherImage from '@/assets/images/weather.jpeg'
import moviehubImage from '@/assets/images/moviehub.png'
import hotelImage from '@/assets/images/hotel.png'
import lmsImage from '@/assets/images/lms.png'
import bankingImage from '@/assets/images/banking.jpeg'
import majiSalamaImage from '@/assets/images/majisalama.png'
import orderImage from '@/assets/images/order.png'
import charityImage from '@/assets/images/charity.png'

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
      id: 12,
      title: 'Furniture E-Commerce Platform',
      description: 'A full-featured furniture online store with product catalog, category management, cart system, order tracking, and admin dashboard built with Spring Boot and React.',
      image: furnitureImage,
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/furniture',
      featured: true
    },
    {
      id: 13,
      title: 'KaziHub Job Platform',
      description: 'A modern job marketplace platform connecting employers and job seekers with smart filtering, real-time notifications, application tracking, and profile management.',
      image: kazihubImage,
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/kazihub',
      featured: true
    },
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      image: getImagePath(ecommerceImage, '/src/assets/images/ecommerce.png'),
      technologies: ['React.js', 'Tailwind CSS', 'SQLite', 'Node.js'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/demo-ecommerce-with-vue',
      featured: true
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
      image: getImagePath(trackerImage, '/src/assets/images/tracker.png'),
      technologies: ['Vue.js', 'Django', 'SQLite', 'Tailwind CSS'],
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
      technologies: ['HTML', 'Tailwind CSS', 'Vue.js', 'SQLite'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/angular_todo-app',
      featured: true
    },
    {
      id: 4,
      title: 'Sustainable Farm Marketplace',
      description: 'E-commerce platform connecting sustainable farmers with consumers for direct product sales.',
      image: getImagePath(farmerImage, '/src/assets/images/farmer.png'),
      technologies: ['Django', 'React.js', 'SQLite', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/agriMarket',
      featured: true
    },
    {
      id: 5,
      title: 'Timber Management System',
      description: 'Mobile application for efficient timber inventory tracking, logging operations, and forest resource management.',
      image: getImagePath(timberImage, '/src/assets/images/timber.jpeg'),
      technologies: ['Vue.js', 'SQLite', 'Tailwind CSS', 'HTML'],
      category: 'mobile',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/timber-app',
      featured: true
    },
    {
      id: 6,
      title: 'School Management System',
      description: 'Comprehensive platform for managing student records, attendance, grading, and communication between teachers, students, and parents.',
      image: getImagePath(schoolImage, '/src/assets/images/school.png'),
      technologies: ['Django', 'Vue.js', 'SQLite', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/mkalala-sec',
      featured: true
    },
    {
      id: 7,
      title: 'Tanzania Weather Tracker',
      description: 'Real-time weather tracking application that provides current weather conditions, forecasts, and location-based weather updates specifically for Tanzania regions.',
      image: getImagePath(weatherImage, '/src/assets/images/weather.jpeg'),
      technologies: ['React.js', 'HTML', 'Tailwind CSS', 'SQLite'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/weather-api',
      featured: true
    },
    {
      id: 8,
      title: 'APKnation MovieHub',
      description: 'A modern movie discovery platform for finding the perfect film. Search thousands of movies with tailored recommendations for your next favorite viewing experience.',
      image: getImagePath(moviehubImage, '/src/assets/images/moviehub.png'),
      technologies: ['Vue.js', 'Django', 'SQLite', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/movie-app-with-react',
      featured: true
    },
    {
      id: 9,
      title: 'Learning Management System (LMS)',
      description: 'Comprehensive educational platform for course creation, student enrollment, progress tracking, and interactive learning experiences with multimedia content support.',
      image: getImagePath(lmsImage, '/src/assets/images/lms.png'),
      technologies: ['React.js', 'Django', 'SQLite', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/LMS-django-react',
      featured: true
    },
    {
      id: 10,
      title: 'Hotel Management System',
      description: 'Complete hotel operations management solution with room booking, guest services, staff management, billing, and real-time inventory tracking.',
      image: getImagePath(hotelImage, '/src/assets/images/hotel.png'),
      technologies: ['Vue.js', 'HTML', 'SQLite', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/hotel-management-sytem',
      featured: true
    },
    {
      id: 11,
      title: 'Banking System',
      description: 'Modern banking application with account management, fund transfers, transaction tracking, and secure authentication for seamless financial operations.',
      image: getImagePath(bankingImage, '/src/assets/images/banking.jpeg'),
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 14,
      title: 'Maji Salama Water Management',
      description: 'Water resource management system for monitoring, tracking, and optimizing water distribution and conservation initiatives.',
      image: getImagePath(majiSalamaImage, '/src/assets/images/majisalama.png'),
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/majisalama',
      featured: true
    },
    {
      id: 15,
      title: 'Cafe Ordering System',
      description: 'A comprehensive management system for cafe ordering, tracking tables, and processing payments efficiently.',
      image: getImagePath(orderImage, '/src/assets/images/order.png'),
      technologies: ['Vue.js', 'Tailwind CSS', 'Django', 'SQLite'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/cafe-ordering-MS',
      featured: true
    },
    {
      id: 16,
      title: 'Charity Management Platform',
      description: 'A platform to facilitate and manage charitable donations, volunteers, and campaigns.',
      image: getImagePath(charityImage, '/src/assets/images/charity.png'),
      technologies: ['Vue.js', 'Tailwind CSS', 'Django', 'SQLite'],
      category: 'web',
      demoUrl: '#',
      githubUrl: 'https://github.com/APKnation/charity',
      featured: true
    }
  ])
  
  const skills = ref([
    { name: 'JavaScript', icon: '', color: 'yellow' },
    { name: 'Python', icon: '', color: 'blue' },
    { name: 'PHP', icon: '', color: 'indigo' },
    { name: 'Java', icon: '', color: 'red' },
    { name: 'Spring Boot', icon: '', color: 'green' },
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
