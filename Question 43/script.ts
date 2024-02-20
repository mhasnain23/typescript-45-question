//unchanged magicians
function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}


function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// original array of magicians

let magicians: string[] = [
    "Merlin", "Gandalf", "Harry Potter"
];


// Copying the array and adding "Great" to each magician's name
let greatMagicians: string[] = makeGreat([...magicians]);

//calling function show_magicians ka magicians parameter hai
console.log("Original Magicians:");
show_magicians(magicians);


console.log("\nGreat Magicians:");
show_magicians(greatMagicians);