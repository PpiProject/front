export default {
    minus({commit}, payload){
        commit('minus', payload)
    },

    plus({commit}, payload){
        commit('plus', payload)
    },

    setAuth({commit}, payload){
      commit('login', payload)
    },

    setLogout({commit}){
        commit('logout')
    }
}