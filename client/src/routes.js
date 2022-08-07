import Home from "@/views/home.vue";

export const routes = [
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
    component: () => import("@/views/dashboard.vue"),
    children: [
      {
        path: "history",
        component: () => import("./views/dashboard/history.vue"),
      },
      /* {
        path: "security",
        component: UserHome,
      },
      {
        path: "contact",
        component: UserHome,
      },
      {
        path: "logout",
        component: UserHome,
      }, */
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
