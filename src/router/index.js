import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Portfolio from "../pages/Portfolio.vue";
import Contact from "../pages/Contact.vue";
import TestHolo from "../views/TestHolo.vue";
import HomeTestView from "../views/HomeTestView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeTestView,
    },
    {
      path: "/original",
      name: "original",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/test-holo",
      name: "TestHolo",
      component: TestHolo,
    },
  ],
});

export default router;
