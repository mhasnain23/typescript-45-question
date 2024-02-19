//Think of at least five places in the world you’d like to visit.
var places = ["burj khalifa", "new york", "england", "delhi", "thaipur"];
console.log(places);
// Convert all elements to uppercase
places = places.map(function (place) { return place.toUpperCase(); });
// Sort the array alphabetically
places.sort(); // I know this think was not working but this may reduce error
//This may print list type
console.log(places);
//create copy of the array.
var sortedCopy = (places.slice());
// Sort the copy in reverse alphabetical order.
sortedCopy.sort(function (a, b) {
    return b.localeCompare(a);
});
console.log(sortedCopy);
//This may print lower case.
sortedCopy = places.map(function (place) { return place.toLowerCase(); });
//Ye function reverse kare ga orignally.
sortedCopy.sort(function (a, b) {
    return b.localeCompare(a);
});
console.log(sortedCopy);
//Sort the array in alphabetical order
places.sort();
//Print the sorted array
console.log(places);
//Sort the array in reverse alphabetical order
places.sort(function (a, b) {
    return b.localeCompare(a);
});
// Print the sorted array
console.log(places);