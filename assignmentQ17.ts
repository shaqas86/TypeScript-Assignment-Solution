/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list 
at the end of your program. */
//import { notInvitedMsg } from "./assignmentQ15"
let guestList3 = ['dawood', 'hammad', 'ali', 'Raqeeb', 'qasim', 'farooq' ]
console.log("I have only space for two persons only")

for(let i=guestList3.length -2; i > 0; i--){
    console.log(`Sorry Mr.${guestList3.pop()}, You are not Invited at dinner`)
}
for(let remainGuest of guestList3){
    console.log(`Congratulations, Mr. ${remainGuest}, you are still invited `)
}
guestList3.splice(0)
console.log("🚀 ~ file: assignmentQ17.ts:22 ~ guestList:", `Empty Guest List, ${guestList3}, guestList[]`);
