// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueHighcharts from 'vue-highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import Highcharts from 'highcharts/highstock'

import App from './App.vue'
import Routes from './routes'

Vue.use(Vuetify)
highchartsMore(Highcharts)
Vue.use(VueHighcharts, {Highcharts})
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
