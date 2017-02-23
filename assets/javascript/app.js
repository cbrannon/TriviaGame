$(document).ready(function() {
    var trivia = {

        questions: {
            starks: {
                question: "Who dead?",
                correctAnswer: "The Starks",
                options: ["The Lannisters", "The Lannisters",
                    "The Lannisters", "The Starks"
                ],
                answerImage: "#"
            },
            lannisters: {
                question: "Who wins?",
                correctAnswer: "The Lannisters",
                options: ["The Starks", "The Starks",
                    "The Lannisters", "The Starks"
                ],
                answerImage: "#"
            }
        },

        correctAnswers: 0,
        incorrectAnswers: 0,
        unanswered: 0,
        currentQuestion: null,

        setupGame: function() {
            this.setQuestion();
        },

        // Choose a random question from quetions object and set our variable.
        setQuestion: function() {
            var objKeys = Object.keys(this.questions);
            this.currentQuestion = this.questions[objKeys[Math.floor(Math.random() * objKeys.length)]];
            console.log(this.currentQuestion);
            this.setPlayArea();
            this.timer();
        },

        restartGame: function() {
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            this.unanswered = 0;
            this.currentQuestion = null;
            for (var optionIndex = 1; optionIndex <= currentQuestion.options.length; optionIndex++) {
                $("#option-" + optionIndex).text("");
            }
        },

        setPlayArea: function() {
            var questionArray = this.currentQuestion.options;
            // Shuffle answer options.
            shuffle(questionArray);
            // Set answer options to DOM.
            for (var optionIndex = 0; optionIndex < questionArray.length; optionIndex++) {
                $("#option-" + (optionIndex + 1)).text(questionArray[optionIndex]);
            }
            // Set question to DOM.
            $("#question").text(this.currentQuestion.question);

            $("#timeLeft").text("5");

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

        getAnswer: function(condition) {
            if (condition == "Out of Time") {
                this.unanswered++;
                // $("#timer").text(condition);
                console.log("OOT");
            } else if (condition == this.currentQuestion.correctAnswer) {
                this.correctAnswers++;
                // $("#timer").text("Correct!");
                console.log("Correct answers updated to: " + this.correctAnswers);
            } else {
                this.incorrectAnswers++;
                // $("#timer").text("Wrong!");
                console.log("Incorrect answers updated to: " + this.incorrectAnswers);
            }

            this.setQuestion();
        },

        timer: function() {
            var count = 5;
            var counter = setInterval(start, 1000);
            var self = this;


            function start() {
                count = count - 1;
                $("#timeLeft").text(count);
                if (count <= 0) {
                    clearInterval(counter);
                    self.getAnswer("Out of Time");
                    //counter ended, do something here
                    return;
                }
                //Do code for showing the number of seconds here
            }
        }
    }

    trivia.setupGame();

    $(".option").on("click", function() {
        var answer = $(this).text();
        console.log(answer);
        trivia.getAnswer(answer);
    });

});
