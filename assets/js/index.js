// global declarations
// questions
const questions = [
  {
    question1: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<scripting>", "<script>"],
    correctIndex: 3,
  },
  {
    question2: "Which event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onchange", "onmouseover", "onmouseclick"],
    correctIndex: 0,
  },
  {
    question3: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    correctIndex: 2,
  },
  {
    question4: "How do you create a function in JavaScrip",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "createMyFunction()",
    ],
    correctIndex: 1,
  },
  {
    question5:
      "Which element is responsible for introducing an empty line in HTML?",
    options: ["<pre>", "<b>", "<br>", "<a>"],
    correctIndex: 1,
  },
];

const startButton = document.getElementById("start-btn");
const main = document.getElementById("main");
const contentSection = document.getElementById("question-container");

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

// create question list
const questionsList = Object.keys(questions);

// target the HTML elements by id
const startButton = document.getElementById("start-btn");
const questionSection = document.getElementById("quiz-box");

const onLoad = () => {
  // initialise local storage
  const dataLS = localStorage.getItem(key);

  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {};
const startQuiz = () => {
  // remove start section
  removeStartSection();

  // start timer
  startTimer();

  // render timer section
  renderTimerSection();

  // render question section
  renderQuestionSection();
};

const startTimer = () => {
  // declare function to execute every 1 sec
  timeInterval = setInterval(function () {
    // decrement timer value
    timer -= 1;
    const timeValue = document.getElementById("");
    timeValue.textContent = timer;
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    if (timer <= 0) {
      //stop timer
      clearInterval(timer);
      //render game over
      timer = setTimeout(renderGameOver, 500);
    }
    // if true render game over
    // setInterval of 1000ms (1s)
  }, 1000);
};
const validateAnswer = (event) => {
  const target = event.target;
  const resultAnswer = document.getElementById("");
  if (userAnswer) {
    correctIndex += 1;
    renderAlert("Correct", true);
  } else {
    renderAlert("Wrong", false);
    // get answer clicked from user
    // get the correct answer for question
    // compare the 2 answers
    // if incorrect subtract 5 seconds from timerValue
    // if incorrect render error alert with message and status
    // if correct render success alert with message and status
    // set timeout for 500ms and then go to next question
    // if question is last question set quizComplete to true and then render form
    // if question is not last question then increment question index and render next question
  }
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
  if (questionIndex > 0) {
    removeQuestionSection();
    // use HTML as guide and build in JS
    // append section to main
    // add click event listener on #question-section
    const questionSection = document.createElement("section");
    questionSection.setAttribute("class", "question-section");
  }
};

const renderGameOver = () => {
  if (timerValue == 0) {
    clearInterval(timerId);
    removeQuestionSection();
  }
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  const decisionDiv = document.createElement("");
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section
  // start timer
  // render timer section
  // render question section
};

// add event listeners
// add document on load event listener
startButton.addEventListener("click", startQuiz);
// add start button click event listener
startButton.addEventListener("click");
