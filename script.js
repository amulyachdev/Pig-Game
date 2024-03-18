const totalScore0El = document.querySelector("#total-score0");
const currentScore0El = document.querySelector("#current-score0");
const totalScore1El = document.querySelector("#total-score1");
const currentScore1El = document.querySelector("#current-score1");
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const diceImg = document.querySelector('.dice-img');
const resetBtn = document.querySelector(".reset");
const rollDiceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold");


// starting conditions

let scores, currentScore, playing, activePlayer;
function init(){
     currentScore = 0;
     activePlayer = 0;
     scores = [0,0];
     playing = true;
    totalScore0El.textContent = 0;
    currentScore0El.textContent = 0;
    totalScore1El.textContent = 0;
    currentScore1El.textContent = 0;
    diceImg.classList.add('hidden');
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();


const switchPlayer = function(){
    document.getElementById(`current-score${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0? 1: 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

rollDiceBtn.addEventListener('click', function(){
    if(playing){
        const dice = Math.floor(Math.random() *6) +1;
        console.log(dice);
        diceImg.classList.remove('hidden');
        diceImg.src = `dice-${dice}.png`;
        if (dice !==1) {
        currentScore += dice;
        document.getElementById(`current-score${activePlayer}`).textContent = currentScore;
        } else {
         switchPlayer();
        }
    }
})

holdBtn.addEventListener('click', function(){
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`total-score${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >=50){
            playing = false;
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');

            document.querySelector(`.player-${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer()
        }
    }

})

resetBtn.addEventListener('click', function(){
    init();
})