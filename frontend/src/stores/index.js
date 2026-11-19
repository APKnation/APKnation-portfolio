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

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref([])
  const skills = ref([])
  const experiences = ref([])
  const education = ref([])
  const contact = ref({})
  const profile = ref({})
  const loading = ref(false)
  const error = ref(null)
  const loadedFromApi = ref(false)

  const filteredProjects = computed(() => projects.value)
  const featuredProjects = computed(() => projects.value.filter((p) => p.featured))
  const getProjectsByCategory = (category) => projects.value.filter((p) => p.category === category)

  const fetchFromApi = async () => {
    loading.value = true
    error.value = null
    const query = `
      query {
        profile { name title heroIntro aboutBio1 aboutBio2 aboutBio3 aboutSummary location email phone githubUrl instagramUrl whatsappUrl resumeUrl contactMessage yearsExperience projectsCount skillsCount }
        projects { id title description image technologies category demoUrl githubUrl featured }
        skills { id name summary description level color image topics { id name percent } }
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
      const data = json.data || {}
      const hasData = Boolean(data.profile) || Array.isArray(data.skills)
      if (json.errors?.length) {
        // Do not blank the whole site because one field failed: keep the data we got.
        console.warn('GraphQL returned errors:', json.errors)
        if (!hasData) throw new Error(json.errors[0].message || 'GraphQL error')
      }
      if (data.profile) {
        profile.value = data.profile
        // keep contact in sync with profile
        contact.value = {
          name: data.profile.name || '',
          email: data.profile.email || '',
          phone: data.profile.phone || '',
          location: data.profile.location || '',
          message: data.profile.contactMessage || '',
        }
      } else if (data.contact) {
        contact.value = data.contact
      }
      if (Array.isArray(data.projects)) {
        projects.value = data.projects.map((p) => ({ ...p, image: resolveImage(p.image) }))
      }
      if (Array.isArray(data.skills)) {
        skills.value = data.skills
      }
      if (Array.isArray(data.experience)) {
        experiences.value = data.experience
      }
      if (Array.isArray(data.education)) {
        education.value = data.education
      }
      loadedFromApi.value = true
    } catch (e) {
      error.value = e?.message || 'Failed to load portfolio data'
      console.warn('Portfolio API fetch failed, no fallback data:', e)
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
    profile,
    loading,
    error,
    loadedFromApi,
    filteredProjects,
    featuredProjects,
    getProjectsByCategory,
    fetchFromApi,
  }
})
