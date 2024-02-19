//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
/*
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

const current_users: string[] = [
    "sami", "hamza", "elon musk", "mark zakurbark", "sir zia khan"
];

const new_users: string[] = [
    "sami", "hamza", "ejaz", "saif", "shayan"
];

//Now, let's loop through the new_users name availability!
for (const username of new_users) {
    
    if (current_users.includes(username)) {
        console.log(`username "${username}" is not available. Please enter a new username.`);
    }
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
/* okay! case insensitive apply here  if new_users try to get current_users so it's not possible they print not available. */
    else if (new_users === current_users) {
        console.log(`username "${username}" is not available. Please enter a new username.`);
    }
    
    else {
        console.log(`username "${username}" is available`);
    }
}