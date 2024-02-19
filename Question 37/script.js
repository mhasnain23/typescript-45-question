//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    console.log("Crearing a ".concat(size, " shirt with the message ").concat(message));
}
// Calling the function
make_shirt("medium", "This is a medium size shirt");
make_shirt("large", "I Love Typescript");
