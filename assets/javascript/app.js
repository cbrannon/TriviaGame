$(document).ready(function() {
    var trivia = {
        questions: {

        }

        correctAnswers: 0,
        incorrectAnswers: 0,
        unanswered: 0,
        question: null,

        setupGame: function() {

        }

        setQuestion: function() {
            var objKeys = Object.keys(this.questions);
            this.question = objKeys[Math.floor(Math.random() * objKeys.length)];

            this.setPlayArea();
        }

        restartGame: function() {

        }

        setPlayArea: function() {

        }
    }
});
