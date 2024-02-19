//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
/* 
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

let userNames: string[] = ["Admin", "sami", "hamza", "ejaz", "rafay", "shayan"];


if (userNames.includes("Admin")) {
    console.log("Sir Zia Khan", "\n\nHello Admin, would you like to see a status report?\n");
} else if (userNames === userNames) {
    console.log("\nNo Admin any where\n");
}


if (userNames.includes("sami")) {
    console.log(userNames[1], "\n\nHello Eric, thank you for logging in again.\n");
}


if (userNames.includes("hamza")) {
    console.log(userNames[2], "\n\nHello Eric, thank you for logging in again.\n");
}


if (userNames.includes("ejaz")) {
    console.log(userNames[3], "\n\nHello Eric, thank you for logging in again.\n");
}


if (userNames.includes("rafay")) {
    console.log(userNames[4], "\n\nHello Eric, thank you for logging in again.\n");
}


if (userNames.includes("shayan")) {
    console.log(userNames[5], "\n\nHello Eric, thank you for logging in again.\n");
}