import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Drinks from "../components/Drinks";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/drinks", component: Drinks },
  { path: "/menu", component: Menu },
];

const router = new VueRouter({
  routes,
});

export default router;
