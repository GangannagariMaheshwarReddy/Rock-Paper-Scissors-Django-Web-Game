let userWins = 0;
let computerWins = 0;

function getCSRF() {
    return document.getElementById("csrf").value;
}

function sendChoice(choice) {
    fetch("/play/", {
        method: "POST",
        headers: {
            "X-CSRFToken": getCSRF()
        },
        body: new URLSearchParams({
            "choice": choice
        })
    })
    .then(res => res.json())
    .then(data => {
        let msg = `Computer chose: ${data.computer}. `;

        if (data.result === "win") {
            userWins++;
            msg += "You won!";
        } else if (data.result === "lose") {
            computerWins++;
            msg += "You lost!";
        } else {
            msg += "It's a tie!";
        }

        document.getElementById("result").innerText = msg;
        document.getElementById("score").innerText =
            `Your Wins: ${userWins} | Computer Wins: ${computerWins}`;
    });
}
