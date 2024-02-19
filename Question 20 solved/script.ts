//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

/* Type 1 */
let forExample: any[] = [
    "mountain:", "   k2 mountain", "   mount everest", "   china mountain",
    "rivers:", "   do darya", "   sea view", "   hosbe", "   karli jheal",
    "countries:", "   pakistan", "   india", "   america", "   thailand", "   dubai",
    "cities:", "   karachi", "   lahore", "   kheber pakhtun kwa", "   hydrabad", "   sakhar",
    "languages:", "   typescript", "   javascript", "   python"
];

for (let i = 0; i < forExample.length; i++) {
    console.log(forExample[i]);
}