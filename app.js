'use strict'
function updateScore(team, points) {
    if (team === 1) {
        var scoreElement = document.getElementById('team1_score');
    } else if (team === 2) {
        var scoreElement = document.getElementById('team2_score');
    }

    var currentScore = parseInt(scoreElement.innerText);
    scoreElement.innerText = currentScore + points;
}

// function updateScore(team, points) {
//     if (team === 1) {
//         var scoreElement = document.getElementById('team1_score');
//     } else if (team === 2) {
//         var scoreElement = document.getElementById('team2_score');
//     }

//     var currentScore = parseInt(scoreElement.innerText);
//     scoreElement.innerText = currentScore + points;
// }