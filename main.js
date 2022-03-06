
// const playerSelection = prompt("pick Rock or Paper or Scissors :");
// const computerSelection = computerPlay();
// console.log(computerSelection);
// //console.log(playerSelection.toLowerCase());

 let finalWinner = game();
 console.log(finalWinner);

function computerPlay(){
    //computer pick
    //here generating a random integer blw 1 and 3 (inclusive)
    //by that random integer it returns rock-paper-scissors
    const max = 4,min =1;
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    switch (randomNum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors'
        default:
            return 'failed'
    }
    
}
function playRound(playerSelection, computerSelection){
    //this function is to compare the playerSelection and computerSelection
    if(playerSelection.toLowerCase() === computerSelection){
        return 'it\'s a Tie';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return 'You Win!';
    }
    else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return 'Computer Win!';
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return 'Computer Win!';
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return 'Computer Win!';
    }
}
function game(){
    //main function for 5 rounds of it and to select the winner.
    let countPlayer = 0;
    let countComputer = 0;
    for(let i = 0; i < 5 ; i++){
        //player pick
        const playerSelection = prompt("pick Rock or Paper or Scissors :");
        console.log("Yours pick "+playerSelection);
        const computerSelection = computerPlay();
        console.log("computer pick\'s "+computerSelection);
        let res = playRound(playerSelection, computerSelection);
        console.log(res);
        if(res === 'You Win!'){
            countPlayer += 1;
        }
        else if (res === 'Computer Win!'){
            countComputer += 1;
        }
    }
    if(countPlayer == countComputer){
        return 'Overall 5 Rounds it\'s a Tie';
    }
    else if(countPlayer > countComputer){
        return 'Overall 5 Rounds You Won!';
    }
    else if(countPlayer < countComputer){
        return 'Overall 5 Rounds Computer Won!';
    }
}
