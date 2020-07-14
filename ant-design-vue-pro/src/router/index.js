import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
// import RenderRootView from "@/components/RenderRootView.vue";
import NotFound from "@/views/404.vue";

// NPM NProgress plugin
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/user",
    name: "user",
    // component: RenderRootView,
    // component: {
    //   render: h => h("router-view")  // IMPORTANT: jsx way of replacing RenderRootView
    // },
    component: () => import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () => import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () => import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: "/",
    // name: "BasicLayout",
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: h => h("router-view") },
        redirect: "/dashboard/analysis",
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue")
          }
        ]
      }
    ]
  },
  // 404 - Not Found Page
  {
    path: "*",
    name: 404,
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Do not show page loading effect when url parameter changes
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
