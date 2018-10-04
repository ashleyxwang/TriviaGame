var instructionsContent = "Three questions, 30 seconds...";
var timer = 0;
var countDown = 10;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

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

$(document).ready(function () {
    function preGame() {
        //Display instructions and start button
        $("#instructions").text(instructionsContent);
        $("#instructions").show();
        $("#start").show();
        $(".gamePage").hide();
        $(".resultsPage").hide();
    }

    $("#start").click(function () {
        // clearInterval(timer)
        // countDown = 10
        $(this).hide();
        $("#instructions").hide();
        startGame();
    })

    $("#submit").click(function () {
        // clearInterval(timer)
        endGame();
    });

    function startGame() {
        countDown = 10
        $("#timerBox").text(countDown);
        console.log("Game Started", countDown)
        $(".gamePage").show();
        startTimer();
        $(".questionsDisplay").empty();
        showQuestions();
        
    }

    function showQuestions() {
        for (let i = 0; i < questions.length; i++) {
            var textDiv = $("<p>")
            textDiv.text(questions[i].text);
            $(".questionsDisplay").append(textDiv);

            for (let j = 0; j < questions[i].choices.length; j++) {
                var choicesDiv = $("<br><input type='radio'" + " val= " + j + " name=" + i + ">" + questions[i].choices[j] + "</input>")
                $(textDiv).append(choicesDiv);
            }
        }
    };

    // set and countdown Timer
    function startTimer() {
        timer = setInterval(function () {
            countDown--;
            $("#timerBox").text(countDown);
            if (countDown === 0) {
                // clearInterval(timer);
                // clearInterval(countDown);
                endGame();
            };
        }, 1000);
    }

    function endGame() {
        $(".gamePage").hide();
        $(".resultsPage").show();
        clearInterval(timer)
        $("#restart").click(function () {
            // countDown = 10;
            preGame();
            // startGame()
        });
    }

    preGame();


    $("#correct").text("Correct: " + numCorrect);
    $("#incorrect").text("Incorrect: " + numIncorrect);
    $("#unanswered").text("Unanswered: " + numUnanswered);
});
