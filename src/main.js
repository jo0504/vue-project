import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
    
});

import restrictBrowser from "./common/restrict-browser";
new Vue(
    restrictBrowser({
        el: "#app",
        //router,
        //store,
        render: (h) => h(App),
    })
);