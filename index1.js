//const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.mole')]
const scoreEl = document.querySelector('#score span')
let score = 0
let timerContainer = document.querySelector(".timer");
let count = timerContainer.textContent;

const sound = new Audio("assets/smash.mp3")

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const mole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('moles')
    img.src = 'assets/mole.png'

    img.addEventListener('click', () => {
        score += 1;
        sound.play()
        scoreEl.textContent = score
        img.src = 'assets/mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            mole.removeChild(img)
            run()
        }, 500)
    })

    mole.appendChild(img)

    timer = setTimeout(() => {
        mole.removeChild(img)
        run()
    }, 1000)
}
run()

//rendring time
let interval;
function renderTimer(){
    if (count>0) {
        count--;
        timerContainer.textContent = count;
    }
    else{
        clearInterval(interval);
    }
}
interval = setInterval(renderTimer,1000);


// function update(){
//     run();
//     renderTimer();
// }

// document.getElementById("start").addEventListener("click",function (){
//     if(!interval){
//         update();
//     }
// })
///---------------////////////------/////////




// window.addEventListener('mousemove', e => {
//     cursor.style.top = e.pageY + 'px'
//     cursor.style.left = e.pageX + 'px'
// })
// window.addEventListener('mousedown', () => {
//     cursor.classList.add('active')
// })
// window.addEventListener('mouseup', () => {
//     cursor.classList.remove('active')
// })