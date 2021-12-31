var quizContentEl = document.querySelector("#question-wrapper");
var questionCounter = 0;
var playerScore = 100;
var timerP = document.getElementById("timer");
var questions = [
    {question: "What does HTML stand for?",
    choices: ["Honda Toyota Minor League","How To Make Language","Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language"},

    {question: "If we wanted to use jQuery to create an element to the DOM, What method do we use?",
    choices: ["createElement()", "getAttribute()", "setAttribute()"],
    answer: "createElement()"},

    {question: "Using jQuery how does one give a created element a class?",
    choices: [".assignClass", ".className", ".nameClass"],
    answer: ".className"}

]

var timer = function() {
    playerScore--;
    timerP.textContent=playerScore;
    if (playerScore <= 0) {
        // create this function
        
        endGame();
        // clearInterval(timerInterval);
        
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


    if (targetEl.matches(".go")) {
        quizContentEl.innerHTML = "";
        quiz();
    }

};

var quiz = function() {
    var timerInterval = setInterval(timer,'1000')

    // this gets the object from the array
    var currentQuestion = questions[questionCounter];

    // console.log(currentQuestion);
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

var getQuestion = function(){
    quizContentEl.innerHTML = "";
    if (questionCounter < 3) {
        quiz(); 
    }
    else {
        // stop timer
        // get score
        //localStorage.setItem("score", JSON.stringify(playerScore))
        // send score to local storage
        endGame();
        // clearInterval(timerInterval);
    }
    

}

var checkAnswer = function() {
    var answerClick = this.getAttribute("data-answer")
    console.log(answerClick);
    // console.log(answer);
    if (answerClick!==questions[questionCounter].answer) {
        playerScore = playerScore - 20;
        alert("Wrong! You have been deducted 20 seconds")

    }
    
    questionCounter++;
    getQuestion();
}

var endGame = function() {
    alert("The game has ended")


    var highScore = localStorage.getItem("highscore");

    if (highScore === null) {
        highScore = 0;
    }

    if (playerScore <= 0) {
        alert("Game Over! You have run out of time!")
    }

    // if the player has more money than the highscore, the player has a new high score!
    if(playerScore > highScore) {
        var playerName = prompt("You have beaten the High Score! Enter intials to save High Score!");

        // possibly insert if variable incase person leaves field blank
        localStorage.setItem("highscore", playerScore);
        localStorage.setItem("name", playerName);

        alert(playerName + " now has the High Score of " + playerScore);
    }
    else {
        alert("Your score of " + playerScore + " did not beat the high score of " + highScore);
    }
}

preGame();

quizContentEl.addEventListener("click", promptUser)