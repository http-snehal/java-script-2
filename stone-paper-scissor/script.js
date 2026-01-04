

const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const result = document.getElementById('result');


stone.onclick = function (){
  playGame('stone');
}
paper.onclick = function (){
  playGame('paper');
}
scissor.onclick = function (){
  playGame('scissor');
}

function playGame(userChoice) {
  let randomnumber = Math.random() * 3;
  let computer;

  if(randomnumber>0 && randomnumber<=1){
    computer = 'stone';
  }
  else if(randomnumber>1 && randomnumber<=2){
    computer = 'paper';
  }
  else{
    computer = 'scissor';
  }

  if(userChoice === 'stone' && computer === 'paper'
    || userChoice === 'paper' && computer === 'scissor'
    || userChoice === 'scissor' && computer === 'stone'){
      result.innerText = `Computer choice is ${computer}. You Lose!`;
    
  }

  else if (userChoice === 'stone' && computer === 'scissor' 
    || userChoice === 'paper' && computer === 'stone'
    || userChoice === 'scissor' && computer === 'paper'){
      result.innerText = `Computer choice is ${computer}. You Win!`;
  }

  else { result.innerText = `Computer choice is ${computer}. Match Drawn!`;}

  }
   
