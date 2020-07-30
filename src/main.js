import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from './mock'
import Cup from '../packages'

createApp(App)
  .use(router)
  .use(store)
  .use(Cup)
  .use(mock)
  .mount('#app')
