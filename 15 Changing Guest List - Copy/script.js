"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
/*1: Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

2: Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

3: Print a second set of invitation messages, one for each person who is still in your list.*/
var changingGuestList = ["Sami", "Ejaz", "Shayan", "Rafay"];
for (var i = 0; i < changingGuestList.length; i++) {
    console.log("Dear Mr.", changingGuestList[i], "\n\nIt is our Pleasure To Invite You in Our Party. \n\n ThankYou \n\n");
}
var sami_Absent = "Sami";
var newGuest = "Hamza";
changingGuestList[0] = newGuest;
//list was changed
for (var i = 0; i < changingGuestList.length; i++) {
    console.log("Dear Mr. ", changingGuestList[i], "\n\nIt is our Pleasure To Invite You in Our Party. \n\n ThankYou \n\n");
}
console.log("".concat(sami_Absent, ", is not coming to the party."));
