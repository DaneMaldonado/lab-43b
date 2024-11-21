function CalculateSuit (num: number) {
    if (Math.idiv(num, 13) < 1) {
        return "Spades"
    } else if (Math.idiv(num, 13) < 2) {
        return "Diamonds"
    } else if (Math.idiv(num, 13) < 3) {
        return "Clubs"
    } else {
        return "Hearts"
    }
}
function CalculatePip (num: number) {
    if (num % 13 == 0) {
        return "Ace"
    } else if (num % 13 == 12) {
        return "King"
    } else if (num % 13 == 11) {
        return "Queen"
    } else if (num % 13 == 10) {
        return "Jack"
    } else {
        return num % 13 + 1
    }
}
let myCard = game.askForNumber("Enter a card number.", 2)
game.splash("" + myCard + " = " + CalculatePip(myCard) + " of " + CalculateSuit(myCard))
