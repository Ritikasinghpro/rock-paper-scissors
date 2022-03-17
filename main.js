let countPlayer = 0;
let countComputer = 0;
let round = 1;

document.getElementById('rock').onclick = play;
document.getElementById('paper').onclick = play;
document.getElementById('scissors').onclick = play;


function play(){
    
    
    if(countComputer < 5 && countPlayer < 5 ){
    let playerChoice = this.id;
    const computerChoice = computerPlay();
    const screen = document.getElementById('screen');
    screen.textContent = `Round ${round} Computer picked ${computerChoice} : ${playRound(playerChoice, computerChoice)}`;
    //console.log(playerChoice+ " " + computerChoice);
    round++;
    }
    if(countComputer == 5 || countPlayer == 5){
        const div = document.querySelector('.selection-buttons');
        if(countComputer === 5){
            div.innerHTML=  ` Computer Won <button id="btn">Restart</button>`;
            div.setAttribute('style', 'font-family: monospace; font-weight: 700; font-size: 2rem; color:red; display:flex; flex-direction: column;' );
            document.getElementById('btn').onclick = () => location.reload();
        }
        else{
            div.innerHTML=  ` You Won <button id="btn">Restart</button>`;
            div.setAttribute('style', 'font-family: monospace; font-weight: 700; font-size: 2rem; color: green; display:flex; flex-direction: column;' );
            document.getElementById('btn').onclick = () => location.reload();
        }
        
    }
    

}
function playRound(playerSelection, computerSelection){
    //this function is to compare the playerSelection and computerSelection
    const yourScore = document.getElementById('yourScore');
    const computerScore = document.getElementById('computerScore');
    if(playerSelection.toLowerCase() === computerSelection){
        
        return 'it\'s a Tie';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        countPlayer +=1;
        yourScore.textContent =`${countPlayer}`;
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        countPlayer+=1;
        yourScore.textContent =`${countPlayer}`;
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        countPlayer+=1;
        yourScore.textContent =`${countPlayer}`;
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        countComputer+=1;
        computerScore.textContent =`${countComputer}`;
        return 'Computer Win!';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        countComputer+=1;
        computerScore.textContent =`${countComputer}`;
        return 'Computer Win!';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        countComputer+=1;
        computerScore.textContent =`${countComputer}`;
        return 'Computer Win!';
    }
}


function computerPlay(){
    //computer play
    //here generating a random integer blw 1 and 3 (inclusive)
    //by that random integer it returns rock-paper-scissors
    const max = 4,min =1;
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    const cpick = document.querySelector('.cpick');
    cpick.setAttribute('style','font-size: 100px;');
    switch (randomNum) {
        case 1:
            cpick.innerHTML = `<div lass="sticker-1">✊</div>`;
            return 'rock';
        case 2:
            cpick.innerHTML = `<div lass="sticker-1">✋</div>`;
            return 'paper';
        case 3:
            cpick.innerHTML = `<div lass="sticker-1">✌️</div>`;
            return 'scissors';
        
    }
    
}
