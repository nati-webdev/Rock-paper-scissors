let score= JSON.parse((localStorage.getItem('score'))) || {
  wins: 0,
  losses: 0,
  ties: 0

};
updatescore();
let isautoplaying = false;
let intervalId;
function autoplay() {
  if(!isautoplaying){
  intervalId = setInterval(() =>{
    const player = computerMove();
  playgame(player);
  }, 3000);
isautoplaying = true;
}else{
    clearInterval(intervalId);
    isautoplaying = false;
}
}
const autoElement = document.querySelector('.js-auto');
   document.querySelector('.js-reset') 
.addEventListener('click', () => {
   document.querySelector('.js-agree')
  .innerHTML = `Are you sure you want to reset the score? 
    <button class="yes-button js-yes">Yes</button>
    <button class="yes-button js-no">No</button>`;
    document.querySelector('.js-yes').addEventListener
    ('click', () => {
    score.wins = 0;
    score.losses =0;
    score.ties =0;
    localStorage.clear(score);
    updatescore();
    document.querySelector('.js-agree').innerHTML = '';
    })
    document.querySelector('.js-no')
    .addEventListener('click', () => {
    document.querySelector('.js-agree').innerHTML = '';
    })
});
    document.querySelector('.js-auto')
    .addEventListener('click', () =>{
      autoplay();
      if(autoElement.innerHTML === 'Stop Play'){
      autoElement.innerHTML = 'Auto Play';
    }else{
      autoElement.innerHTML = 'Stop Play';
    }
    })
    document.querySelector('.js-rock-button')
    .addEventListener('click', ()=>{
    playgame('Rock');
    });
    document.querySelector('.js-paper-button')
    .addEventListener('click', ()=>{
    playgame('Paper');
    });         
    document.querySelector('.js-scissors-button')
    .addEventListener('click', ()=>{
    playgame('Scissors');
    });
    document.body.addEventListener('keydown', (event)=>{
    if(event.key === 'r'){
      playgame('Rock');
    }else if(event.key === 'p'){
      playgame('Paper');
    }else if(event.key === 's'){
      playgame('Scissors')
    }
    });
function playgame(playmove){
let Computermove = computerMove();
let result = '';
    if(playmove === 'Scissors'){
        if (Computermove === 'Rock'){
            result = 'You lose.';
    }else if (Computermove === 'Paper'){
            result = 'You win.';
    }else{
        result = 'Tie.';
      }
    }else if(playmove === 'Paper'){
        if (Computermove === 'Rock'){
            result = 'You win.';
        }else if (Computermove === 'Paper'){
            result = 'Tie.';
    }else{
        result = 'You lose.';
      }
    }else if(playmove === 'Rock'){
        if (Computermove === 'Rock'){
            result = 'Tie.';
        }else if (Computermove === 'Paper'){
            result = 'You lose.';
      }else{
        result = 'You win.';
      }
    }
    if(result === 'You win.'){
      score.wins +=1;
    }else if(result === 'You lose.'){
      score.losses +=1;
    }else{
      score.ties +=1;
    }
  
  document.querySelector('.js-result')
    .innerHTML = result;
  document.querySelector('.js-move')
    .innerHTML = `You
    <img class="scissors" src="image/${playmove}-emoji.png">
    <img class="rock" src="image/${Computermove}-emoji.png">
    Computer`;
  updatescore();
  
  localStorage.setItem('score', JSON.stringify(score));

  }

        
function updatescore(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function computerMove(){
  const Randomnumber = Math.random();
    if (Randomnumber >=0 && Randomnumber < 1/3 ){
      return 'Rock';
    }
    else if(Randomnumber >= 1/3 && Randomnumber < 2/3){
      return 'Paper';
    }else if (Randomnumber >= 2/3 && Randomnumber < 1){
      return 'Scissors';
    }
}