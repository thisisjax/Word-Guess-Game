

//List of words to guess
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Number of guesses
var guessesSoFar = [];
//Number of guesses left
var guessesLeft = 0;
//Number of wins
var wins = 0;
//Number of losses
var losses = 0;

//Function run whenever the user presses a key
document.onkeyup = function (event) {
     //Random generater
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //determines which key was pressed
    var userGuess = event.key;
   

   

    //Only run the following code if the user presses
    if (userGuess === computerGuess) {
        wins++;
        console.log("You Win! = " + wins);
    }
    else if (userGuess != losses) {
        losses++;
        console.log("You Lose! = " + computerGuess);
    }
    
    

    //to hold our new html
        var html =
            "<h3>Try to guess the lettr im thinking of!</h3>" +
            "<p><br>Guesses So Far: " + guessesSoFar + "</p>" +
            "<p><br>Guesses Left: " + guessesLeft + "</p>" +
            "<p><br>Wins: " + wins + "</p>" +
            "<p><br>Losses: " + losses + "</p>";

    document.querySelector("#game").innerHTML = html;
};

