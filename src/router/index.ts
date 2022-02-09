import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/registerAdmin",
    component: () => import("../components/RegisterAdmin.vue"),
  },
  {
    path: "/loginAdmin",
    component: () => import("../components/LoginAdmin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
