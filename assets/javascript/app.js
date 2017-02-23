$(document).ready(function() {
    var trivia = {

        questions: {
            starks: {
                question: "Who dead?",
                correctAnswer: "The Starks",
                options: ["The Lannisters", "The Lannisters",
                    "The Lannisters", "The Starks"
                ],
                answerImage: "../images/tyrion.jpg"
            },
            lannisters: {
                question: "Who wins?",
                correctAnswer: "The Lannisters",
                options: ["The Starks", "The Starks",
                    "The Lannisters", "The Starks"
                ],
                answerImage: "../images/tyrion.jpg"
            }
        },

        correctAnswers: 0,
        incorrectAnswers: 0,
        unanswered: 0,
        currentQuestion: null,
        answerCorrectness: null,
        counter: null,

        setupGame: function() {
            this.setQuestion();
        },

        // Choose a random question from quetions object and set our variable.
        setQuestion: function() {
            var objKeys = Object.keys(this.questions);
            this.answerCorrectness = null;
            this.currentQuestion = this.questions[objKeys[Math.floor(Math.random() * objKeys.length)]];
            this.setPlayArea();
            this.startTimer();
        },

        restartGame: function() {
            this.correctAnswers = 0,
            this.incorrectAnswers = 0,
            this.unanswered = 0,
            this.currentQuestion = null,
            this.answerCorrectness = null,
            this.counter = null;
            for (var optionIndex = 1; optionIndex <= this.currentQuestion.options.length; optionIndex++) {
                $("#option-" + optionIndex).text("");
            }
        },

        setPlayArea: function() {
            var questionArray = this.currentQuestion.options;
            // Shuffle answer options.
            shuffle(questionArray);
            // Set answer options to DOM.
            for (var optionIndex = 0; optionIndex < questionArray.length; optionIndex++) {
                var optionNumbers = "option-" + (optionIndex + 1);
                var newButton = $("<button></button>");
                newButton.attr("type", "button");
                newButton.addClass("btn btn-default btn-lg btn-block option");
                newButton.attr("id", optionNumbers);
                $("#buttons").append(newButton);
                $("#" + optionNumbers).text(questionArray[optionIndex]);
            }
            // Set question to DOM.
            $("#question").text(this.currentQuestion.question);

            function shuffle(a) {
                var j, x, i;
                for (i = a.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
            }
        },

        getAnswer: function(answer) {
          // console.log(this.answerCorrectness);
            if (answer == "Out of Time") {
              console.log(this.answerCorrectness);
              this.unanswered++;
            } else if (answer == this.currentQuestion.correctAnswer) {
              this.answerCorrectness = "Correct!";
              console.log(this.answerCorrectness);
              this.correctAnswers++;
            } else {
              this.answerCorrectness = "Wrong!";
              console.log(this.answerCorrectness);
              this.incorrectAnswers++;
            }

            // this.setQuestion();
            this.stopTimer();
            this.setAnswerPage();
        },

        setAnswerPage: function() {
          var self = this;
          $("#question").text(this.answerCorrectness);
          $("#buttons").empty();
          setTimeout(function() { self.setQuestion() }, 5000);
        },

        startTimer: function() {
          var self = this;
          var count = 5;
          $("#timeLeft").text(count);
          this.counter = setInterval(function() {
            count = count - 1;
            $("#timeLeft").text(count);
            if (count <= 0) {
                self.answerCorrectness = "Out of Time";
                self.getAnswer(self.answerCorrectness);
                return;
            }
          }, 1000);
        },

        stopTimer: function() {
          clearInterval(this.counter);
        }
    }

    trivia.setupGame();

    // Delegated event for dynamically created DOM elements.
    $("#buttons").on("click", ".option", function() {
        var answer = $(this).text();
        console.log(answer);
        console.log(trivia.currentQuestion.correctAnswer)
        trivia.getAnswer(answer);
    });

});
