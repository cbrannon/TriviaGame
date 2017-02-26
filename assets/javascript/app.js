$(document).ready(function() {
    var trivia = {

        questions: [{
                question: "Whose house sigil is a golden lion?",
                correctAnswer: "Lannisters",
                options: ["Lannisters", "Tully",
                    "Martell", "Targaryen"
                ],
                answerImage: "assets/images/tyrion.gif"
            },
            {
                question: "Whose house sigil is a three-headed dragon?",
                correctAnswer: "Targaryen",
                options: ["Targaryen", "Tully",
                    "Martell", "Lannisters"
                ],
                answerImage: "assets/images/dragons.gif"
            },
            {
                question: "Whose house sigil is a stag?",
                correctAnswer: "Baratheon",
                options: ["Baratheon", "Forrester",
                    "Martell", "Greyjoy"
                ],
                answerImage: "assets/images/baratheon.gif"
            },
            {
                question: "Whose house sigil is a direwolf?",
                correctAnswer: "Stark",
                options: ["Stark", "Lovejoy",
                    "Tyrell", "Bolton"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What is the name of Jon Snow's direwolf?",
                correctAnswer: "Ghost",
                options: ["Ghost", "Grey Wind",
                    "Graham", "Gargamel"
                ],
                answerImage: "assets/images/ghost.gif"
            },
            {
                question: "What is the name of the youngest Stark child?",
                correctAnswer: "Rickon",
                options: ["Rickon", "Ramsay",
                    "Eddard", "Brandon"
                ],
                answerImage: "assets/images/rickon.gif"
            },
            {
                question: "Who said, 'Go drink until it feels like you did the right thing'?",
                correctAnswer: "Bronn",
                options: ["Bronn", "Tyrion",
                    "Lady Arryn", "Kelis"
                ],
                answerImage: "assets/images/bronn.gif"
            },
            {
                question: "Why was Samwell Tarly sent to the Wall?",
                correctAnswer: "His father didn't want him.",
                options: ["His father didn't want him.", "His mother didn't want him.",
                    "He committed treason.", "He sought glory."
                ],
                answerImage: "assets/images/sam.gif"
            },
            {
                question: "Who is the Red Viper?",
                correctAnswer: "Oberyn Martell",
                options: ["Oberyn Martell", "Doran Martell",
                    "Nymeria Sand", "Lady Arryn"
                ],
                answerImage: "assets/images/oberyn.gif"
            },
            {
                question: "What is the name of Rickon's direwolf?",
                correctAnswer: "Shaggydog",
                options: ["Shaggydog", "Wolf",
                    "Summer", "Grey Wind"
                ],
                answerImage: "assets/images/shaggydog.gif"
            },
            {
                question: "What does Khal Drogo call ships?",
                correctAnswer: "Wooden Horses",
                options: ["Leaky Tents", "Moving Cities",
                    "Wooden Horses", "Evil Magic"
                ],
                answerImage: "assets/images/drogo.gif"
            },
            {
                question: "What can definitely kill a White Walker?",
                correctAnswer: "Dragonglass",
                options: ["Dragonglass", "Iron",
                    "Sunlight", "Dragon Fire"
                ],
                answerImage: "assets/images/whitewalker.gif"
            },
            {
                question: "Who is known as the Young Wolf?",
                correctAnswer: "Rob Stark",
                options: ["Jon Snow", "Rob Stark",
                    "Bran Stark", "Ned Stark"
                ],
                answerImage: "assets/images/rob.gif"
            },
            {
                question: "How old was Theon Greyjoy when he was taken as a ward?",
                correctAnswer: "Ten",
                options: ["Seven", "Ten",
                    "Nine", "Eight"
                ],
                answerImage: "assets/images/theon.gif"
            },
            {
                question: "Who has Brienne sworn her loyalty to?",
                correctAnswer: "Catelyn Stark",
                options: ["Catelyn Stark", "House Stark",
                    "Stannis Baratheon", "House Baratheon"
                ],
                answerImage: "assets/images/brienne.gif"
            },
            {
                question: "What is the name of Ned Stark's sword?",
                correctAnswer: "Ice",
                options: ["Ice", "Winter",
                    "Wolf's Tooth", "Longclaw"
                ],
                answerImage: "assets/images/ned.gif"
            },
            {
                question: "Who gave Sandor Glegane the scars on his face?",
                correctAnswer: "Gregor Clegane",
                options: ["Gregor Clegane", "Ilyn Payne",
                    "Joffrey Baratheon", "Robert Baratheon"
                ],
                answerImage: "assets/images/hound.gif"
            },
            {
                question: "Who is NOT on Arya Stark's list?",
                correctAnswer: "Varys",
                options: ["Varys", "Ilyn Payne",
                    "Joffrey Baratheon", "Cersei Lannister"
                ],
                answerImage: "assets/images/arya.gif"
            },
            {
                question: "What is the name of Joffrey Baratheon's Valyrian steel blade?",
                correctAnswer: "Widow's Wail",
                options: ["Widow's Wail", "Dark Sister",
                    "Lion's Tooth", "Hearteater"
                ],
                answerImage: "assets/images/joffrey.gif"
            },
            {
                question: "What is the name of Arya Stark's sword?",
                correctAnswer: "Needle",
                options: ["Needle", "Nymeria",
                    "Lion's Bane", "Icicle"
                ],
                answerImage: "assets/images/needle.gif"
            },
            {
                question: "What is Sansa Stark's favorite treat?",
                correctAnswer: "Lemon Cakes",
                options: ["Lemon Cakes", "Tyroshi Pears",
                    "Lamprey Pie", "Berry Tarts"
                ],
                answerImage: "assets/images/sansa.gif"
            },
            {
                question: "Which is NOT part of Night's Watch vows?",
                correctAnswer: "Kill No Innocent",
                options: ["Win No Glory", "Take No Wife",
                    "Kill No Innocent", "Father No Children"
                ],
                answerImage: "assets/images/wall.gif"
            },
            {
                question: "What do Wildlings call men of the Black Watch?",
                correctAnswer: "Crows",
                options: ["Ravens", "Crows",
                    "Smaugs", "Krulls"
                ],
                answerImage: "assets/images/wildling.gif"
            },
            {
                question: "Who is the Master of Whisperers",
                correctAnswer: "Varys",
                options: ["Varys", "Petyr Baelish",
                    "Tyrion Lannister", "Tywin Lannister"
                ],
                answerImage: "assets/images/varys.gif"
            },
            {
                question: "Who has Petyr Baelish loved since he was a child?",
                correctAnswer: "Catelyn Stark",
                options: ["Catelyn Stark", "Sansa Stark",
                    "Lysa Arryn", "Cersei Lannister"
                ],
                answerImage: "assets/images/littlefinger.gif"
            },
        ],

        correctAnswers: 0,
        incorrectAnswers: 0,
        unanswered: 0,
        currentQuestion: null,
        answerStatus: null,
        counter: null,
        questionIndex: 0,

        startGame: function() {
            this.resetVariables();
            this.shuffle(this.questions);
            this.setQuestion();
        },

        // Shuffle array
        shuffle: function(a) {
            var j, x, i;
            for (i = a.length; i; i--) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        },

        // Choose a random question from quetions object and set our variable.
        setQuestion: function() {
            this.answerStatus = null;
            this.currentQuestion = this.questions[this.questionIndex];
            this.setPlayArea();
            this.startTimer();
        },

        // Setup buttons for answer options and question.
        setPlayArea: function() {
            var questionArray = this.currentQuestion.options;
            // Shuffle answer options.
            this.shuffle(questionArray);
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
        },

        // Evaluate answer.
        getAnswer: function(answer) {
            if (answer == "Out of Time") {
                console.log(this.answerStatus);
                this.unanswered++;
            } else if (answer == this.currentQuestion.correctAnswer) {
                this.answerStatus = "Correct!";
                console.log(this.answerStatus);
                this.correctAnswers++;
            } else {
                this.answerStatus = "Wrong!";
                console.log(this.answerStatus);
                this.incorrectAnswers++;
            }

            this.stopTimer();
            this.setAnswerPage();
        },

        // Set gif area
        setImage: function() {
            $("#image-area").addClass("active-image");
            $("#image-area").attr("src", this.currentQuestion.answerImage);
        },

        // Show answer page
        setAnswerPage: function() {
            var self = this;
            $("#question").text(this.answerStatus);
            $("#buttons").empty();
            this.setImage();

            // If wrong guess, show correct answer
            if (this.answerStatus == "Wrong!") {
                $("#answer").text("The correct answer is " + this.currentQuestion.correctAnswer);
            }

            // After 5 seconds set new question or show results of game.
            setTimeout(function() {
                $("#answer").empty();
                $("#image-area").removeClass("active-image");
                $("#image-area").attr("src", "");
                if (self.questionIndex == self.questions.length - 1) {
                    self.setResults();
                } else {
                    self.questionIndex++;
                    console.log("Question number changed to: " + self.questionIndex);
                    self.setQuestion();
                }
            }, 5000);
        },

        // Start game timer.
        startTimer: function() {
            var self = this;
            var count = 30;
            $("#timer").text("Time Remaining: " + count);
            this.counter = setInterval(function() {
                count = count - 1;
                $("#timer").text("Time Remaining: " + count);
                if (count <= 0) {
                    self.answerStatus = "Out of Time";
                    self.getAnswer(self.answerStatus);
                    return;
                }
            }, 1000);
        },

        // Stop game timer.
        stopTimer: function() {
            clearInterval(this.counter);
        },

        // Show game results.
        setResults: function() {
            var self = this;
            $("#question").empty();
            $("#timer").empty();
            $("#results").append("<h1>Correct: " + this.correctAnswers + "</h1>");
            $("#results").append("<h1>Incorrect: " + this.incorrectAnswers + "</h1>");
            $("#results").append("<h1>Unanswered: " + this.unanswered + "</h1>");

            // Start new game after 5 seconds.
            setTimeout(function() {
                $("#results").empty();
                self.startGame();
            }, 5000);
        },

        // Reset all variables.
        resetVariables: function() {
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            this.unanswered = 0;
            this.currentQuestion = null;
            this.answerStatus = null;
            this.counter = null;
            this.questionIndex = 0;
        }
    }

    $("#start-button").on("click", function() {
        $("#buttons").empty();
        trivia.startGame();
    });

    // Delegated event for dynamically created DOM elements.
    $("#buttons").on("click", ".option", function() {
        var answer = $(this).text();
        console.log(answer);
        console.log(trivia.currentQuestion.correctAnswer)
        trivia.getAnswer(answer);
    });
});
