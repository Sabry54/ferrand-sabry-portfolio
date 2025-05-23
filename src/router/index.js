import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Portfolio from "../pages/Portfolio.vue";
import Contact from "../pages/Contact.vue";
import TestHolo from "../views/TestHolo.vue";
import HomeView from "../views/HomeView.vue";
import LegalNotice from "../views/LegalNotice.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
    {
      path: "/legal-notice",
      name: "legal-notice",
      component: LegalNotice,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
    },
  ],
});

export default router;
