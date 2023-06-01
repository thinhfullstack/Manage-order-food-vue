import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routes'
import store from './store'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(pinia)
app.mount('#app')
