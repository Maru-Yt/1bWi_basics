let count = parseInt(prompt("Wie viele Zahlen möchtest du eingeben?"));
let sum = 0;

for (let i = 1; i <= count; i++) {
    let number = parseFloat(prompt(`Gib die ${i}. Zahl ein:`));
    sum += number;
}

let average = sum / count;
console.log("Der Durchschnitt ist: " + average);
