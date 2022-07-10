import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Particles.js
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// ApexCharts
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

// Normalize
import 'normalize.css';

// Scss
import './assets/scss/app.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
