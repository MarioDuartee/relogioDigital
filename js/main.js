const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const doc = document.querySelector('body')

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    hours.textContent = hr < 10 ? '0' + hr : hr
    minutes.textContent = min < 10 ? '0' + min : min
    seconds.textContent = sec < 10 ? '0' + sec : sec

    definirFundo(hours)

})

function definirFundo(hours) {
    if (hours.textContent > 05 && hours.textContent < 12) {
        doc.classList.remove('noite')
        doc.classList.add('manha')
    } else if (hours.textContent >= 12 && hours.textContent < 18) {
        doc.classList.remove('manha')
        doc.classList.add('tarde')
    } else {
        doc.classList.remove('tarde')
        doc.classList.add('noite')
    }
}