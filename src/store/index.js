import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state from "./state";
/*module开始*/
import footer from "./modules/footer";
import rigester from "./modules/rigester";
import login from "./modules/login";
import listing from "./modules/listing";
/*module结束*/
Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        footer,rigester,login,listing
    }
})

