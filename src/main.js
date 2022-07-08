import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

const vueApp = createApp(App);

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Notification
import Notifications from '@kyvg/vue3-notification';
vueApp.use(Notifications);

// Particles.js
import VueParticles from 'vue-particles';
vueApp.use(VueParticles);

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Normalize
import 'normalize.css';

// Scss
import './assets/scss/app.scss';

vueApp.use(i18n).use(store).use(router).mount('#app');
