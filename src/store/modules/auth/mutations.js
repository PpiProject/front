
export default {
    minus(store, payload){
        store.authorize = payload
    },


    plus(store, payload){
        store.authorize = payload
    },

    login(store, payload){
        store.authorize = true;
        store.userName = payload.user;
        store.token = payload.token
        store.nameRole = payload.nameRole
    },

    logout(store){
        store.authorize = false;
        store.userName = '';
        store.token = '';
    }
}