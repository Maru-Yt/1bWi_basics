let arr = ["Schere", "Stein", "Papier"];
let userInput = prompt("Schere, Stein, Papier?");
let userChoice = arr.indexOf(userInput);
let computerChoice = Math.floor(Math.random() * 3);
console.log("Computer wählt: " + arr[computerChoice]);
if (userChoice === -1) {
  console.log("Ungültige Eingabe!");
} else if (userChoice === computerChoice) {
  console.log("Unentschieden!");
} else if (
  (userChoice === 0 && computerChoice === 1) ||
  (userChoice === 1 && computerChoice === 2) ||
  (userChoice === 2 && computerChoice === 0)
) {
  console.log("Computer gewinnt!");
} else {
  console.log("Spieler gewinnt!");
}
