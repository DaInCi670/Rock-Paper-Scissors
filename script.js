//Global Variables
let playerScore=0;
let computerScore=0;
let computerSelection;
let  playerSelection; 
let tieScore=0;

//DOM Selectors
const buttons=document.querySelectorAll('.buttons')
const screen=document.getElementsByClassName('screen')


//Click Events
buttons[0].addEventListener('click',()=>{
    const riri= playRound("rock", computerSelection);
})

buttons[1].addEventListener('click',()=>{
    const riri= playRound("Paper", computerSelection);
})

buttons[2].addEventListener('click',()=>{
    const riri= playRound("scissors", computerSelection);
    
})




  //Computer randomly generates its choice between "Rock", "Paper" and "Scissors"
function getComputerChoice(){
    let randomizer=Math.ceil(Math.random()*3)
    if(randomizer===1){
        return "Rock"
    }
    if (randomizer===2){
        return "Paper"
    }
    if (randomizer===3){
        return "Scissors"
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}




//function to compare and declare the winner of the game
function playRound(playerSelection, computerSelection) {
   computerSelection=getComputerChoice()
   console.log(computerScore,playerScore)

    if (playerSelection.toUpperCase()==="ROCK" && computerSelection.toUpperCase()==="PAPER"){
        computerScore+=1
        screen[0].textContent=`Try Again! Paper beats rock: \nYou_${playerScore} - Computer_${computerScore}`}  
   else if (playerSelection.toUpperCase()==="PAPER" && computerSelection.toUpperCase()==="SCISSORS"){
   computerScore+=1
   screen[0].textContent=`Try Again! Scissors beats Paper: \nYou_${playerScore} - Computer_${computerScore}`} 
   else if (playerSelection.toUpperCase()=== computerSelection.toUpperCase()){
    tieScore+=1
    screen[0].textContent=`Its a tie. Try Again: \nTie_ ${tieScore} You_${playerScore} - Computer_${computerScore}`} 
   else if (playerSelection.toUpperCase()==="SCISSORS" && computerSelection.toUpperCase()==="ROCK"){
   computerScore+=1
   screen[0].textContent=`Try Again! Rock beats Scissors: \nYou_${playerScore} - Computer_${computerScore}`} 
   else{
    playerScore+=1
    screen[0].textContent=`Score! You_${playerScore} - Computer_${computerScore}`

   }
   if (playerScore==5 || computerScore==5){
    disableButtons()
    if (playerScore>computerScore){
        screen[0].textContent=`You Win: \nYou_${playerScore} - Computer_${computerScore}`
    }
    else if (playerScore===computerScore){
        screen[0].textContent=`It's a tie: \nYou_${playerScore} - Computer_${computerScore}`
    }
    else{
        screen[0].textContent=`You Lost: \nYou_${playerScore} - Computer_${computerScore}`
    }
   }

  }



