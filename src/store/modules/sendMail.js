export default {
    state: {},
    actions: {
        ajaxSendMail() {
            return new Promise(function(resolve, reject) {
                const form = document.querySelector('.contact__form')
                const request = new XMLHttpRequest()
                request.open('POST', 'https://pereverzev.pro/send.php', true)
                request.send(new FormData(form))
                console.log('Отправка запроса')
                request.onload = function() {
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
