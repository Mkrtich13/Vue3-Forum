import { createApp } from 'vue'

import router from '@/router/index'
import App from '@/App.vue'

const app = createApp(App)

app.use(router)

const requireComponent = require.context('./', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function(fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')

  app.component(baseComponentName, baseComponentConfig)
})

app.mount('#app')
