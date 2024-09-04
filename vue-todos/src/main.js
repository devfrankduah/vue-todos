import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const AWS_ACCESS_KEY_ID="AKIAYQSG7D3YJAXGPUMQ"
app.use(router)

app.mount('#app')
