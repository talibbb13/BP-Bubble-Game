var tym = 60;
var score = 0;
var ranNumHit = 0;

function scoreCount() {
    score += 10;
    document.querySelector("#scoreText").innerHTML = score;
}

function createBubble(){
    var clutter = ""

    for (let i = 1; i < 153; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
        document.querySelector("#pbtm").innerHTML = clutter
    }
}

function tymer() {
    var tymInt = setInterval(function () {
        if (tym > 0) {
            tym--
            document.querySelector("#tymText").innerHTML = tym;
        }
        else {
            clearInterval(tymInt);
            document.querySelector("#pbtm").innerHTML = `
             <div id="goInt">
             <h1>game over 😉</h1>
             <h2>score: ${score} 🎮</h2>
             <a href="">Play again 😀</a>
         </div>
             `
        }
    }, 1000)
}

function hitCount() {
    ranNumHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitText").innerHTML = ranNumHit;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clkNum = Number(dets.target.innerHTML);

    if (clkNum == ranNumHit) {
        scoreCount()
        hitCount()
        createBubble();
    }
})

hitCount()
tymer();
createBubble();

// function start() {
// }

// document.querySelector("#start").addEventListener("click", function() {
//     start()
// });