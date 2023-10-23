import './index.css'
import { clerkPlugin } from 'vue-clerk'
import { createApp } from 'vue'
import Main from './main.vue'
import router from './router'

const app = createApp(Main)

app.use(router)
app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
})

app.mount('#app')
