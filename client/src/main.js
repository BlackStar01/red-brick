import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/home.vue';
import { createRouter, createWebHashHistory } from "vue-router";
import i18n from './services/language/i18n';

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
    children: [
      {
        path: 'register',
        component: () => import("@/views/auth.vue"),
      },
      /* {
        path: 'login',
        component: () => import("@/views/Home.vue"),
      } */
    ]
    
  },
  
  /* { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App)
i18n(app).use(router).mount('#app')
