import "./assets/css/magnific-popup.css";
import "./assets/css/slick.css";
import "./assets/css/LineIcons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/default.css";
import "./assets/css/style.css";

import App from "./App.vue";
import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
