let homeScoreNum = document.getElementById("home-score-num")
let guestScoreNum = document.getElementById("guest-score-num")
let homeScore = 0
let guestScore = 0

// let scoreBoxHome = document.getElementById("score-box-home")
// let scoreBoxGuest = document.getElementById("score-box-guest")

// function showLeader(){
//     if (homeScore > guestScore){
//         scoreBoxHome.classList.add("score-box-leader");
//         scoreBoxGuest.classList.add("score-box-guest");
//     } else if (guestScore > homeScore) {
//         scoreBoxHome.classList.add("score-box-home");
//         scoreBoxGuest.classList.add("score-box-leader");
//     } else {
//         scoreBoxHome.classList.add("score-box-home");
//         scoreBoxGuest.classList.add("score-box-guest");
//     }
// }


function add(points, team) {
    if (team === 1) {
        homeScore += points
        homeScoreNum.textContent = homeScore
    } else if (team === 2) {
        guestScore += points
        guestScoreNum.textContent = guestScore
    }
    // showLeader()
}

function reset() {
    homeScoreNum.textContent = 0
    guestScoreNum.textContent = 0
    homeScore = 0
    guestScore = 0
}