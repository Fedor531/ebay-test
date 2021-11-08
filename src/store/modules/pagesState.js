export default {
    state: {
        activePage: 'mainPage'
    },
    actions: {},
    mutations: {
        nextPage(state, page) {
            state.activePage = page;
        }
    },
    getters: {

        activePage: state => {
            return state.activePage
        }
    }
}
