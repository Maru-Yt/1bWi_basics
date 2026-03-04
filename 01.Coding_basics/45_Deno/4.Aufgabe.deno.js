let question = prompt("Geben Sie Ihren Alter ein:");
let age = Number(question);
if (age >=1 && age <=25)
    console.log("Du bist jung");
else if (age >25 && age<=50)
    console.log("Du bist mitttelalt");
else if (age > 50)
    console.log("Du bist alt");