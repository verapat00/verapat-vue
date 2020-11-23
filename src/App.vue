<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import DeviceList from "./pages/DeviceList.vue";
import DeviceDetaile from "./pages/DeviceDetail.vue";
export default {
  name: "App",
};
</script>









<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
