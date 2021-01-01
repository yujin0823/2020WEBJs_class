import Vue from 'vue'
import App from './App.vue'
// import {a, b} from './App.vue'
// console.log(a, b);

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
})

// 위에랑 같다.
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
