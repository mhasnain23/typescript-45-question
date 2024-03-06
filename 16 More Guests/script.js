// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*1: Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

2: Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

3: Print a second set of invitation messages, one for each person who is still in your list.*/
var changingGuestList = ["Kamran Tessori", "Nawaz Sharif", "Asif Ali Zardari", "Altaf Hussain"];
// for (let i = 0; i < changingGuestList.length; i++) {
//     console.log("Dear Mr.", changingGuestList[i], "\n\nIt is our Pleasure To Invite You in Our Party. \n\n ThankYou \n\n");
// }
var person_Absent = "Imran Khan";
var newGuest = "Kamran Tessori";
changingGuestList[0] = newGuest;
//list was changed
console.log("Mr. ".concat(person_Absent, ", is not coming to the party."));
console.log("\n\nGood news! we find big table so we are inviting 3 more guest");
changingGuestList.unshift("Sir Zia Khan");
changingGuestList.splice(2, 0, "Maryam Nawaz");
changingGuestList.push("Bilawal Butho");
for (var i = 0; i < changingGuestList.length; i++) {
    console.log("Dear Mr. ", changingGuestList[i], "\n\nIt is our Pleasure To Invite You in Our Party. \n\n ThankYou \n\n");
}
