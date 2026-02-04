let max = parseInt(prompt("Wähle die Schwierigkeit (z.B. 1-1000):"));
let zahl = Math.floor(Math.random() * max) + 1;
let versuche = 0;

while (versuche < 10) {
  let tipp = parseInt(prompt("Errate die Zahl (1–" + max + ")"));
  versuche++;

  if (tipp === zahl) {
    alert("Genau richtig! Versuche: " + versuche);
    break;
  } else if (tipp < zahl) {
    alert("Zu niedrig");
  } else {
    alert("Zu hoch");
  }
}

if (versuche === 10) alert("Verloren! Die Zahl war: " + zahl);
