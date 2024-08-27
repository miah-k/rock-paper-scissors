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
  console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt('Enter your hand: ');
    let humanChoiceLower = humanChoice.toLowerCase();
    
    if(humanChoiceLower != 'scissors' && humanChoiceLower!='rock' && humanChoiceLower != 'paper'){
      alert('Please enter a valid hand');
    }
    return humanChoiceLower;
  }

  console.log(getHumanChoice()); 