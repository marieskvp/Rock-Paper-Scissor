let state;
let stateHtml = document.querySelector('.state');
let picked_Moves = document.querySelector('.picked-Moves');
let score_Card =document.querySelector('.score-Card');
const score=JSON.parse (localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};
score_Card.innerHTML = `Wins:${score.win} Loses:${score.lose} Ties:${score.tie}`;

let computerMove=()=>{
    let m= Math.floor(Math.random()*3+1);
    switch(m){
        case 1:return 'rock';break;
        case 2:return 'paper';break;
        case 3:return 'scissor';break;
    }
}

function reset(){
    score.tie=score.lose=score.win=0;
    localStorage.removeItem('score');
    score_Card.innerHTML = `Wins:${score.win} Loses:${score.lose} Ties:${score.tie}`;
    
}

function result(usermove){
    let c=computerMove();
    if(usermove === c){
      score.tie+=1;
      score.win+=0;
      score.lose+=0;
      state='Tie.'
    }
    else if((usermove=='rock' && c== 'scissor') || (usermove=='paper' && c=='rock')||(usermove=='scissor' && c=='paper')){
        score.win+=1;
        score.tie+=0;
        score.lose+=0;
        state='You won.'
    }
    else if((usermove=='rock' && c== 'paper') || (usermove=='paper' && c=='scissor')||(usermove=='scissor' && c=='rock')){
        score.lose+=1;
        score.win+=0;
        score.tie+=0;
        state='You lost.'
    }
    stateHtml.innerHTML = `${state}` ;
    picked_Moves.innerHTML =`You <img src="images/${usermove}-emoji.png">   Computer <img src="images/${c}-emoji.png">`
    score_Card.innerHTML = `Wins:${score.win} Loses:${score.lose} Ties:${score.tie}`;
    localStorage.setItem('score',JSON.stringify(score));
}

