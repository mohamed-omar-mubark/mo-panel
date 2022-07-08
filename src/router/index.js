import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Public routes
  // Home
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/public/Home.vue")
  },
  // Login
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/public/Login.vue")
  },

  // Authenticated routes
  // Dashboard
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/auth/dashboard/Dashboard.vue"),
    children: [
      // Dashboard/Overview
      {
        path: "overview",
        name: "Overview",
        component: () => import("@/views/auth/dashboard/dashboard-views/Overview.vue")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
