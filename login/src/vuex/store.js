import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    user:''
}

const mutations = {
    updataUser(state,name){
        state.user = name
    }
}

export default new Vuex.Store({
    state,
    mutations
})