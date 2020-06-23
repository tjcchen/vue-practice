import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Blog from './components/Blog.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'root'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/blog',
    component: Blog,
    name: 'blog'
  },
  {
    path: '/profile',
    component: Profile,
    name: 'profile'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '*',
    component: NotFound,
    name: '404'
  }
];

export default routes;