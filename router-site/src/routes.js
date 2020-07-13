import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Blog from './components/Blog.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    // component: Home,
    component: () => import(/* webpackChunkName: "intro" */ './components/Home.vue'),
    name: 'home'
  },
  {
    path: '/blog',
    // component: Blog,
    component: () => import(/* webpackChunkName: "intro" */ './components/Blog.vue'),
    name: 'blog'
  },
  {
    path: '/profile',
    // component: Profile,
    component: () => import(/* webpackChunkName: "intro" */ './components/Profile.vue'),
    name: 'profile'
  },
  {
    path: '/about',
    // component: About,
    component: () => import(/* webpackChunkName: "intro" */ './components/About.vue'),
    name: 'about'
  },
  {
    path: '*',
    component: NotFound,
    name: '404'
  }
];

export default routes;