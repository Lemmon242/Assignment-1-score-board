'use strict'


let numberChange = document.querySelector('.lov')
let numberChange1 = document.querySelector('.one')
let numberChange2 = document.querySelector('.two')
let numberChange3 = document.querySelector('.three')
let reload = document.querySelector('.four')
let numberChange4 = document.querySelector('.lou')
let numberChange5 = document.querySelector('.five')
let numberChange6 = document.querySelector('.six')
let numberChange7 = document.querySelector('.seven')


numberChange1.addEventListener('click', function(){
    numberChange.textContent++
})
numberChange5.addEventListener('click', function(){
    numberChange4.textContent++
})
numberChange2.addEventListener('click', function(){
 let sum2 = +(numberChange.textContent)+2
  numberChange.textContent =sum2
})
numberChange6.addEventListener('click', function(){
   let  sum6 = +(numberChange4.textContent)+2
       numberChange4.textContent =sum6
})
numberChange3.addEventListener('click', function(){
  let sum3 =+  (numberChange.textContent)+3
  numberChange.textContent = sum3
})
numberChange7.addEventListener('click', function(){
    let sum7 =+  (numberChange4.textContent)+3
  numberChange4.textContent = sum7
})




reload.addEventListener('click', ()=>{
    window.location.reload()
})

// function updateScore(team, points) {
//     if (team === 1) {
//         var scoreElement = document.getElementById('team1_score');
//     } else if (team === 2) {
//         var scoreElement = document.getElementById('team2_score');
//     }

//     var currentScore = parseInt(scoreElement.innerText);
//     scoreElement.innerText = currentScore + points;
// }
// let reload = document.querySelector('.steve')
// reload.addEventListener('click', ()=> {
//     window.location.reload()
// })

// function updateScore(team, points) {
//     if (team === 1) {
//         var scoreElement = document.getElementById('team1_score');
//     } else if (team === 2) {
//         var scoreElement = document.getElementById('team2_score');
//     }

//     var currentScore = parseInt(scoreElement.innerText);
//     scoreElement.innerText = currentScore + points;
// }