import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld2 from '@/components/HelloWorld2';
import Login from '@/pages/Login';
import Layout from '../components/Layout';

Vue.use(Router);

const routers = new Router({
  routes: [
    {
      path: '/main',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'HelloWorld',
          component: HelloWorld,
        },
        {
          path: 'hello',
          name: 'HelloWorld2',
          component: HelloWorld2,
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
    },
    {
      path: '*',
      redirect: '/main'
    }
  ],
});

routers.beforeEach((to, from, next) => {
  console.log(to, from); //eslint-disable-line
  next();
});

export default routers;
