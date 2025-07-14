let score = JSON.parse(localStorage.getItem('score')) || { 
wins:0,
losses:0,
ties:0
 };

  updateScore();

  function displayResult(move){
    const compMove = pickComputerMove();
     let result = '';
      if(move === 'rock'){
     if(compMove === 'rock'){
      result = 'Tie';
    } else if(compMove === 'paper'){
      result = 'You lose!';
    } else if (compMove === 'scissors'){
      result = 'You win!';
    }
      

    } else if(move === 'paper'){
      if(compMove === 'rock'){
      result = 'You win!';
    } else if(compMove === 'paper'){
      result = 'Tie';
    } else if (compMove === 'scissors'){
      result = 'You lose!';
    }
  

  } else if(move === 'scissors'){
   if(compMove === 'rock'){
      result = 'You lose!';
    } else if(compMove === 'paper'){
      result = 'You win!';
    } else if (compMove === 'scissors'){
      result = 'Tie';
    }
  }
   
  if(result === 'You win!'){
 score.wins += 1;
  } else if(result === 'You lose!'){
    score.losses += 1;
  } else if(result === 'Tie'){
    score.ties += 1;
  } 
   
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
  <img src="${move}-emoji.png" alt="" width="60px">
  <img src="${compMove}-emoji.png" alt="" width="60px">
  Computer`;
}

function pickComputerMove(){
  let randNumber = Math.random();
    let compMove = '';
    if(randNumber >=0 && randNumber < 1/3){
      compMove = 'rock'
    } else if (randNumber >= 1/3 && randNumber < 2/3){
      compMove = 'paper';
    } else if(randNumber >= 2/3 && randNumber < 1) {
      compMove = 'scissors';
    }
    return compMove;
}

 function updateScore(){
const scoreElement = document.querySelector('.js-score');
 scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses} , ties: ${score.ties}`;
  }