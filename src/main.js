// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ViewUI from 'view-design';
import './assets/font_one/iconfont.css'
import './assets/font_27/iconfont.css'
import '../static/global_css/reset.css'
import '../node_modules/view-design/dist/styles/iview.css';
import '../node_modules/element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui'

// import qs from 'qs';


// Vue.use(qs)
Vue.use(ElementUI)






// Vue.use(axios)
// Vue.use(ElementUI,{ size: 'small', zIndex: 3000 })
Vue.use(ViewUI)


Vue.config.productionTip = false

Vue.prototype.$axios = axios

axios.defaults.baseURL = '/api' 
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded'
// text/plain
// axios.defaults.headers.post['Content-Type'] = 'text/plain'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
