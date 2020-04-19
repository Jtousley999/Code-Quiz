//Sets up, via the DOM, the html elemnts for the opening page to the quiz.
var startButton = document.querySelector("#button");
var emptyItems = document.querySelector("#quizBox");
var timer = document.querySelector(".timer");

//Declares an array with objects containing all questions and answers.  At the end it links to the final score page via an empty object that allows the iteration to reach the 5th index.
var questionArr = [
  {
    question: "What is the capital of Denmark?",
    answerA: "A: Egypt",
    answerB: "B: Tokyo",
    answerC: "C: Copenhagen",
    answerD: "D: Oslo",
  },
  {
    question: "On which continent is the country Guinea located?",
    answerA: "A: Africa",
    answerB: "B: Oceania",
    answerC: "C: Asia",
    answerD: "D: Central America",
  },
  {
    question:
      "Which of the following countries is located on the Balkan Peninsula?",
    answerA: "A: Hungary",
    answerB: "B: Slovenia",
    answerC: "C: Iraq",
    answerD: "D: Kosovo",
  },
  {
    question: "Islamabad is the capital of which country?",
    answerA: "A: Afghanistan",
    answerB: "B: Brazil",
    answerC: "C: Saudi Arabia",
    answerD: "D: Pakistan",
  },
  {
    question: "Name the three countries that border Chile.",
    answerA: "A: Paraguay, Brazil, and Colombia",
    answerB: "B: Argentina, Bolivia, Peru",
    answerC: "C: Argentina, Colombia, and Ecuador",
    answerD: "D: Mexico, Europe, and Madagascar",
  },
  { question: "" },
];
//Declares array of correct answers
var correctAnswers = [
  "C: Copenhagen",
  "A: Africa",
  "D: Kosovo",
  "D: Pakistan",
  "B: Argentina, Bolivia, Peru",
];

//Variable declaration that will set the amount of time available on the clock.
var secondsLeft = 60;
var quizFinish = false;

//Click start button to clear opening page and open first question.
function startQuiz() {
  //empties the existing html elements to make room for questions and answers.
  $("#quizBox").empty();
  //starts the quiz at the "zero" index position for the first question.
  questionDisplay(0);
  //starts the function with the timer
  setTime();
}

//Declare two variables as zero to keep track of users correct and incorrect answers.
var userCorrect = 0;
var userIncorrect = 0;

//Event listener for start quiz button.
startButton.addEventListener("click", startQuiz);

