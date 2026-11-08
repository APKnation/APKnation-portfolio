<template>
  <footer class="bg-gradient-to-br from-primary-900 via-secondary-900 to-gray-900 text-white py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- About Section -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold gradient-text">
            Atanas Patrick
          </h3>
          <div class="mt-4">
            <h4 class="font-medium text-white mb-2 text-sm">Follow Me</h4>
            <div class="flex space-x-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                :class="social.hoverClass"
                class="text-primary-300 transition-colors duration-200 transform hover:scale-110 
                       focus:outline-none focus:ring-2 focus:ring-gray-400/50 rounded-full p-1"
                :aria-label="`Visit my ${social.name} profile`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <component :is="social.icon" class="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-white">Stay Updated</h3>
          <p class="text-gray-300 text-sm">
            Subscribe to my newsletter for the latest updates and articles.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="Your email address"
              required
              class="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                     text-white placeholder-gray-400 text-sm"
              aria-label="Enter your email address"
            />
            <button
              type="submit"
              :disabled="isSubscribing"
              class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg 
                     font-medium transition-colors duration-200 whitespace-nowrap text-sm 
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-700 mt-6 pt-4">
        <div class="flex flex-col items-center justify-center text-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Atanas Patrick. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Github, Instagram, MessageCircle, Phone } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'

const toast = useToast()
const email = ref('')
const isSubscribing = ref(false)

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/APKnation',
    icon: Github,
    hoverClass: 'hover:text-gray-400'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/APKnation',
    icon: MessageCircle,
    hoverClass: 'hover:text-secondary-400'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/apk_nation',
    icon: Instagram,
    hoverClass: 'hover:text-secondary-400'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/749288072',
    icon: Phone,
    hoverClass: 'hover:text-green-400'
  }
]

const currentYear = computed(() => new Date().getFullYear())

const subscribeNewsletter = async () => {
  if (!email.value) return
  
  isSubscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Successfully subscribed to newsletter!')
    email.value = ''
  } catch (error) {
    toast.error('Failed to subscribe. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}
</script>
