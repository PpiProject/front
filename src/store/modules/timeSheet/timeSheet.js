import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from "@/store/modules/timeSheet/store";
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
};