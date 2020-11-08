import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        displayView: 0,
        items: [],
        criterias: [],
        criteriaMatrixMap: {}
    },
    mutations: {
        setDisplayView(state, payload) {
            state.displayView = payload
        },
        setItems(state, payload) {
            state.items = payload
        },
        setCriterias(state, payload) {
            state.criterias = payload
        },
        setCriteriaMatrixMap(state, payload) {
            state.criteriaMatrixMap = payload
        }
    },
    actions: {
        init({commit}) {
            commit('setDisplayView', 0)
            commit('setItems', [])
            commit('setCriterias', [])
            commit('setCriteriaMatrixMap', {})
        },
    },
    modules: {}
})
