import Vue from "vue";
import Router from "vue-router";
import DeviceList from "./pages/DeviceList.vue";
import DeviceDetail from "./pages/DeviceDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "device",
      component: DeviceList
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DeviceDetail
    }
  ]
});
