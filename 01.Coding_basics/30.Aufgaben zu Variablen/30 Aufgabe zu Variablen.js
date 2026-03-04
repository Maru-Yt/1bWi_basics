let banana = 'Banane';
let apple = 'Apple';
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let appleweight = 0.34;
let bananaweight = 0.22;

let appleperkilo = 1 / appleweight;
let bananaperkilo = 1 / bananaweight;

let appleprice = applePricePerKilo * appleweight;
let bananaprice = bananaPricePerKilo * bananaweight;

let price8Apples = 8 * appleprice;
let price17Bananas = 17 * bananaprice;

let price1TonneApples = 1000 * applePricePerKilo;
let price1TonneBananas = 1000 * bananaPricePerKilo;

console.log(`Anzahl ${banana}s pro Kilo: ${bananaperkilo.toFixed(2)}`);
console.log(`Anzahl ${apple}s pro Kilo: ${appleperkilo.toFixed(2)}`);

console.log(`Preis pro ${banana}: ${bananaprice.toFixed(2)} €`);
console.log(`Preis pro ${apple}: ${appleprice.toFixed(2)} €`);

console.log(`Preis von 8 Äpfeln: ${price8Apples.toFixed(2)} €`);
console.log(`Preis von 17 Bananen: ${price17Bananas.toFixed(2)} €`);

console.log(`Preis von 1 Tonne Äpfel: ${price1TonneApples.toFixed(2)} €`);
console.log(`Preis von 1 Tonne Bananen: ${price1TonneBananas.toFixed(2)} €`);




