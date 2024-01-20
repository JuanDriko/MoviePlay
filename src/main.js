import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index'
import '@fortawesome/fontawesome-free/css/all.css'
import '../public/main.css'

createApp(App)
  .use(router)
  .mount('#app')
