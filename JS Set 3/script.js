var timer = 6;
var score = 0;
var hitrn = 0

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i < 150; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector('#pbtm').innerHTML = `<h1>Game Finish </h1>`
    }
  }, 1000);
}

document.querySelector('#pbtm').addEventListener('click', function(ddd){
    // alert('it is working')
    var clickedNum = Number(ddd.target.textContent)
    if (clickedNum === hitrn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})


runTimer();

makeBubble();
getNewHit();
increaseScore();
