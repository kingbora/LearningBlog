// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './services/httpInterceptors';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme.scss';

Vue.config.productionTip = false;

//将axios挂载到prototype上,http服务由axios代理
Vue.prototype.$http = axios;

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
