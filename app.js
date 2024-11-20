let correctNumber = Math.floor((Math.random() * 10) + 1);
let chance = 3;
let gif = document.getElementById("gif")

function clac() {

    let number = document.getElementById("getNumber").value;
    let message = document.getElementById("message");
    let feedback = document.getElementById("feedback");
    let gif = document.getElementById("gif");
    //
    if (chance > 0) {
        chance--;
        if (number == correctNumber) {
            message.innerHTML = "You are correct! The correct number was " + correctNumber + ".";

        } else {
            message.innerHTML = "Incorrect! You have " + chance + " chance(s) left.";
            if (correctNumber > number) {
                feedback.innerHTML = "The correct answer is higher.";
            } else {
                feedback.innerHTML = "The correct answer is lower.";
            }

            if (chance == 0) {
                message.innerHTML = "Game Over! The correct number was " + correctNumber + ".";
            }
        }
    }
}


