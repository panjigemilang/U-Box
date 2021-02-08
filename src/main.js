import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import VueScrollTo from "vue-scrollto"

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease-in-out",
  offset: -100,
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
