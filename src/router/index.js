import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
