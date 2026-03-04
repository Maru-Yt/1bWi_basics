let a = parseInt(prompt("Gib die erste Zahl (a) ein:"));
let b = parseInt(prompt("Gib die zweite Zahl (b) ein:"));

let sum = 0;


if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}


for (let i = a; i <= b; i++) {
    sum += i;
}

console.log("Summe der Zahlen zwischen " + a + " und " + b + " ist: " + sum);
