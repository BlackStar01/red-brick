import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/home.vue';
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: false },
  },
  /* {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  }, */
  
  /* { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


createApp(App).use(router).mount('#app')
