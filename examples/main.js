import Vue from 'vue'
import App from './App.vue'


import EchojoyUI from './../packages/index'
// import EchojoyUI from './../packages/test/src/test.vue'
Vue.use(EchojoyUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
