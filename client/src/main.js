import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/home.vue';
import { createRouter, createWebHashHistory } from "vue-router";
import i18n from './services/language/i18n';
import { createPinia } from 'pinia'

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
  
  /* { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia()
const app = createApp(App)
i18n(app).use(router).use(pinia).mount('#app')

export default router
