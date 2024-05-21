document.addEventListener("DOMContentLoaded", function() {
  
  let magic8Ball = {};
  magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
  
  document.getElementById("answer").style.display = "none";
  
  magic8Ball.askQuestion = function(question) {
    let ballImage = document.getElementById("8ball");
    ballImage.classList.add("shake-animation");
    
    ballImage.setAttribute("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    
    let answerElement = document.getElementById("answer");
    answerElement.style.display = "block";
    
    let randomNumber = Math.random();
    let randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    let randomIndex = Math.floor(randomNumberForListOfAnswers);
    let answer = this.listOfAnswers[randomIndex];
    
    answerElement.textContent = answer;
    
    console.log(question);
    console.log(answer);
  };
  
  let onClick = function() {
    let answerElement = document.getElementById("answer");
    answerElement.style.display = "none";
    
    var ballImage = document.getElementById("8ball");
    ballImage.setAttribute("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    
    setTimeout(function() {
      var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion(question);
    }, 500);
  };
  
  document.getElementById("questionButton").addEventListener("click", onClick);
});
