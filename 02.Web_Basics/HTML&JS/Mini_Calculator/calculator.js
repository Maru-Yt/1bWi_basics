document.getElementById("button").addEventListener("click", function() {
const value1 = document.getElementById("value1").value;
const value2 = document.getElementById("value2").value;

if (isNaN(value1) || isNaN(value2)) {
  alert("Please enter valid numbers.");
} else {
  const sum = parseFloat(value1) + parseFloat(value2);
  alert("Sum: " + sum);
}