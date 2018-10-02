var instructionsContent = "Three questions, 30 seconds...";
var timer = 0;
var countDown = 5;

var questions = [
    {
        text: "What color is the sky?",
        choices: ["red", "yellow", "blue", "green"],
        correctIndex: 2,
    },
    {
        text: "What color is the grass?",
        choices: ["red", "yellow", "blue", "green"],
        correctIndex: 3,
    },    
    {
        text: "What color is the sun?",
        choices: ["red", "yellow", "blue", "green"],
        correctIndex: 1,
    },
];

function showQuestions() {
    for (let i = 0; i < questions.length; i++) {
        var textDiv = $("<p>")
        textDiv.text(questions[i].text);
        $(".questionsDisplay").append(textDiv);

        for (let j = 0; j < questions[i].choices.length; j++) {
            var choicesDiv = $("<br><input type='radio' name=" + i + ">" + questions[i].choices[j] + "</input>")
            $(textDiv).append(choicesDiv);
        }
    }
}

function preGame() {
    //Display instructions and start button
    $("#instructions").text(instructionsContent);
    $(".gamePage").hide();
    $(".resultsPage").hide();

    $("#start").click(function() {
        $(this).hide();
        $("#instructions").hide();
        startGame();
    })
}

function startGame() {
    console.log("Game Started")
    $(".gamePage").show();
    startTimer();
    showQuestions();
}

// set and countdown Timer
function startTimer() {
    timer = setInterval(function () {
    countDown--;
    $("#timerBox").text(countDown);
    if (countDown === 0) {
        clearInterval(timer);
        endGame();
    };
    },1000);
}

function endGame() {
    $(".gamePage").hide();
    $(".resultsPage").show();

    $("#restart").click(function(){
        $(".resultsPage").hide();
        $(".startPage").show();
    });
}

//Display Questions (at least 3)
//Answer Options
//Submit button 

//on Submit button click
//end game--
//display correct, incorrect, unanswered
//try again button (cal start game function)

$(document).ready(function(){
    preGame();

});
