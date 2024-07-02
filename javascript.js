function getComputerChoice(){
    let choice;
    let rando = Math.random()*3;
    if(rando<=1){
        choice = "rock";
    }else if(rando>=2){
        choice = "scissors";
    }else{
        choice = "paper";
    }
    return choice
}
let varia = getComputerChoice();