// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

// import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI);
export const SocketInstance = socketio('http://localhost:9000');
 Vue.use(VueSocketIO, SocketInstance)
// Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
