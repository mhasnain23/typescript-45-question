// Define an array of possible alien colors
const alienColors: string[] = ['green', 'yellow', 'red'];

// Randomly select an alien color
const alienColor: string = alienColors[Math.floor(Math.random() * alienColors.length)];

// If-else chain to react based on the alien's color
if (alienColor === 'green') {
    console.log("The alien's color is green. the player just earned 5 points! for shooting the alien");
} else if (alienColor === 'yellow') {
    console.log("The alien's color is yellow. the player just earned 10 points.!");
} else {
    console.log("Unknown alien color. No points earned.");
}
