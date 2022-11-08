import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ReferView from "../views/ReferView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import UnsplashView from "../views/UnsplashView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/About",
    name: "about",
    component: AboutView,
  },
  {
    path: "/Reference",
    name: "refer",
    component: ReferView,
  },
  {
    path: "/Youtube",
    name: "youtube",
    component: YoutubeView,
  },
  {
    path: "/Unsplash",
    name: "unsplash",
    component: UnsplashView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
