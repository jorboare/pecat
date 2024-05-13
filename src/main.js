import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import CAT from './i18n/cat.json'
import ES from './i18n/es.json'
import EN from './i18n/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'CAT',
  fallbackLocale: 'ES',
  messages: {
    CAT: CAT,
    ES: ES,
    EN: EN
  }
})

const app = createApp(App)
app.use(i18n)

const changeLanguage = (locale) => {
  app.config.globalProperties.$i18n.global.locale = locale
}

app.config.globalProperties.$changeLanguage = changeLanguage

app.mount('#app')
