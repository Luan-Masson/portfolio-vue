import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Lara from '../src/assets/Lara/index.js';
import Tooltip from 'primevue/tooltip';

import { createI18n } from 'vue-i18n';
import pt from './assets/i18n/pt.json';
import en from "./assets/i18n/en.json";

import './style.css';

const messages = {
    pt: pt,
    en: en
}
const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'pt',
    fallbackLocale: 'en',
    messages,
})


const app = createApp(App);
app.use(PrimeVue,{
    unstyled: true,
    pt: Lara
})
app.use(i18n);
app.directive('tooltip', Tooltip);
app.mount('#app');
