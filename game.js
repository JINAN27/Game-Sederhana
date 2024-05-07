let round = 1;
let player1Score = 0;
let player2Score = 0;

function startGame() {
    if (round <= 5) {
        let player1Guess = prompt("Player 1, masukkan tebakan Anda (1-3):");
        let player2Guess = prompt("Player 2, masukkan tebakan Anda (1-3):");

       
        if (player1Guess === null || player1Guess === "") {
            alert("Player 1, masukkan tebakan yang valid!");
            startGame();
            return;
        }
        player1Guess = parseInt(player1Guess);
        if (player1Guess < 1 || player1Guess > 3 || isNaN(player1Guess)) {
            alert("Player 1, masukkan tebakan yang valid!");
            startGame();
            return;
        }

       
        if (player2Guess === null || player2Guess === "") {
            alert("Player 2, masukkan tebakan yang valid!");
            startGame();
            return;
        }
        player2Guess = parseInt(player2Guess);
        if (player2Guess < 1 || player2Guess > 3 || isNaN(player2Guess)) {
            alert("Player 2, masukkan tebakan yang valid!");
            startGame();
            return;
        }

       
        if (player1Guess === player2Guess) {
            alert("Tebakan kedua pemain tidak boleh sama!");
            startGame();
            return;
        }

       
        let roundResult = "";
        if (player1Guess > player2Guess) {
            player1Score++;
            roundResult = "Player 1 menang dengan tebakan " + player1Guess + ". Skor: Player 1 " + player1Score + " - Player 2 " + player2Score;
        } else if (player1Guess < player2Guess) {
            player2Score++;
            roundResult = "Player 2 menang dengan tebakan " + player2Guess + ". Skor: Player 1 " + player1Score + " - Player 2 " + player2Score;
        } else {
            roundResult = "Ronde seri. Skor: Player 1 " + player1Score + " - Player 2 " + player2Score;
        }

        console.log("Ronde " + round + ": " + roundResult);
        alert("Ronde " + round + ": " + roundResult);

        round++;
        setTimeout(startGame, 1000);
    } else {
        if (player1Score > player2Score) {
            alert("Permainan selesai! Player 1 menang dengan skor " + player1Score + " - " + player2Score + ".");
        } else if (player1Score < player2Score) {
            alert("Permainan selesai! Player 2 menang dengan skor " + player2Score + " - " + player1Score + ".");
        } else {
            alert("Permainan selesai! Skor seri " + player1Score + " - " + player2Score + ".");
        }
    }
}

startGame();
