// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// editing the <head>
import VueHead from 'vue-head'

// setup the router
import VueRouter from 'vue-router'
import router from './router/index.js'

Vue.use(VueHead)
Vue.use(VueRouter)

/* eslint no-unused-vars: 0 */
const app = new Vue({
  router,
  render (h) {
    return h(App)
  }
}).$mount('#app')
