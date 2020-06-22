import RouterDemo from './components/RouterDemo';
// import RouterChildrenDemo from './components/RouterChildrenDemo';
import RouterChildrenProfileDemo from './components/RouterChildrenProfileDemo';
import RouterChildrenPostsDemo from './components/RouterChildrenPostsDemo';

const routes = [
  {
    path: '/foo', component: RouterDemo, name: '1'
  },
  {
    path: '/bar', component: RouterDemo, name: '2'
  },
  {
    path: '/a', redirect: '/bar'
  },
  {
    path: '*', component: RouterDemo, name: '404'
  },
  {
    path: '/user/:id',
    component: RouterDemo,
    name: '3',
    props: true,  // 'true' means pass url userId to pageId, namely {{ id }}
    children: [
      {
        // When the url becomes something like: /user/:id/profile
        // RouterChildrenProfileDemo will be displayed inside RouterDemo's <router-view />
        path: 'profile',
        component: RouterChildrenProfileDemo,
        name: '3-1'
      },
      {
        // When the url becomes something like: /user/:id/posts
        // RouterChildrenProfileDemo will be displayed inside RouterDemo's <router-view />
        path: 'posts',
        component: RouterChildrenPostsDemo,
        name: '3-2'
      }
    ]
  }
];

export default routes;