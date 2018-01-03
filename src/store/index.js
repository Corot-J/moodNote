import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        noteList:[],
        noteDetailId: ''
    },
    getters,
    actions,
    mutations
})