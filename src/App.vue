<template>
  <div id="app">
    <devicedetail></devicedetail>
    <devicelist></devicelist>
  </div>
</template>

<script>
import devicelist from "./pages/devicelist.vue";
import devicedetail from "./pages/devicedetail.vue";
export default {
  name: "App",
  components: {
    devicelist,
    devicedetail,
  },
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
