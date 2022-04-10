import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsIndex,
  },
  {
    path: "/posts/new",
    name: "post-new",
    component: PostsNew,
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: PostsShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
