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

const imageMap = {
  'furniture.png': furnitureImage,
  'kazihub.png': kazihubImage,
  'ecommerce.png': ecommerceImage,
  'tracker.png': trackerImage,
  'task.png': taskImage,
  'farmer.png': farmerImage,
  'timber.jpeg': timberImage,
  'school.png': schoolImage,
  'weather.jpeg': weatherImage,
  'moviehub.png': moviehubImage,
  'hotel.png': hotelImage,
  'lms.png': lmsImage,
  'banking.jpeg': bankingImage,
  'majisalama.png': majiSalamaImage,
  'order.png': orderImage,
  'charity.png': charityImage,
}

const resolveImage = (image) => {
  if (!image) return ''
  if (typeof image === 'string' && imageMap[image]) return imageMap[image]
  // if it's already an imported/resolved URL or unknown, return as-is
  return image
}

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const setTheme = (theme) => {
    isDarkMode.value = theme === 'dark'
    localStorage.setItem('theme', theme)
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  if (localStorage.getItem('theme') === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }

  return { isDarkMode, toggleTheme, setTheme }
})

const defaultProjects = [
  { id: 12, title: 'Furniture E-Commerce Platform', description: 'A full-featured furniture online store with product catalog, category management, cart system, order tracking, and admin dashboard built with Spring Boot and React.', image: furnitureImage, technologies: ['Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/furniture', featured: true },
  { id: 13, title: 'KaziHub Job Platform', description: 'A modern job marketplace platform connecting employers and job seekers with smart filtering, real-time notifications, application tracking, and profile management.', image: kazihubImage, technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/kazihub', featured: true },
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with payment integration and inventory management.', image: ecommerceImage, technologies: ['React.js', 'Tailwind CSS', 'SQLite', 'Node.js'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/demo-ecommerce-with-vue', featured: true },
  { id: 2, title: 'Fitness Tracker App', description: 'Mobile application for tracking workouts, nutrition, and health metrics.', image: trackerImage, technologies: ['Vue.js', 'Django', 'SQLite', 'Tailwind CSS'], category: 'mobile', demoUrl: '#', githubUrl: '#', featured: true },
  { id: 3, title: 'Task Management System', description: 'Collaborative tool for teams to manage projects and tasks efficiently.', image: taskImage, technologies: ['HTML', 'Tailwind CSS', 'Vue.js', 'SQLite'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/angular_todo-app', featured: true },
  { id: 4, title: 'Sustainable Farm Marketplace', description: 'E-commerce platform connecting sustainable farmers with consumers for direct product sales.', image: farmerImage, technologies: ['Django', 'React.js', 'SQLite', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/agriMarket', featured: true },
  { id: 5, title: 'Timber Management System', description: 'Mobile application for efficient timber inventory tracking, logging operations, and forest resource management.', image: timberImage, technologies: ['Vue.js', 'SQLite', 'Tailwind CSS', 'HTML'], category: 'mobile', demoUrl: '#', githubUrl: 'https://github.com/APKnation/timber-app', featured: true },
  { id: 6, title: 'School Management System', description: 'Comprehensive platform for managing student records, attendance, grading, and communication between teachers, students, and parents.', image: schoolImage, technologies: ['Django', 'Vue.js', 'SQLite', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/mkalala-sec', featured: true },
  { id: 7, title: 'Tanzania Weather Tracker', description: 'Real-time weather tracking application that provides current weather conditions, forecasts, and location-based weather updates specifically for Tanzania regions.', image: weatherImage, technologies: ['React.js', 'HTML', 'Tailwind CSS', 'SQLite'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/weather-api', featured: true },
  { id: 8, title: 'APKnation MovieHub', description: 'A modern movie discovery platform for finding the perfect film. Search thousands of movies with tailored recommendations for your next favorite viewing experience.', image: moviehubImage, technologies: ['Vue.js', 'Django', 'SQLite', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/movie-app-with-react', featured: true },
  { id: 9, title: 'Learning Management System (LMS)', description: 'Comprehensive educational platform for course creation, student enrollment, progress tracking, and interactive learning experiences with multimedia content support.', image: lmsImage, technologies: ['React.js', 'Django', 'SQLite', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/LMS-django-react', featured: true },
  { id: 10, title: 'Hotel Management System', description: 'Complete hotel operations management solution with room booking, guest services, staff management, billing, and real-time inventory tracking.', image: hotelImage, technologies: ['Vue.js', 'HTML', 'SQLite', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/hotel-management-sytem', featured: true },
  { id: 11, title: 'Banking System', description: 'Modern banking application with account management, fund transfers, transaction tracking, and secure authentication for seamless financial operations.', image: bankingImage, technologies: ['Spring Boot', 'React.js', 'MySQL', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: '#', featured: true },
  { id: 14, title: 'Maji Salama Water Management', description: 'Water resource management system for monitoring, tracking, and optimizing water distribution and conservation initiatives.', image: majiSalamaImage, technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Tailwind CSS'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/majisalama', featured: true },
  { id: 15, title: 'Cafe Ordering System', description: 'A comprehensive management system for cafe ordering, tracking tables, and processing payments efficiently.', image: orderImage, technologies: ['Vue.js', 'Tailwind CSS', 'Django', 'SQLite'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/cafe-ordering-MS', featured: true },
  { id: 16, title: 'Charity Management Platform', description: 'A platform to facilitate and manage charitable donations, volunteers, and campaigns.', image: charityImage, technologies: ['Vue.js', 'Tailwind CSS', 'Django', 'SQLite'], category: 'web', demoUrl: '#', githubUrl: 'https://github.com/APKnation/charity', featured: true },
]

const defaultSkills = [
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
  { name: 'SQL', icon: '', color: 'purple' },
]

const defaultExperiences = [
  {
    id: 1,
    position: 'Software Engineer',
    company: 'Tech Solutions Ltd',
    location: 'Dodoma, Tanzania',
    duration: '2023 - Present',
    description: 'Full-stack development of web applications using modern technologies. Leading development teams and implementing best practices.',
    technologies: ['Vue.js', 'Laravel', 'Node.js', 'MySQL', 'Docker'],
    achievements: ['Leading development of 5 major client projects', 'Implementing modern development practices', 'Mentoring junior developers', 'Setting up CI/CD pipelines'],
  },
]

const defaultEducation = [
  {
    id: 1,
    degree: 'Bachelor of Science in Software Engineering',
    school: 'University of Dodoma',
    location: 'Dodoma, Tanzania',
    duration: '2023 - Present',
    status: 'In Progress',
    description: 'Currently pursuing comprehensive software engineering education with focus on software development methodologies, system design, and practical implementation.',
    coursework: ['Software Architecture', 'System Design', 'Web Development', 'Database Systems', 'Software Engineering Principles', 'Agile Development', 'Cloud Computing'],
  },
]

const defaultContact = {
  name: 'Atanas Patrick',
  email: 'atanasikafuka@gmail.com',
  phone: '+255749288072',
  location: 'Dodoma, Tanzania',
  message: "I'm actively open to discussing new opportunities, collaborations, and exciting projects.",
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref([...defaultProjects])
  const skills = ref([...defaultSkills])
  const experiences = ref([...defaultExperiences])
  const education = ref([...defaultEducation])
  const contact = ref({ ...defaultContact })
  const loading = ref(false)
  const error = ref(null)

  const filteredProjects = computed(() => projects.value)
  const featuredProjects = computed(() => projects.value.filter((p) => p.featured))
  const getProjectsByCategory = (category) => projects.value.filter((p) => p.category === category)

  const fetchFromApi = async () => {
    loading.value = true
    error.value = null
    const query = `
      query {
        projects { id title description image technologies category demoUrl githubUrl featured }
        skills { name icon color level }
        experience { id position company location duration description technologies achievements }
        education { id degree school location duration status description coursework }
        contact { name email phone location message }
      }
    `
    try {
      const res = await fetch('/graphql/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })
      if (!res.ok) throw new Error(`API error: ${res.status}`)
      const json = await res.json()
      if (json.errors?.length) throw new Error(json.errors[0].message || 'GraphQL error')
      const data = json.data || {}
      if (Array.isArray(data.projects) && data.projects.length) {
        projects.value = data.projects.map((p) => ({ ...p, image: resolveImage(p.image) }))
      }
      if (Array.isArray(data.skills) && data.skills.length) {
        skills.value = data.skills
      }
      if (Array.isArray(data.experience) && data.experience.length) {
        experiences.value = data.experience
      }
      if (Array.isArray(data.education) && data.education.length) {
        education.value = data.education
      }
      if (data.contact) {
        contact.value = { ...defaultContact, ...data.contact }
      }
    } catch (e) {
      // Keep local fallback data; backend may be unavailable during static/dev-only use.
      error.value = e?.message || 'Failed to load portfolio data'
      console.warn('Portfolio API fetch failed, using local data:', e)
    } finally {
      loading.value = false
    }
  }

  return {
    projects,
    skills,
    experiences,
    education,
    contact,
    loading,
    error,
    filteredProjects,
    featuredProjects,
    getProjectsByCategory,
    fetchFromApi,
  }
})
