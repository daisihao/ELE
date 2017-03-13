// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/stylus/index.styl';

//这里相当于全局注册，到处都可以使用
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/',
    component: goods
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new*/
const app = new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
