function getComputerChoice(){
    let pickerValue = Math.floor(Math.random() * 10)%3; 
    let choice;
    if(pickerValue == 0){
      choice = "rock";
    }
    else if(pickerValue == 1){
      choice = "paper";
    }
    else{
      choice = "scissors";
    }
  
    return choice; 
}

function gameOver(humanScore, computerScore){
    const paragraph = document.createElement("p");
    if(humanScore > computerScore){
        paragraph.textContent='\nGame Over : You win!';
    }
    else if(computerScore > humanScore){
       paragraph.textContent='\nGame Over : You lost!';
    }
    else{
        paragraph.textContent='\nGame Over : Tie.';
    }
  
    container.appendChild(paragraph);
}
  
function playGame(){
    let humanScore = 0;
    let computerScore = 0; 
  
    function playRound(humanChoice, computerChoice) {
        console.log(`humanChoice: ${humanChoice}`); 
        console.log(`computerChoice: ${computerChoice}`); 
        if(humanChoice === computerChoice){
            paragraph.textContent= "It's a tie!"; 
        }
        if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                computerScore += 1;
                paragraph.textContent='You lose! Paper beats Rock.';
            }
            else if(computerChoice === 'scissors'){
                humanScore += 1;
                paragraph.textContent='You win! Rock beats Scissors.';
            }
        }
        if(humanChoice === 'paper'){
            if(computerChoice === 'rock'){
                humanScore += 1;
                paragraph.textContent='You win! Paper beats Rock.';
            }
            else if(computerChoice == 'scissors'){
                computerScore += 1;
                paragraph.textContent='You loose! Scissors beats Paper.'; 
            }
        }
        if(humanChoice === 'scissors'){
            if(computerChoice === 'rock'){
                computerScore += 1;
                paragraph.textContent='You loose! Rock beats Scissors.';
            }
            else if(computerChoice === 'paper'){
                humanScore += 1;
                paragraph.textContent='You win! Scissors beats Paper.'; 
            }
        }
        container.appendChild(paragraph);
    }
  
    const buttons = document.querySelector("#buttons"); 
    const container = document.querySelector("#container"); 
    const content = document.createElement("div"); 
    const paragraph = document.createElement("p");
    let isGameOver = false; 

    content.classList.add("content"); 
    buttons.addEventListener("click", function(event) {
        if(isGameOver)return; 
        const computerSelection = getComputerChoice();
        playRound(event.target.id, computerSelection); 
        content.textContent = `Your score: ${humanScore}\n 
        Computer score: ${computerScore}`;
        container.appendChild(content); 
        if(humanScore == 5 || computerScore == 5){
            gameOver(humanScore, computerScore); 
            isGameOver=true; 
        }   
    });
}

playGame();