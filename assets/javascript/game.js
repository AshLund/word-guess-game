

var words = [
    "bernie brewer", "christian yelich", "miller park", "ryan braun", "roll out the barrell", "craig counsell", "hank", "home run", "racing sausages", "peanuts"
]

document.onkeyup = function (event) {
    var computerWords =words[Math.floor(Math.random() * words.length)];
    var userGuess = event.key;
}





