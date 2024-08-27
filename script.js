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