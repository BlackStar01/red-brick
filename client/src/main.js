import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import i18n from "./services/language/i18n";
import { createPinia } from "pinia";
import vue3GoogleLogin from 'vue3-google-login'
import Home from "@/views/home.vue";


const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();
const app = createApp(App);
i18n(app)
  .use(vue3GoogleLogin, {
    clientId: "698650616555-jaurjhpouf41tadfd6u3d4ln1fb5m4g7.apps.googleusercontent.com",
  })
  .use(router)
  .use(pinia)
  .mount("#app");

export default router;
