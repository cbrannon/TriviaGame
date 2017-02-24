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
                answerImage: "assets/images/tyrion.gif"
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
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Who is the Red Viper?",
                correctAnswer: "Oberyn Martell",
                options: ["Oberyn Martell", "Doran Martell",
                    "Nymeria Sand", "Lady Arryn"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What is the name of Rickon's direwolf?",
                correctAnswer: "Shaggydog",
                options: ["Shaggydog", "Wolf",
                    "Summer", "Grey Wind"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What does Khal Drogo call ships?",
                correctAnswer: "Wooden Horses",
                options: ["Leaky Tents", "Moving Cities",
                    "Wooden Horses", "Evil Magic"
                ],
                answerImage: "assets/images/direwolf.gif"
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
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "How old was Theon Greyjoy when he was taken as a ward?",
                correctAnswer: "Ten",
                options: ["Seven", "Ten",
                    "Nine", "Eight"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Who has Brienne sword her loyalty to?",
                correctAnswer: "Catelyn Stark",
                options: ["Catelyn Stark", "House Stark",
                    "Stannis Baratheon", "House Baratheon"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What is the name of Ned Stark's sword?",
                correctAnswer: "Ice",
                options: ["Ice", "Winter",
                    "Wolf's Tooth", "Longclaw"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Who gave Sandor Glegane the scars on his face?",
                correctAnswer: "Gregor Clegane",
                options: ["Gregor Clegane", "Ilyn Payne",
                    "Joffrey Baratheon", "Robert Baratheon"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Who is NOT on Arya Stark's list?",
                correctAnswer: "Varys",
                options: ["Varys", "Ilyn Payne",
                    "Joffrey Baratheon", "Cersei Lannister"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What is the name of Joffrey Baratheon's Valyrian steel blade?",
                correctAnswer: "Widow's Wail",
                options: ["Widow's Wail", "Dark Sister",
                    "Lion's Tooth", "Hearteater"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What is the name of Arya Stark's sword?",
                correctAnswer: "Needle",
                options: ["Needle", "Nymeria",
                    "Lion's Bane", "Icicle"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "What is Sansa Stark's favorite treat?",
                correctAnswer: "Lemon Cakes",
                options: ["Lemon Cakes", "Tyroshi Pears",
                    "Lamprey Pie", "Berry Tarts"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Which is NOT part of Night's Watch vows?",
                correctAnswer: "Kill No Innocent",
                options: ["Win No Glory", "Take No Wife",
                    "Kill No Innocent", "Father No Children"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Which father legitimizes his bastard son?",
                correctAnswer: "Roose Bolton",
                options: ["Roose Bolton", "Ned Stark",
                    "Robert Baratheon", "Oberyn Martell"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Who is the Master of Whisperers",
                correctAnswer: "Varys",
                options: ["Varys", "Petyr Baelish",
                    "Tyrion Lannister", "Tywin Lannister"
                ],
                answerImage: "assets/images/direwolf.gif"
            },
            {
                question: "Who has Petyr Baelish loved since he was a child?",
                correctAnswer: "Catelyn Stark",
                options: ["Catelyn Stark", "Sansa Stark",
                    "Lysa Arryn", "Cersei Lannister"
                ],
                answerImage: "assets/images/direwolf.gif"
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
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            this.unanswered = 0;
            this.currentQuestion = null;
            this.answerStatus = null;
            this.counter = null;
            this.questionIndex = 0;
            this.shuffle(this.questions);
            this.setQuestion();
        },

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

        setImage: function() {
            $("#image-area").attr("src", this.currentQuestion.answerImage);
        },

        setAnswerPage: function() {
            var self = this;
            $("#question").text(this.answerStatus);
            $("#buttons").empty();
            this.setImage();
            setTimeout(function() {
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

        startTimer: function() {
            var self = this;
            var count = 10;
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

        stopTimer: function() {
            clearInterval(this.counter);
        },

        setResults: function() {
            var self = this;
            $("#question").empty();
            $("#timer").empty();
            $("#results").append("<h1>Correct: " + this.correctAnswers + "</h1>");
            $("#results").append("<h1>Incorrect: " + this.incorrectAnswers + "</h1>");
            $("#results").append("<h1>Unanswered: " + this.unanswered + "</h1>");

            setTimeout(function() {
                $("#results").empty();
                self.startGame();
            }, 5000);
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
