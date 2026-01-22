for (;;) {
   
    let diceSizeInput = prompt("Which dice do you want to use? (e.g. 6 or 20)");
    let diceSize = Number(diceSizeInput);

    if (isNaN(diceSize) || diceSize <= 0) {
        console.log("Invalid dice size. Game will exit.");
        break;
    }

    let playerPoints = 0;
    let computerPoints = 0;

    for (let round = 1; round <= 5; round++) {
        prompt(`Round ${round} - Press Enter to roll the dice:`);

        let playerRoll = Math.floor(Math.random() * diceSize) + 1;
        console.log("You rolled: " + playerRoll);

        let computerRoll = Math.floor(Math.random() * diceSize) + 1;
        console.log("Computer rolled: " + computerRoll);

        if (playerRoll > computerRoll) {
            console.log("You win this round!");
            playerPoints++;
        } else if (playerRoll < computerRoll) {
            console.log("Computer wins this round!");
            computerPoints++;
        } else {
            console.log("This round is a tie!");
        }

        console.log(`Score so far: You ${playerPoints} - Computer ${computerPoints}`);
        console.log("----------------------------");
    }

    if (playerPoints > computerPoints) {
        console.log(" You win the game!");
    } else if (playerPoints < computerPoints) {
        console.log(" Computer wins the game!");
    } else {
        console.log(" The game ends in a tie!");
    }

    let again = prompt("Play again? (j/n)").trim();
    if (again.toLowerCase() !== "j") {
        console.log("Thanks for playing!");
        break;
    }
}
