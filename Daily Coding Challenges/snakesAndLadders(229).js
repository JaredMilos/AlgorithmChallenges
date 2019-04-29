function playSnakesAndLadders() {
    let player1 = 0;
    let player2 = 0;
    let turn = 1;
    let currentPlayerString;
    const snakes = {16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78}
    const ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100}

    function rollDice() {
        return Math.floor( Math.random() * 6 ) +1;
    }

    while (player1 != 100 && player2 != 100) {
        if (turn % 2 != 0) {
            currentPlayer = player1;
            currentPlayerString = "Player 1"; 
        } else {
            currentPlayer = player2;
            currentPlayerString = "Player 2"; 
        }

        let roll = rollDice();
        console.log(currentPlayerString + " rolls a " + roll + ".");
        if (turn % 2 != 0) {
            player1 += roll;
            if (player1 > 100) {
                player1 = 100;
            }
            console.log(currentPlayerString + " moves from " + currentPlayer + " to " + player1 + ".");
            if (snakes[player1] != undefined) {
                console.log("Oh no! You've stepped on a snake! You move back from " + player1 + " to " + snakes[player1] + ".")
                player1 = snakes[player1];
            } else if (ladders[player1] != undefined) {
                console.log("Hurray! You've climbed up a ladder! You move from " + player1 + " to " + ladders[player1] + ".")
                player1 = ladders[player1];
            }
        } else {
            player2 += roll;
            if (player2 > 100) {
                player2 = 100;
            }
            console.log(currentPlayerString + " moves from " + currentPlayer + " to " + player2 + ".");
            if (snakes[player2] != undefined) {
                console.log("Oh no! You've stepped on a snake! You move back from " + player2 + " to " + snakes[player2] + ".")
                player2 = snakes[player2];
            } else if (ladders[player2] != undefined) {
                console.log("Hurray! You've climbed up a ladder! You move from " + player2 + " to " + ladders[player2] + ".")
                player2 = ladders[player2];
            }
        }

        turn++;
    }
    if (player1 == 100) {
        console.log("Player 1 wins in " + turn + " turns!");
    } else {
        console.log("Player 2 wins in " + turn + " turns!");
    }
};

playSnakesAndLadders();