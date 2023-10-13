import {createStore} from "vuex/dist/vuex.mjs";
import auth from "@/store/modules/auth/auth";
import timeSheet from "@/store/modules/timeSheet/timeSheet";

const store = createStore({
    state:{},
    getters:{},
    actions:{},
    mutations:{},
    modules:{
        auth,
        timeSheet
    },

})

export default store