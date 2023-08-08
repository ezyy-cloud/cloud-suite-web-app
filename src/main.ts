/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
import VueApolloComponents from '@vue/apollo-components';
import { apolloProvider } from '@/plugins/apollo';
import { createPinia } from 'pinia'
import { createApp } from 'vue'

loadFonts()

createApp(App)
    .use(vuetify)
    .use(createPinia())
    .use(router)
    .use(VueApolloComponents)
    .use(apolloProvider)
    .mount('#app')
