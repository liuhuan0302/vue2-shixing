// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router/router.js';
import MintUI from "mint-ui";//引入mintui
import "mint-ui/lib/style.css";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import "../static/icon/iconfont.css"
import axios from "axios";
import Vuex from "vuex";//引入vuex
import createStore from "./router/store/store.js";

//注册vuex
Vue.use(Vuex);

const store = createStore();
//解决点击重复点击详情报错的问题
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

import Rem from "../static/rem";

Vue.prototype.$axios = axios;
//注册
Vue.use(MintUI);
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render(h){
    return h(App)
  }
})
