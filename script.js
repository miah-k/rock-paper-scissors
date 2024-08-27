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

function getHumanChoice(){
    let humanChoice = prompt('Enter your hand: ');
    let humanChoiceLower = humanChoice.toLowerCase();
    
    if(humanChoiceLower != 'scissors' && humanChoiceLower!='rock' && humanChoiceLower != 'paper'){
      alert('Please enter a valid hand');
    }
    return humanChoiceLower;
  }

  let humanScore = 0;
  let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    console.log(`humanChoice: ${humanChoice}`); 
    console.log(`computerChoice: ${computerChoice}`); 

    if(humanChoice === computerChoice){
      console.log("It's a tie!"); 
    }
    if(humanChoice === 'rock'){
      if(computerChoice === 'paper'){
        computerScore += 1;
        console.log('You lose! Paper beats Rock.');
      }
      else if(computerChoice === 'scissors'){
        humanScore += 1;
        console.log('You win! Rock beats Scissors.');
      }
    }
    if(humanChoice === 'paper'){
      if(computerChoice === 'rock'){
        humanScore += 1;
        console.log('You win! Paper beats Rock.');
      }
      else if(computerChoice == 'scissors'){
        computerScore += 1;
        console.log('You loose! Scissors beats Paper.'); 
      }
    }
    if(humanChoice === 'scissors'){
      if(computerChoice === 'rock'){
        computerScore += 1;
        console.log('You loose! Rock beats Scissors.');
      }
      else if(computerChoice === 'paper'){
        humanScore += 1;
        console.log('You win! Scissors beats Paper.'); 
      }
    }
  }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
