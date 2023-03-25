function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

var num1 = generateRandomInteger(20);
var num2 = generateRandomInteger(20);
var num3 = generateRandomInteger(20);
var largest = Math.max(num1, num2, num3);

function outputHTML(newElement, idName) {
    document.getElementById(idName).innerHTML = newElement;
}

outputHTML(num1, "apples");
outputHTML(num2, "bananas");
outputHTML(num3, "oranges");

if (largest != num2 && largest != num3) {
    outputHTML("Today's best seller is Apples (" + num1 + ").", "biggest-number");
}
else if (largest != num1 && largest != num3) {
    outputHTML("Today's best seller is Bananas (" + num2 + ").", "biggest-number");
}
else if (largest != num1 && largest != num2) {
    outputHTML("Today's best seller is Oranges (" + num3 + ").", "biggest-number");
}
else if (largest != num3) {
    outputHTML("Today's best seller is Apples & Bananas (" + num1 + ").", "biggest-number");
}
else if (largest != num2) {
    outputHTML("Today's best seller is Apples & Oranges (" + num1 + ").", "biggest-number");
}
else if (largest != num1) {
    outputHTML("Today's best seller is Bananas & Oranges (" + num2 + ").", "biggest-number");
}
else if (largest == num1 && largest == num2 && largest == num3) {
    outputHTML("All are sold equally. (" + num1 + ").", "biggest-number");
}

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var num1th_letter = alphabet.charAt(num1);
outputHTML("The most recent buyer's first name starts with " + num1th_letter.toUpperCase() + " (with 0 as A).", "num1th-letter");

var min = num2 * num3;
function timeConvert(min) {
    var hours = (min / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    document.getElementById("hr-min").innerHTML = "The time it took to sell all fruits until sold out is (" + min + " mins): " + rhours + " hours and " + rminutes + " minutes.";
}

timeConvert(min);

