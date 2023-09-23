import {createStore} from "vuex/dist/vuex.mjs";
import auth from "@/store/modules/auth/auth";

const store = createStore({
    state:{},
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        auth
    },

})

export default store