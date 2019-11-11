/*
 * @Author: your name
 * @Date: 2019-11-11 21:32:30
 * @LastEditTime: 2019-11-11 22:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pop-tip\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugin from './components/popTip.js';
import httpApi from './components/http-api.js';
Vue.use(plugin);
Vue.prototype.$http = httpApi;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
