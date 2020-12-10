import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/util/axios'
// 导入进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.prototype.$http = http

Vue.config.productionTip = false
Vue.use(ElementUI)

// 全局进度条的配置
NProgress.inc(0.3)
NProgress.configure({
  showSpinner: true,
  easing: 'ease',
  speed: 500,
  minimum: 0.3
})

require('./mock')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
