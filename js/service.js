const container = document.querySelector("#container")
const title = document.querySelector("#container h1")
const playBtn = document.querySelector("a.play")
const stopBtn = document.querySelector("a.stop")

// 함수만 들어가는 자리이기때문에 괄호가 없어도됨
// 셋인터발은 함수를 반복적으로 정해진 시간마다 함수를 호출함
let play = setInterval(bgChange, 1500)

// .toString(16) : 16진수 문자열로 변경
// .slice(2,8) 2번째부터 7번쨰까지만 가져옴 - 랜덤함수는 0부터 1사이의 숫자만 주기때문에 첫번째는 버리고 소수점을 가져옴
// .padEnd: 6자리숫자가 필요한데 그 이하가나오면 0숫자로 바꿔줌
function getRandomColor() {
    const hex = '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0');
    console.log(hex)
    return hex
}


container.style.backgroundColor = getRandomColor()

function bgChange() {
    const ramdomColor = getRandomColor()
    container.style.backgroundColor = ramdomColor
    title.textContent = ramdomColor.toUpperCase()
}

stopBtn.addEventListener('click', (e) => {
    e.preventDefault()
    clearInterval(play)
    play = null
})
playBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!play) {
        play = setInterval(bgChange, 1500)
    }
})

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});