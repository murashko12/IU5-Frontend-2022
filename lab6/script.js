// задание 1
const square = document.querySelector(".square");
    // querySelector - метод, возвращающий первый элемент, соответствующий данному CSS-селектору.
const colors = ["black", "red", "white", "green", "yellow", "blue", "orange", "cyan", "purple", "teal", "brown"]

square.addEventListener("click", function() {
    // addEventListener регистрирует определённый обработчик события, вызванного на EventTarget.
    const chooser = colors[Math.floor(Math.random() * colors.length)]
    document.getElementById("color").style.backgroundColor = chooser
})
//------------------------------------------------------------------------------------------------------------------
// задание 2
const increment = document.getElementById("inc")
// setInterval - планирование вызова (ф-ия вызывается через какой-то интервал времени)
// clearInterval - отменяет действие метода setInterval в силу определенного события

let steps = 0, goInc

// курсор на счетчике
increment.addEventListener("mouseover",() => {
    goInc = setInterval(() => {
        steps++; increment.innerText = steps;
    },1000) // 1000 ~ 1 сек.
})

// курсор вне счетчике
increment.addEventListener("mouseout",() => {
    goInc = clearInterval(goInc)
})
//------------------------------------------------------------------------------------------------------------------
// задание 4
const sp = document.getElementById('space')
let ball = document.getElementById('ball')
ball.addEventListener('click', function () {
    sp.addEventListener('mousemove', ballPos)
})

function ballPos(e){
    ball.style.left = e.offsetX + 'px';
    ball.style.top = e.offsetY + 'px';
}

document.addEventListener('keyup', function(e){
    if(e.key === "Escape") {
        sp.removeEventListener('mousemove', ballPos)
    }
})
