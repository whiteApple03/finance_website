import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/Index.js'

const app = createApp(App)
app.use(router)
app.use(store).mount('#app')
 export default app