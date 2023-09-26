/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a 
bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */

let guestList2 =['hammad', 'ali', 'qasim']
let inviteBigDinnerMsg = "Dear You are invited on Bigger Dinner Table"
for(let bigDinnTable of guestList2){
    console.log(`${bigDinnTable},${inviteBigDinnerMsg}`)
}

console.log(guestList2.unshift("dawood"))
console.log(guestList2)
let middleAddGuest = guestList2.splice(3,0,"Raqeeb")
console.log("🚀 ~ file: assignmentQ16.ts:19 ~ middleAddGuest:", middleAddGuest)

let UGuestList = guestList2.push("farooq")
console.log(guestList2)
for(let eachGuestInList of guestList2){
    console.log(`${eachGuestInList},${inviteBigDinnerMsg}`)
}
