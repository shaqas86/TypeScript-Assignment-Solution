/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of 
invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

let guestList1:string[] =["hammad","ali","sarfraz"]
export let notInvitedMsg = "Dear, You are not Invited on dinner"
console.log( guestList1.pop(),`${notInvitedMsg}`);

let updateGuestList = guestList1.push("qasim");
 let invitationMsg = "Dear, You are Invited on Dinner !!!";
console.log(guestList1);
for(let eachPrsnInList of guestList1){
    console.log(`${eachPrsnInList},${invitationMsg}` );
    
}
