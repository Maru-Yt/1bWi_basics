let sum = 0;

for (let i = 1; i <= 50; i++) {
    let rest = i % 2;

    if (rest !== 0) {
        sum += i;
    }
}

console.log(sum);

