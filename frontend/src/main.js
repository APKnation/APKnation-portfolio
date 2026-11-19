import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import reveal from './directives/reveal'

// Styles
import './assets/styles/main.css'

// Toast notifications
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app.directive('reveal', reveal)

app.use(pinia)
app.use(router)
app.use(Toast, {
  timeout: 5000,
  position: 'top-right',
  closeOnClick: true,
  pauseOnHover: true,
})

app.mount('#app')
