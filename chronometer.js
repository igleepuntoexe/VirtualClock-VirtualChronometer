document.addEventListener("DOMContentLoaded", play)
let tempRef = Date.now()
let chron = false
let temp2 = 0

function play(){
    let btn = document.getElementById("go")
    btn.addEventListener("click",start)

    let btn2 = document.getElementById("stop")
    btn2.addEventListener("click",stop)

    let btn3 = document.getElementById("clear")
    btn3.addEventListener("click",root)
}

function start() {
    chron = true
}

function stop() {
    chron = false
}

function root() {
    chron = 0
}

setInterval(() => {
    let temp = document.getElementById("chrono")
    if (chron) {
        temp2 += Date.now() - tempRef
    }
    tempRef = Date.now()
    temp.innerHTML = formatMS(temp2)
}, 1000 / 60);

function formatMS(temp_ms) {
    let MS = temp_ms % 1000
    let St = Math.floor(((temp_ms - MS) / 1000))
    let S = St%60
    let M = Math.floor((St / 60) % 60)
    let H = Math.floor((St/60 / 60))

    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0)
    }

    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)
        + "." + MS.ceros(3)
}