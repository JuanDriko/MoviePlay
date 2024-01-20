import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index'
import AppLink from "@/components/AppLink.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import '../public/main.css'

createApp(App)
  .component('AppLink', AppLink)
  .use(router)
  .mount('#app')
