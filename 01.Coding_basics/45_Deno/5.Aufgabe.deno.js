let question= prompt("was ist die Temperatur heute?");
let temp= Number (question);

if (temp <= 0) {
    console.log("Drinnen bleiben");
} else if (temp >0 && temp <=20) {
    console.log("Warm anziehen ");
} else if (temp >20 && temp <=35) {
    console.log("baden gehen");
} else if (temp >35)      {  
    console.log("In die Kühlbox gehen");
}
console.log("Fertig");