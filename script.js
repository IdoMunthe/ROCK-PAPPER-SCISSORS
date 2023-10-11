const computerChoice = document.getElementById('computer-choice')
const yourChoice = document.getElementById('your-choice')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const result = document.getElementById('result')

rock.addEventListener('click', function(e){
    yourChoice.innerText = e.target.id;
    generateComputerChoice();
})

paper.addEventListener('click', function(e){
    yourChoice.innerText = e.target.id;
    generateComputerChoice();
})

scissors.addEventListener('click', function(e){
    yourChoice.innerText = e.target.id;
    generateComputerChoice();
})

const generateComputerChoice = () => {
    const randomNumber = Math.floor((Math.random()) * 3) + 1

    if (randomNumber == 1) computerChoice.innerText = 'rock'
    if (randomNumber == 2) computerChoice.innerText = 'paper'
    if (randomNumber == 3) computerChoice.innerText = 'scissors'
    if(yourChoice.innerText == computerChoice.innerText) result.innerText = 'draw';
    else if(yourChoice.innerText == 'rock') {
        if(computerChoice.innerText == 'paper') result.innerText = 'lose'
        result.innerText = 'win'
    }
    else if(yourChoice.innerText == 'paper') {
        if(computerChoice.innerText == 'scissors') result.innerText = 'lose'
        result.innerText = 'win'
    }
    else if(yourChoice.innerText == 'scissors') {
        if(computerChoice.innerText == 'rock') result.innerText = 'lose'
        result.innerText = 'win'
    }
}

