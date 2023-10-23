import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: {
      name: "options",
    },
  },
  {
    path: "/options",
    name: "options",
    component: () => import("../views/OptionsView.vue"),
  },
  {
    path: "/selected",
    name: "selected",
    component: () => import("../views/SelectedView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
