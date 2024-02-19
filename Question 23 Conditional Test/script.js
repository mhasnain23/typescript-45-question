//Conditional Test
//  Test 1: Check if a number greater than 10?
var number = 20;
console.log("Test 1: Is", number, "greater than 10?");
if (number > 10) {
    console.log("Prediction: Yes, the number is greater than 10.");
}
else {
    console.log("Prediction: No, the number is not greater than 10.");
}
//  Test 2: Check if a text equal to 'hello'?
var text = "hello";
console.log("Test 2: Is the text equal to 'hello'?");
if (text === text) {
    console.log("Prediction: Yes, the text is equal to hello.");
}
else {
    console.log();
    console.log("Prediction: No, the text is not equal to hello.");
}
//  Test 3: Check if a boolean value true?
var isTrue = true;
console.log("Test 3: Is the boolean value true?");
if (isTrue === true) {
    console.log("Prediction: Yes, the boolean value true.");
}
else {
    console.log("Prediction: No, the text value false.");
}
// Test 4: Check if a number is divisible by 2
var num = 7;
console.log("Test 4: Is", num, "divisible by 2?");
if (num / 2 === 0) {
    console.log("Prediction: Yes, the number is divisible by 2.");
}
else {
    console.log("Prediction: No, the number is not divisible by 2.");
}
/* Test 1: Is the number greater than 10?

number is set to 15.
Prediction: Yes, the number is greater than 10.
Result: True (because 15 is indeed greater than 10).

Test 2: Is the text equal to 'hello'?

text is set to 'hello'.
Prediction: Yes, the text is equal to 'hello'.
Result: True (because the value of text is indeed 'hello').

Test 3: Is the boolean value true?

isTrue is set to true.
Prediction: Yes, the boolean value is true.
Result: True (because isTrue is explicitly set to true).

Test 4: Is the number divisible by 2?

num is set to 7.
Prediction: No, the number is not divisible by 2.
Result: False (because 7 is not divisible by 2, the remainder is 1). */
// Test 1: Check if 20 is greater than 10
console.log("Test 1: Is 20 greater than 10?");
console.log("Prediction: True");
console.log("Result:", 20 > 10); // True
// Test 2: Check if "apple" is equal to "orange"
console.log("Test 2: Is 'apple' equal to 'orange'?");
console.log("Prediction: False");
console.log("Result:", "apple" === "orange"); // False
// Test 3: Check if -5 is less than 0
console.log("Test 3: Is -5 less than 0?");
console.log("Prediction: True");
console.log("Result:", -5 < 0); // True
// Test 4: Check if 100 is divisible by 7
console.log("Test 4: Is 100 divisible by 7?");
console.log("Prediction: False");
console.log("Result:", 100 / 7 === 0); // False
// Test 5: Check if "hello" contains the letter "o"
console.log("Test 5: Does 'hello' contain the letter 'o'?");
console.log("Prediction: True");
console.log("Result:", "hello".includes("o")); // True
// Test 6: Check if 20 is equal to the string "20"
console.log("Test 6: Is 20 equal to the string '20'?");
console.log("Prediction: False");
console.log("Result:", 20 === "20"); // False
// Test 7: Check if 3 to the power of 2 is equal to 9
console.log("Test 7: Is 3^2 equal to 9?");
console.log("Prediction: True");
console.log("Result:", Math.pow(3, 2) === 9); // True
// Test 8: Check if 2024 is a leap year
console.log("Test 8: Is 2024 a leap year?");
console.log("Prediction: True");
console.log("Result:", (2024 % 4 === 0 && 2024 % 100 !== 0) || 2024 % 400 === 0); // True
// Test 9: Check if "hello" is in uppercase
console.log("Test 9: Is 'hello' in uppercase?");
console.log("Prediction: False");
console.log("Result:", "hello" === "HELLO"); // False
// Test 10: Check if the length of "cat" is greater than 4
console.log("Test 10: Is the length of 'cat' greater than 4?");
console.log("Prediction: False");
console.log("Result:", "cat".length > 4); // False
