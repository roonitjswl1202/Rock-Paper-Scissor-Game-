let user = 0;
let comp = 0;

const signs = document.querySelectorAll(".sign");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin , userSign, compChoice) => {
    if(userWin){
        user++;
        userScore.innerText = user;
        console.log("Your Win !");
        msg.innerText = `You Win ! , ${userSign} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        comp++;
        compScore.innerText = comp;
        console.log("You lose");
        msg.innerText = `You lose , ${compChoice} beats ${userSign}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userSign) =>{
    console.log("User choice = " ,userSign);
    const compChoice = genComputerChoice();
    console.log("Computer Choice is =" , compChoice);

    if(userSign === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userSign === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userSign === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userSign , compChoice);
    }
    
}

signs.forEach((sign) => {
     sign.addEventListener("click" , () => {
        const userSign = sign.getAttribute("id");
        playGame(userSign);
     });
});