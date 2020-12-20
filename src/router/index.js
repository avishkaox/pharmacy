import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue'
import Order from '../components/Order.vue'
import Singup from '../components/Singup.vue'
import Login from '../components/Login.vue'

Vue.use(Router);

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/singup',
      name: 'Singup',
      component: Singup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
});