//creates all the html elements and inserts array object items.
function questionDisplay(x) {
  var question = document.createElement("h3");
  question.className = "questionStyle";
  question.textContent = questionArr[x].question;
  emptyItems.appendChild(question);
  var answer1 = document.createElement("button");
  answer1.className = "buttonStyle";
  answer1.textContent = questionArr[x].answerA;
  emptyItems.appendChild(answer1);
  var answer2 = document.createElement("button");
  answer2.className = "buttonStyle";
  answer2.textContent = questionArr[x].answerB;
  emptyItems.appendChild(answer2);
  var answer3 = document.createElement("button");
  answer3.className = "buttonStyle";
  answer3.textContent = questionArr[x].answerC;
  emptyItems.appendChild(answer3);
  var answer4 = document.createElement("button");
  6;
  answer4.className = "buttonStyle";
  answer4.textContent = questionArr[x].answerD;
  emptyItems.appendChild(answer4);

  //Tells the user whether they are correct or incorrect and then displays next question.

  answer1.addEventListener("click", function () {
    if (answer1.textContent === correctAnswers[x]) {
      userCorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var goodJob = document.createElement("h5");
      goodJob.className = "questionStyle";
      goodJob.textContent = "Correct!";
      emptyItems.appendChild(goodJob);
    } else {
      userIncorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var incorrect = document.createElement("h5");
      incorrect.className = "questionStyle";
      incorrect.textContent = "Incorrect!";
      emptyItems.appendChild(incorrect);
      secondsLeft = secondsLeft - 10;
    }
  });
  answer2.addEventListener("click", function () {
    if (answer2.textContent === correctAnswers[x]) {
      userCorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var goodJob = document.createElement("h5");
      goodJob.className = "questionStyle";
      goodJob.textContent = "Correct!";
      emptyItems.appendChild(goodJob);
    } else {
      userIncorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var incorrect = document.createElement("h5");
      incorrect.className = "questionStyle";
      incorrect.textContent = "Incorrect!";
      emptyItems.appendChild(incorrect);
      secondsLeft = secondsLeft - 10;
    }
  });
  answer3.addEventListener("click", function () {
    if (answer3.textContent === correctAnswers[x]) {
      userCorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var goodJob = document.createElement("h5");
      goodJob.className = "questionStyle";
      goodJob.textContent = "Correct!";
      emptyItems.appendChild(goodJob);
    } else {
      userIncorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var incorrect = document.createElement("h5");
      incorrect.className = "questionStyle";
      incorrect.textContent = "Incorrect!";
      emptyItems.appendChild(incorrect);
      secondsLeft = secondsLeft - 10;
    }
  });
  answer4.addEventListener("click", function () {
    if (answer4.textContent === correctAnswers[x]) {
      userCorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var goodJob = document.createElement("h5");
      goodJob.className = "questionStyle";
      goodJob.textContent = "Correct!";
      emptyItems.appendChild(goodJob);
    } else {
      userIncorrect++;
      $("#quizBox").empty();
      questionDisplay(x + 1);
      var incorrect = document.createElement("h5");
      incorrect.className = "questionStyle";
      incorrect.textContent = "Incorrect!";
      emptyItems.appendChild(incorrect);
      secondsLeft = secondsLeft - 10;
    }
  });
  //This displays the final page that shows the users results.
  if (x === 5) {
    $("#quizBox").empty();
    quizFinish = true;
    var finalScore = document.createElement("h1");
    finalScore.textContent = "FINAL SCORE";
    emptyItems.appendChild(finalScore);
    var finalCorrect = document.createElement("h3");
    finalCorrect.textContent = "Total Correct Answers  :  " + userCorrect;
    emptyItems.appendChild(finalCorrect);
    finalCorrect.className = "finalResultsDisplay";
    var finalIncorrect = document.createElement("h3");
    finalIncorrect.textContent = "Total Incorrect Answers  :  " + userIncorrect;
    emptyItems.appendChild(finalIncorrect);
    finalIncorrect.className = "finalResultsDisplay";
    var createForm = document.createElement("form");
    emptyItems.appendChild(createForm);
    var createInput = document.createElement("input");
    createInput.setAttribute("class", "form-control-sm enterInitials");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("placeholder", "Enter initials here!");
    createForm.appendChild(createInput);
    createInput.addEventListener("keypress", function (event) {
      //When the user enters initials and hits enter key, the score gets put into local storage
      if (event.key === "Enter") {
        var userName = this.value + " : " + userCorrect + " Correct Answers";
        localStorage.setItem("Username", userName);
        highScores();
      }
    });
  }
}
//Highscores functions creates the high scores page where the users score is retrieved for the user to see.  Then they can play the game again or clear the score from the page.
function highScores() {
  $("#quizBox").empty();

  function reFresh() {
    window.location.reload();
  }

  var highScores = document.createElement("h1");
  highScores.textContent = "High Scores";
  emptyItems.appendChild(highScores);
  var userScores = document.createElement("p");
  userScores.className = "finalResultsDisplay";
  userScores.textContent = localStorage.getItem("Username");
  userScores.setAttribute("style", "font-weight:bold");
  emptyItems.appendChild(userScores);
  var playAgain = document.createElement("button");
  playAgain.className = "buttonStyle";
  playAgain.textContent = "Play Again";
  emptyItems.appendChild(playAgain);
  var clearScores = document.createElement("button");
  clearScores.className = "buttonStyle";
  clearScores.textContent = "Clear";
  emptyItems.appendChild(clearScores);
  clearScores.addEventListener("click", function () {
    userScores.textContent = "";
  });

  playAgain.addEventListener("click", reFresh);
}

//Function that
function setTime() {
  var timerInterval = setInterval(function () {
    timer.textContent = secondsLeft + " Seconds Remaning";
    secondsLeft--;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      $("#quizBox").empty();
      var finalScore = document.createElement("h1");
      finalScore.textContent = "FINAL SCORE";
      emptyItems.appendChild(finalScore);
      var finalCorrect = document.createElement("h3");
      finalCorrect.textContent = "Total Correct Answers  :  " + userCorrect;
      emptyItems.appendChild(finalCorrect);
      finalCorrect.className = "finalResultsDisplay";
      var finalIncorrect = document.createElement("h3");
      finalIncorrect.textContent =
        "Total Incorrect Answers  :  " + userIncorrect;
      emptyItems.appendChild(finalIncorrect);
      finalIncorrect.className = "finalResultsDisplay";
      var createForm = document.createElement("form");
      emptyItems.appendChild(createForm);
      var createInput = document.createElement("input");
      createInput.setAttribute("class", "form-control-sm enterInitials");
      createInput.setAttribute("type", "text");
      createInput.setAttribute("placeholder", "Enter iniitals here!");
      createForm.appendChild(createInput);
      createInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          var userName = this.value;
          console.log(userName);
        }
      });
      var tryAgain = document.createElement("h1");
      tryAgain.textContent =
        "You ran out of time, enter your initials or refresh and try again!";
      emptyItems.appendChild(tryAgain);
      timer.textContent = "";
    } else if (quizFinish === true) {
      clearInterval(timerInterval);
      timer.textContent = "";
    }
  }, 1000);
}
