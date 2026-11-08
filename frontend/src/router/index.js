import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'
import Experience from '@/views/Experience.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'slide-up' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { transition: 'fade' }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: { transition: 'fade' }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { transition: 'fade' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { transition: 'fade' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { transition: 'fade' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
