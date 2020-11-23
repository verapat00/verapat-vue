import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import DeviceList from "./pages/DeviceList.vue";
import DeviceDetail from "./pages/DeviceDetail.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
