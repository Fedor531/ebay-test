import Vue from 'vue'
import Vuex from 'vuex'
import pages from './modules/pagesState'
import answers from './modules/answers'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pages,
        answers
    }
})
