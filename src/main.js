import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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

// Normalize
import 'normalize.css';

// Scss
import './assets/scss/app.scss';

vueApp.use(store).use(router).mount('#app');
