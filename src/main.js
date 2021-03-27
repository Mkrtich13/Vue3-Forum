import { createApp } from 'vue'

import router from '@/router/index'
import App from '@/App.vue'
import AppDate from '@/components/AppDate'

const app = createApp(App)

app.use(router)

app.component('AppDate', AppDate)
app.mount('#app')
