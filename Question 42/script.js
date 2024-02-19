//Question 42 Solved 
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magicians = [
    "David Copperfield", "David Blaine", "Harry Houdini", "Penn Jillette", "Teller"
];
// Call make_great to modify the magicians array
magicians = make_great(magicians);
//Calling the function to show magicians after modification
show_magicians(magicians);
