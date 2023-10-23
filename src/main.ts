import './index.css'

import { createApp } from 'vue'
import Main from './main.vue'
import router from './router'

const app = createApp(Main)

app.use(router)

app.mount('#app')
