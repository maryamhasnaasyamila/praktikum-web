let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");
let computerChoice = document.getElementById("computerChoice");
let options = ["rock", "scissors", "paper"];

rock.addEventListener('click', function(){
    let random = Math.floor(Math.random() *3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption){
            case "rock":
                alert("You draw!");
                break;
            case "scissors":
                alert("You win!");
                break
            default:
                alert("You lost!");
                break;
        }
    }, 300);
})

scissors.addEventListener('click', function(){
    let random = Math.floor(Math.random() *3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption){
            case "scissors":
                alert("You draw!");
                break;
            case "rock":
                alert("You lost!");
                break
            default:
                alert("You win!");
                break;
        }
    }, 300);
})

paper.addEventListener('click', function(){
    let random = Math.floor(Math.random() *3)
    let randomOption = options[random];
    computerChoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption){
            case "paper":
                alert("You draw!");
                break;
            case "scissors":
                alert("You lost!");
                break
            default:
                alert("You win!");
                break;
        } 
    }, 300);
})