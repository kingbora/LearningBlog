import Vue from 'vue';
import Router from 'vue-router';
// import iView from 'iview';
import MainView from '@/view/Main/Main.vue';
import HomeView from '@/view/Home/Home.vue';
import AboutView from '@/view/About/About.vue';
import LearningView from '@/view/Learning/Learning.vue';
import LifeView from '@/view/Life/Life.vue';
import MessageView from '@/view/Message/Message.vue';
import ListDetailView from '@/view/Home/ListDetail/ListDetail.vue';
import ListView from '@/view/Home/List/List.vue';

Vue.use(Router);

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: MainView,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
          children: [
            {
              path: '',
              name: 'home',
              component: ListView
            },
            {
              path: 'list/:id',
              name: 'home',
              component: ListDetailView
            }
          ]
        },
        {
          path: 'learning',
          name: 'learning',
          component: LearningView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
        {
          path: 'life',
          name: 'life',
          component: LifeView
        },
        {
          path: 'message',
          name: 'message',
          component: MessageView
        }
      ]
    }
  ]
});

// $route.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });
//
// $route.afterEach(route => {
//   iView.LoadingBar.finish();
// });

export default router;
