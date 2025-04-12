require("./bootstrap");

import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import vuetify from "./vuetify";
import { sync } from "vuex-router-sync";
import VueMask from "v-mask";
import * as VueGoogleMaps from "vue2-google-maps";
import CKEditor from '@ckeditor/ckeditor5-vue2';
import VueApexCharts from "vue-apexcharts";
const requireComponent = require.context("./components/base", false, /\.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.component("apexchart", VueApexCharts);

sync(store, router);

Vue.use(CKEditor);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDc1AB2r714lwfIjJ5KK2Cfgex3Fn2RwPE",
    libraries: ["places"],
    region: "PE",
    language: "es",
  },
});
Vue.use(VueMask);
window.vm = new Vue({
  store,
  router,
  vuetify,
  el: "#app",
  template: "<App/>",
  components: { App },
});
