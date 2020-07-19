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
    hideInMenu: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/user",
    name: "user",
    hideInMenu: true,
    // component: RenderRootView,
    // component: {
    //   render: h => h("router-view")  // IMPORTANT: jsx way of replacing RenderRootView
    // },
    component: () => import( /* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [{
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () => import( /* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () => import( /* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: "/",
    // route level code-splitting
    // this generates a separate chunk (layout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [{
        path: "/",
        redirect: "/dashboard/analysis"
      },

      // Dashboard Section
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          icon: "dashboard",
          title: "Dashboard"
        },
        component: {
          render: h => h("router-view")
        },
        // redirect: "/dashboard/analysis",
        children: [{
          path: "/dashboard/analysis",
          name: "analysis",
          meta: {
            title: "Analysis"
          },
          component: () => import( /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue"),
        }]
      },

      // Form Section
      {
        path: "/form",
        name: "form",
        meta: {
          icon: "form",
          title: "Form"
        },
        component: {
          render: h => h("router-view")
        },
        children: [{
            path: "/form/basic-form",
            name: "basicform",
            meta: {
              title: "BasicForm"
            },
            component: () => import( /* webpackChunkName: "form" */ "../views/Forms/BasicForm.vue")
          },
          {
            path: "/form/step-form",
            name: "stepform",
            meta: {
              title: "StepForm"
            },
            hideChildrenInMenu: true,
            component: () => import( /* webpackChunkName: "form" */ "../views/Forms/StepForm.vue"),
            children: [{
                path: "/form/step-form",
                redirect: "/form/step-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: import( /* webpackChunkName: "form" */ "../views/Forms/StepForm/Info.vue"),
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: import( /* webpackChunkName: "form" */ "../views/Forms/StepForm/Confirm.vue"),
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () => import( /* webpackChunkName: "form" */ "../views/Forms/StepForm/Result.vue"),
              }
            ]
          }
        ]
      },
    ]
  },
  // 404 - Not Found Page
  {
    path: "*",
    name: 404,
    hideInMenu: true,
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