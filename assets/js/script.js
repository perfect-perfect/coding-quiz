var quizContentEl = document.querySelector("#question-wrapper");

var questions = ["Begin Quiz?", "What is a method?", "What does the createElement() method do?"]

var startGame = function() {
    // creat containers
    var  quizContainerEl = document.createElement("div");

    var questionContainerEl = document.createElement("div");

    questionContainerEl.innerHTML = "<h1> Begin Quiz ?<h3>"

    quizContainerEl.appendChild(questionContainerEl);

    // create button
    var buttonContainerEl = document.createElement("button");
    buttonContainerEl.textContent = "Go!";
    quizContainerEl.appendChild(buttonContainerEl);

    quizContentEl.appendChild(quizContainerEl);


    
}

// code to prompt user if they want to start the quiz
var promptUser = function() {
    var quizContainerEl = document.createElement("div");
    // add className once css created

    // create question
    var questionEl = document.createElement("div");
    // add className once css created

    //quizContainerEl.appendChild(questionEl);
    
    // add question from array
    for (var i = 0; i < questions.length; i++) {
        // attach question from array
        var paragraphItemEl = document.createElement("p")
        paragraphItemEl.innerHTML = "'" + questions[i] + "'";
        questionEl.appendChild(paragraphItemEl);

    
    }

    quizContainerEl.appendChild(questionEl);

    quizContentEl.appendChild(quizContainerEl);
};

startGame();

quizContentEl.addEventListener("click", promptUser)