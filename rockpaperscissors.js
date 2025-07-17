let score = JSON.parse(localStorage.getItem('score')) || { 
wins:0,
losses:0,
ties:0
 };

  updateScore();

document.querySelector('.rock-btn').addEventListener('click',()=>{
  displayResult('rock');
});

document.querySelector('.paper-btn').addEventListener('click',()=>{
  displayResult('paper');
});

document.querySelector('.scissors-btn').addEventListener('click',()=>{
  displayResult('scissors');
});

document.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
  displayResult('rock');
  }
  if(event.key === 'p'){
  displayResult('paper');
  }
   if(event.key === 's'){
  displayResult('scissors');
  }
    if(event.key === 'Escape'){
  resetScore();
  }
   if(event.key === 'a'){
  autoPlay();
  }
   if(event.key === 'y'){
  autoPlay();
  }
   if(event.key === 'n'){
  autoPlay();
  }
});

 document.querySelector('.reset-btn').addEventListener('click', ()=>{
resetScore();
  });

   document.querySelector('.auto-play-btn')
     .addEventListener('click', ()=>{
     autoPlay();
  });


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
 score.wins++;
  } else if(result === 'You lose!'){
    score.losses++;
  } else if(result === 'Tie'){
    score.ties++;
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
      

  function resetScore(){
    document.querySelector('.confirmation').innerHTML = ` 
    <p class="confirmation-question">Do you want to reset the score?</p>
    <button class="confirmation-yes">Yes</button>
    <button class="confirmation-no">No</button>
  `;

  document.querySelector('.confirmation-yes').addEventListener('click',()=>{
  score.wins = 0;
     score.losses= 0;
     score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    document.querySelector('.confirmation').innerHTML = '';
  });

   document.querySelector('.confirmation-no').addEventListener('click',()=>{
    document.querySelector('.confirmation').innerHTML = '';
   });
  }
 
  let autoPlaying = false;
  let intervalId;

  function autoPlay(){
    if(!autoPlaying){
         intervalId = setInterval(()=>{
        let  playerMove = pickComputerMove();
        displayResult(playerMove);
        document.querySelector('.auto-play-btn').innerHTML = 'Stop playing';
    },1000);
       autoPlaying = true; 
    } else{
      document.querySelector('.auto-play-btn').innerHTML = 'Auto play';
       clearInterval(intervalId);
       autoPlaying = false; 
    }
  }