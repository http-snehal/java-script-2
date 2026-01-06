const bat = document.getElementById('bat');
const ball = document.getElementById('ball');
const stumps = document.getElementById('stump');
const result = document.getElementById('result');
const reset = document.getElementById('reset');





bat.onclick = function() { playGame('bat'); };
ball.onclick = function() { playGame('ball'); };
stumps.onclick = function() { playGame('stumps'); };

let score = {
    win : 0,
    loss : 0,
    draw : 0
}

reset.onclick = function() {
    score.win = 0;
    score.loss = 0;
    score.draw = 0;
    result.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Draws: ${score.draw}`;
}

function playGame(userChoice) {
    
    let randomNumber = Math.random() * 3;
    let computer;
    
    if (randomNumber <= 1) {
        computer = 'bat';
    } else if (randomNumber <= 2) {
        computer = 'ball';
    } else {
        computer = 'stumps';
    }

   
    if (userChoice === computer) {
        score.draw++;
        alert(`Computer chose ${computer}. Match Drawn!`);
    } else if (
        (userChoice === 'bat' && computer === 'ball') ||
        (userChoice === 'ball' && computer === 'stumps') ||
        (userChoice === 'stumps' && computer === 'bat')
    ) {
        score.win++;
        alert(`Computer chose ${computer}. You Win!`);
    } else {
        score.loss++;
        alert(`Computer chose ${computer}. You Lose!`);
    }


    result.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Draws: ${score.draw}`;
}




