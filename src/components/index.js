import page from './page'
import result from './result'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('result', result)
    }
}
