import { RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MainLayout from "../layouts/MainLayout.vue";

export default [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "/about",
        name: "AboutView",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
] as Array<RouteRecordRaw>;
