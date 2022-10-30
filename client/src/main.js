import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from './routes'
import { createPinia } from "pinia";

import App from "./App.vue";
import i18n from "./services/language/i18n";
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import vue3GoogleLogin from 'vue3-google-login'

/* console.log(routes) */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
});

const pinia = createPinia();
const app = createApp(App);
i18n(app)
  .use(vue3GoogleLogin, {
    clientId: "698650616555-jaurjhpouf41tadfd6u3d4ln1fb5m4g7.apps.googleusercontent.com",
  })
  .use(router)
  .use(pinia)
  .use(VueTelInput)
  .mount("#app");

export default router;
