//You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
/* More Test */
/* one true and one false */
//test 1: Tests for equality and inequality with strings
var text1 = "hello";
console.log("Tests for equality and inequality with strings", text1);
var comparison_With_Strings = text1 && text1 || text1 && hello;
//This is conditional statement answer in true or false
if (comparison_With_Strings === text1) {
    console.log("Prediction: Yes, Is equality it's true");
}
else {
    console.log("Prediction: No, Is equality it's false");
    /* Test 1 is true */
}
//test 2: Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings", text1);
text1 && text1 || text1 && hello;
//This is conditional statement answer in true or false
if (comparison_With_Strings !== text1) {
    console.log("Prediction: Yes, Is equality it's true");
}
else {
    console.log("Prediction: No, Is equality it's false");
    /* Test 2 is false */
}
/* one true and one false */
// Test 3: Convert "WORLD" to lowercase and check if it's equal to "world"
console.log("Test 2: Is 'WORLD' converted to lowercase equal to 'world'?");
console.log("Prediction: True");
console.log("Result:", "WORLD".toLowerCase() === "world"); /* Test 3 is true */
// Test 4: Convert "JavaScript" to lowercase and check if it's equal to "java"
console.log("Test 8: Is 'JavaScript' converted to lowercase equal to 'java'?");
console.log("Prediction: False");
console.log("Result:", "TypeScript".toLowerCase() === "script"); /* Test 4 is false */
/* one true and one false */
//// Test 5: Check if 10 is less than or equal to 10
console.log("Test 3: Is 10 less than or equal to 10?");
console.log("Prediction: True");
console.log("Result:", 10 <= 10); /* Test 5 is true */
// Test 6: Check if 25 is not equal to 25
console.log("Test 4: Is 25 not equal to 25?");
console.log("Prediction: False");
console.log("Result:", 25 !== 25); /* Test 6 is false */
/* one true and one false */
// Test 7: Check if given "apple" ends with 'e' or "banana" ends with 'a'
console.log("Test 7: Is either 'apple' ends with 'e' or 'banana' ends with 'a'?");
console.log("Prediction: True");
console.log("Result:", "apple".endsWith('e') || "banana".endsWith('a')); /* Test 7 is true */
// Test 8: Check if both 100 is divisible by 5 and 100 is divisible by 3
console.log("Test 8: Is both 100 divisible by 5 and 100 divisible by 3?");
console.log("Prediction: False");
console.log("Result:", 100 % 5 === 0 && 100 % 3 === 0); /* Test 8 is false */
/* one true and one false */
// Test 9: whether an item is not in a array
var fruits = ["Apple", "Banana", "Orange"];
//test banana is not in the fruits array
var itemToCheck1 = "Banana";
console.log("Test", itemToCheck1, "Is not in the fruits array?");
if (fruits.includes(itemToCheck1)) {
    console.log("Result: Yes, '" + itemToCheck1 + "' is not in the array.");
}
else {
    console.log("Result: No, '" + itemToCheck1 + "' is in the array.");
    /* Test 9 is true */
}
// Test 10: whether an item is in a array
var fruitsCopy = ["Apple", "Banana", "Orange"];
//test kiwi is not in the fruits array
var itemToCheck2 = "Kiwi";
console.log("Test", itemToCheck2, "Is not in the fruits array?");
if (fruitsCopy.includes(itemToCheck2)) {
    console.log("Result: Yes, '" + itemToCheck2 + "' is not in the array.");
}
else {
    console.log("Result: No, '" + itemToCheck2 + "' is in the array.");
    /* Test 10 is false */
}
