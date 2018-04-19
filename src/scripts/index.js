import Vue from "vue";
import  router from "../router/index";
import store from "../store/index";
/*全局引入模块*/
import Head from "./vuecomponent/header.vue";
Vue.component("Head",Head)
/*全局引入swiper*/
import { TabContainer, TabContainerItem  } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/*axios 数据请求端口*/
// axios.defaults.baseURL = "http://localhost:7070"; 
axios.defaults.baseURL = "http://47.98.152.202:7070"; 
/*Vue实例化*/
new Vue({
    router,
    store,
}).$mount("#main")