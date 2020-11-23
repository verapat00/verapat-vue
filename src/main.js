import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
//import DeviceList from "./pages/DeviceList.vue";
//import DeviceDetail from "./pages/DeviceDetail.vue";
import store from "./store.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
