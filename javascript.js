var rockButton =document.getElementById("clickRock");
var paperButton = document.getElementById("clickPaper");
var scissorButton =document.getElementById("clickScissor");
var selectRock =document.getElementById("selectRock")
var selectPaper = document.getElementById("selectPaper");
var selectScissor = document.getElementById("selectScissor");
var result = document.getElementById("result")

var wins = document.getElementById("win");
var draws = document.getElementById("draw");
var loss = document.getElementById("loss");

var overlay = document.getElementById("overlay");
var gameResult = document.getElementById("gameResult");
var newRoundBtn = document.getElementById("newRoundBtn");


// rock = 0 , paper = 1, scissors = 2
function getRandomChoice(){
    let choice;
    let rando = Math.random()*3;
    if(rando<=1){
        choice = 0;
    }else if(rando>=2){
        choice = 2;
    }else{
        choice = 1;
    }
    return choice
}

function checkChoice(choice,button){

    

    let selected = document.getElementsByClassName("selected")
    while(selected.length !== 0){
        selected[0].classList.remove("selected");
    }
    button.classList.add("selected")
    let computerChoice = getRandomChoice();
    
    if(computerChoice===0){
        selectRock.classList.add("selected")
    }else if(computerChoice===1){
        selectPaper.classList.add("selected")
    }else{
        selectScissor.classList.add("selected")
    }

    if(choice===(computerChoice+1)%3){
        console.log("Win");
        result.innerHTML="Won Round";
        result.style.color="#1C7C54";
        wins.innerHTML = parseInt(wins.innerHTML)+1;
        roundsPlayed++;

    }else if(choice === computerChoice){
        console.log("Drew Round");
        result.innerHTML="Draw";
        result.style.color="#DCF763";
        draws.innerHTML = parseInt(draws.innerHTML)+1;
        roundsPlayed++;
    }else{
        console.log("Lose");
        result.innerHTML="Lost Round";
        result.style.color="#FF5A5F";
        loss.innerHTML = parseInt(loss.innerHTML)+1;
        roundsPlayed++;
    }
    if(roundsPlayed===5){
        checkResults();
    }
}

function checkResults() {
    let resultText,imageSrc;
    if(parseInt(wins.innerHTML)>parseInt(loss.innerHTML)){
        console.log("Won Game!")
        resultText="You Won!"
    }else if(parseInt(wins.innerHTML)<parseInt(loss.innerHTML)){
        console.log("Lost Game")
        resultText="You Lost"
    }else{
        console.log("Drew Game")
        resultText="Draw!"
    }
    
    gameResult.innerHTML = resultText
    overlay.classList.remove("overlayOut")
    overlay.classList.add("overlayIn")

    
}

function newRound() {
    wins.innerHTML = 0
    draws.innerHTML = 0
    loss.innerHTML = 0
    roundsPlayed = 0
    let selected = document.getElementsByClassName("selected")
    while(selected.length !== 0){
        selected[0].classList.remove("selected");
    }
    result.innerHTML="Pick a choice"
    result.style.color="#F0EDEE"
    overlay.classList.remove("overlayIn")
    overlay.classList.add("overlayOut")
}

let roundsPlayed = 0


rockButton.addEventListener("click", ()=>checkChoice(0,rockButton));
paperButton.addEventListener("click", ()=>checkChoice(1,paperButton));
scissorButton.addEventListener("click", ()=>checkChoice(2,scissorButton));
newRoundBtn.addEventListener("click",()=>newRound())
