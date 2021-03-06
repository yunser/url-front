import Vue from 'vue'
import App from './App'
import router from './router'
import storage from '@/util/storage'
import http from '@/util/http'
import ui from './components/index'
import './scss/main.scss'

Vue.config.productionTip = false

Vue.prototype.$storage = storage
Vue.prototype.$http = http

Vue.use(ui)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
