export default {
    state: {},
    actions: {
        ajaxPostAnswer(state, form) {
            return new Promise(function (resolve, reject) {
                const isDev = process.env.NODE_ENV === 'development';
                const url = isDev ? 'http://localhost/ebaydb/postAnswer.php' : 'https://pereverzev.pro/ebaydb/postAnswer.php'
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
        }
    }
}
