import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'


// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$bus = new mitt()
app.use(store).use(router).mount('#app')

