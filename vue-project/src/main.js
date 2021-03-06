import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugins from './plugins/i18n'
import store from './store'

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}
const app = createApp(App);
app.directive('focus',{
    mounted(el){
        el.focus()
    }
})
app.use(router)
app.use(store)
app.use(i18nPlugins, i18nStrings)
app.mixin(mixins);
app.mount("#app")
window.Kakao.init("2d64494e0d1fa8a691349ac49019e934")