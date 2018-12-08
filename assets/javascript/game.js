var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessedLetters = "";


var winsText = document.getElementById("wins") 
var lossesText = document.getElementById("losses");
var guessText = document.getElementById("guess");
var guessLeftText = document.getElementById("guessLeft");
var guessedText = document.getElementById("guessed");

var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z",] 
var used = []


var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
// console.log(computerGuess);

document.onkeyup = function (event) {
     var userGuess = event.key;
     used.push(userGuess);
    if (computerGuesses.indexOf(userGuess) >= 0) {
        // if used.push(userGuess);
        if (guessLeft != 1) {
        guessLeft -= 1;
        guessLeftText.textContent = ("Guess Left:" + guessLeft);
        guessedText.textContent = ("Guessed Letters:" + used);
        guessedLetters.textContent = ("");
        var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
        // console.log(computerGuess);  



       
        if (computerGuess === userGuess) {
            wins++;
            winsText.textContent = ("Wins: " + wins);
            guessLeftText.textContent = ("Guess Left: " + 9);
            guessLeft.textContent = ("Guess Left: " + 9);
            guessedText.textContent = ("Guessed Letters: ");
            

        } 
        }   
        else {
            losses++;
            lossesText.textContent = ("Losses: " + losses);
            guessLeftText.textContent = ("Guess Left: " + 9);
            guessLeft.textContent = ("Guess Left: " + 9);
            used = [];
            guessLeft = 9;
            guessedText.textContent = ("Guessed Letters: ");
            computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
            console.log(computerGuess);
            



        }
        }





    
}

