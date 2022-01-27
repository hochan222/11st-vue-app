import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import fetch from '~/plugins/fetch'
import lazyload from '~/plugins/lazyLoad'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(fetch)
app.use(lazyload)
app.mount('#app')
