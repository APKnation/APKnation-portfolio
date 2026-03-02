<template>
  <section id="contact" class="py-16 sm:py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl leading-tight mb-4">
          <span class="gradient-text">Get In Touch</span>
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          I'm actively open to discussing new opportunities, collaborations, and exciting projects. 
          Whether you're looking to hire, partner on a project, or simply connect about technology, 
          I'm always interested in meaningful conversations that can lead to impactful solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-gray-800 p-8 rounded-lg shadow-xl border border-primary-700/50">
          <h3 class="text-3xl font-bold text-white mb-8">Send Message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name <span class="text-red-500">*</span></label>
                <input type="text" id="name" v-model="form.name" required
                       class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white
                              focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email <span class="text-red-500">*</span></label>
                <input type="email" id="email" v-model="form.email" required
                       class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white
                              focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400">
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject <span class="text-red-500">*</span></label>
              <input type="text" id="subject" v-model="form.subject" required
                     class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white
                            focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message <span class="text-red-500">*</span></label>
              <textarea id="message" v-model="form.message" rows="4" required
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white
                               focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 resize-none"></textarea>
            </div>
            
            <button type="submit" 
                    :disabled="isSubmitting"
                    class="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 
                           rounded-md font-medium hover:from-primary-700 hover:to-secondary-700 
                           transition-all duration-300 transform hover:scale-105 disabled:opacity-50 
                           disabled:cursor-not-allowed">
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>

        <div class="bg-gray-800 p-8 rounded-lg shadow-xl border border-primary-700/50">
          <h3 class="text-3xl font-bold text-white mb-8">Communication Channels</h3>
          <p class="text-gray-300 mb-8 leading-relaxed">
            I believe in clear and prompt communication. Below are the various ways you can reach me 
            based on your needs and preferences. Each channel is monitored regularly to ensure 
            timely responses and meaningful engagement.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Github class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-white font-semibold">GitHub</h4>
                  <p class="text-gray-400 text-sm">Check out my projects</p>
                </div>
              </div>
              <a href="https://github.com/APKnation" target="_blank" rel="noopener noreferrer"
                 class="text-primary-400 hover:text-primary-300 transition-colors duration-300 flex items-center space-x-2">
                <span class="text-sm">Connect</span>
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Instagram class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-white font-semibold">Instagram</h4>
                  <p class="text-gray-400 text-sm">Follow for updates</p>
                </div>
              </div>
              <a href="https://instagram.com/apk_nation" target="_blank" rel="noopener noreferrer"
                 class="text-primary-400 hover:text-primary-300 transition-colors duration-300 flex items-center space-x-2">
                <span class="text-sm">Connect</span>
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-white font-semibold">WhatsApp</h4>
                  <p class="text-gray-400 text-sm">+255 749 288 072</p>
                </div>
              </div>
              <a href="https://wa.me/255749288072" target="_blank" rel="noopener noreferrer"
                 class="text-primary-400 hover:text-primary-300 transition-colors duration-300 flex items-center space-x-2">
                <span class="text-sm">Message</span>
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Github, Instagram, MessageCircle, ExternalLink } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'

const toast = useToast()
const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  // 1. Basic Validation check
  if (!form.name || !form.email || !form.subject || !form.message) {
    toast.error('Please fill in all required fields')
    return
  }

  isSubmitting.value = true

  try {
    // 2. Prepare payload for Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "989ccebe-0e50-4fc5-b7bf-e36f9c2c2a70",
        name: form.name,
        email: form.email,
        subject: `New Portfolio Message: ${form.subject}`,
        message: form.message,
        from_name: form.name,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success('Thanks! Your message has been sent to my Gmail.');
      // 3. Clear the form fields
      Object.assign(form, {
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      toast.error(result.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    toast.error('Could not connect to the mail server. Try again later.');
  } finally {
    isSubmitting.value = false;
  }
}
</script>