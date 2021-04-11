export default {
    state: {
        questions: null,
        answers: null
    },
    mutations: {
        addData(state, data) {
            state.questions = data.questions
            state.answers = data.answers
        }
    },
    actions: {
        ajaxPostAnswer({ }, form) {
            return new Promise(function (resolve, reject) {
                const isDev = process.env.NODE_ENV === 'development';
                const url = isDev ? 'http://localhost/ebay_test/postAnswer.php' : 'https://pereverzev-backend.ru/ebay_test/postAnswer.php'
                const request = new XMLHttpRequest()
                request.open('POST', url, true)
                request.send(form)
                console.log('Отправка запроса')
                request.onload = function () {
                    if (request.readyState === 4 && request.status === 200) {
                        resolve('Запрос отправлен')
                    } else {
                        reject('Ошибка')
                    }
                }
            })
        },
        ajaxGetData({ commit }) {
            return new Promise(function (resolve, reject) {
                const isDev = process.env.NODE_ENV === 'development';
                const url = isDev ? 'http://localhost/ebay_test/getQuestions.php' : 'https://pereverzev-backend.ru/ebay_test/getQuestions.php'
                const request = new XMLHttpRequest()
                request.open('GET', url, true)
                request.send()
                request.onload = function () {
                    if (request.readyState === 4 && request.status === 200) {
                        console.log('Вопросы получены');
                        commit('addData', JSON.parse(request.responseText))
                    } else {
                        reject('Ошибка')
                    }
                }
            })
        },
    },
    getters: {
        getQuestions: state => {
            return state.questions
        },
        getAnswers: state => {
            return state.answers
        }
    }
}
