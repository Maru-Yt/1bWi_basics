let feld = [];
for (let i = 0; i < 5; i++) {
  feld[i] = [];
  for (let j = 0; j < 5; j++) {
    feld[i][j] = 0;
  }
}

let bomben = 0;
while (bomben < 3) {
  let x = Math.floor(Math.random() * 5);
  let y = Math.floor(Math.random() * 5);
  if (feld[x][y] !== -1) {
    feld[x][y] = -1;
    bomben++;
  }
}

while (true) {
  let eingabe = prompt("Koordinaten eingeben (0-4 z.B. 2 3)");
  let teile = eingabe.split(" ");
  let zeile = parseInt(teile[0]);
  let spalte = parseInt(teile[1]);

  if (feld[zeile][spalte] === -1) {
    alert("💥 Bombe! Spiel vorbei.");
    break;
  }

  let count = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      let nx = zeile + dx;
      let ny = spalte + dy;
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (feld[nx][ny] === -1) {
          count++;
        }
      }
    }
  }

  alert("Bomben in der Nähe: " + count);
}
