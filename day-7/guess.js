let guessNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#btn")
const input = document.querySelector(".guess-text")

const preGuess = document.querySelector(".pre-guess")

const remainGuess = document.querySelector(".remain-guess")
const lowOrHigh = document.querySelector(".lowOrHigh")
const result = document.querySelector(".result")
const para=document.createElement("p")

let pre = []
let numGuess = 1
let playGame = true


if (playGame) {

  submit.addEventListener('click', function (e) { 
    e.preventDefault();
   const guess= parseInt(input.value)
    console.log(guess);
    validateGuess(guess);



  })
}


function validateGuess(guess) {

  if (isNaN(guess)) {
alert('Please enter a valid number');    
  }
  
  else if (guess <= 0 || guess>=101) {
    alert("Please enter a valid guess");
  }
  else {
    pre.push(guess)
    if (numGuess===10) {
      displayGuess(guess)
      displayMessage(`Game over .Random number was ${guessNumber}`)
endGame()

    }
    else {
      displayGuess(guess)
 checkGuess(guess);
    }
  }
  
  

}

function checkGuess(guess) {
  if (guessNumber == guess) {
    console.log(guess);
    displayMessage("you guessed it right")

    endGame()
  }
  else if (guess < guessNumber) {
    displayMessage("Number is too low")
  }
  else if (guess > guessNumber) {
    displayMessage("Number is too High")
  }
  
}
function displayGuess(guess) {
  input.value = '';
  preGuess.innerHTML += `${guess} ,`;
  numGuess++;
  remainGuess.innerHTML =` ${11 - numGuess}   ` ;

}

function displayMessage(message) {
  lowOrHigh.innerHTML=`<h2>${message}</h2>`
}
function endGame() {
  input.value = ''
  input.setAttribute('disabled', '')
  para.classList.add('button')
  para.innerHTML = `<h2 id=newGame>Start new Game </h2>`
  result.appendChild(para)
  playGame = false
  newGame()

}

function newGame() {
  const newGameButton=document.querySelector('#newGame')

  newGameButton.addEventListener('click', function (e) {
  guessNumber=parseInt(Math.random() * 100 + 1)
    pre = []
    numGuess = 1
  remainGuess.innerHTML =` ${11 - numGuess}   ` ;
input.removeAttribute('disabled')
    preGuess.innerHTML = ''
    result.removeChild(p)
    playGame=true
  })

  
}

