export default {
    state: {},
    actions: {
        ajaxPostAnswer(state, form) {
            return new Promise(function (resolve, reject) {
                const request = new XMLHttpRequest()
                request.open('POST', 'http://localhost/ebaydb/postAnswer.php', true)
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
        }
    }
}
