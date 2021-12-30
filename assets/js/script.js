var quizContentEl = document.querySelector("#question-wrapper");
var questionCounter = 0;
var playerScore = 100;
var timerP = document.getElementById("timer");
var questions = [
    {question: "What does HTML stand for?",
    choices: ["Honda Toyota Minor League","How To Make Language","Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language"
}

]

var timer = function() {
    playerScore--;
    timerP.textContent=playerScore;
    if (playerScore <= 0) {
        // create this function
        quizEnd();
    }

}
var preGame = function() {
    // creat containers
    var  quizContainerEl = document.createElement("div")
    quizContainerEl.className = "quiz-container"

    var questionContainerEl = document.createElement("div");

    questionContainerEl.innerHTML = "<h1> Begin Quiz ?<h3>"

    quizContainerEl.appendChild(questionContainerEl);

    // create button
    var buttonEl = document.createElement("button");
    buttonEl.className = "go"
    buttonEl.textContent = "Go!";
    quizContainerEl.appendChild(buttonEl);
    buttonEl.setAttribute("data-answer", "go")
    quizContentEl.appendChild(quizContainerEl);


    
}


// code to prompt user if they want to start the quiz
var promptUser = function(event) {

    var targetEl = event.target;


    //var buttonId = event.target.getAttribute("answer");


    if (targetEl.matches(".go")) {
        quizContentEl.innerHTML = "";
        quiz();
    }

    //var quizContainerEl = document.createElement("div");
    // add className once css created

    // create question
    //var questionEl = document.createElement("div");
    // add className once css created

    //quizContainerEl.appendChild(questionEl);
    
    // add question from array
    //for (var i = 0; i < questions.length; i++) {
        // attach question from array
        //var paragraphItemEl = document.createElement("p")
        //paragraphItemEl.innerHTML = "'" + questions[i] + "'";
        //questionEl.appendChild(paragraphItemEl);

    
    //}

    //quizContainerEl.appendChild(questionEl);

    //quizContentEl.appendChild(quizContainerEl);
};

var quiz = function() {
    timerInterval = setInterval(timer,'1000')


    var currentQuestion = questions[questionCounter];

    console.log(currentQuestion);
    var questionEl = document.createElement("div");
    questionEl.textContent = currentQuestion.question;
    quizContentEl.appendChild(questionEl);

    currentQuestion.choices.forEach(function(choice){
        var optionEl = document.createElement("button");
        optionEl.textContent = choice;
        optionEl.setAttribute("data-answer", choice)
        optionEl.onclick = checkAnswer;
        quizContentEl.appendChild(optionEl);

    })
}

var checkAnswer = function() {
    var answerClick = this.getAttribute("data-answer")
    console.log(answer);
    if (answerClick!==questions[questionCounter].answer) {

    }
    questionCounter++;
    getQuestion
}

preGame();

quizContentEl.addEventListener("click", promptUser)