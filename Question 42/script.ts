//Question 42 Solved 
 
 
function show_magicians(magicians: string[]): void {
     magicians.forEach(magician => {
         console.log(magician);
     });
 }

 function make_great(magicians: string[]): string[] {
     return magicians.map(magician => `the Great ${magician}`);
}
 
// Array of magician's names
 let magicians: string[] = [
     "David Copperfield", "David Blaine", "Harry Houdini", "Penn Jillette", "Teller"
]

// Call make_great to modify the magicians array
magicians = make_great(magicians);
//Calling the function to show magicians after modification
show_magicians(magicians);
