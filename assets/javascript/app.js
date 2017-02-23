$(document).ready(function() {
    var trivia = {

        questions: {
            starks: {
                question: "Who dead?",
                answer: "The Starks",
                options: ["The Lannisters", "The Lannisters",
                    "The Lannisters", "The Starks"
                ],
                answerImage: "#"
            },


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
        },

        restartGame: function() {
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            this.unanswered = 0;
            this.currentQuestion = null;
        },

        setPlayArea: function() {
            var questionArray = this.currentQuestion.options;
            // Shuffle answer options.
            shuffle(questionArray);
            // Set answer options to DOM.
            for (var optionIndex = 0; optionIndex < questionArray.length; optionIndex++) {
                var questionToSet = questionArray[optionIndex],
                    optionLocation = "#option-" + (optionIndex + 1);
                $(optionLocation).text(questionToSet);
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

        updatePlayArea: function() {

        }
    }

    trivia.setupGame();

});
