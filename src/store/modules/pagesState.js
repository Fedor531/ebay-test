export default {
    state: {
        pages: ['mainPage', 'questionsPage'],
        activePage: 0
    },
    actions: {

    },
    mutations: {
        nextPage(state) {
            state.activePage++;
        }
    },
    getters: {
        pages: state => {
            return state.pages
        },
        activePage: state => {
            return state.activePage
        }
    }
}
