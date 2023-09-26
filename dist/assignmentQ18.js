"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
let orginalPlacesArr = ["pakistan", "india", "uk", "america", "canada"];
console.log("Places Array in its Your Orginal Order", orginalPlacesArr);
//sort
let alphabeticalOrderArr = orginalPlacesArr.slice().sort();
console.log("Array in Alphabatical Order", alphabeticalOrderArr);
// to check Orginal Order
console.log("Array In its Orginal Order", orginalPlacesArr);
// to reverse order
let revAlphaOrder = orginalPlacesArr.slice().reverse().sort();
console.log("In Reverse Order", revAlphaOrder);
// to check Orginal Order
console.log("Array In its Orginal Order", orginalPlacesArr);
//reverse order
let reverseOrder = orginalPlacesArr.slice().reverse();
console.log("Array In Reverse Order", reverseOrder);
//console.log(orginalPlacesArr)
//Change Reverse order
let changeReverseOrder = reverseOrder.slice().reverse();
console.log("Array back In Reverse Order", changeReverseOrder);
//sorted in Alphabatically order
let alphabeticalSortArray = orginalPlacesArr.slice().sort();
console.log("Orginal Array in Alphabetically order", alphabeticalSortArray);
//reverse Alphabatically order
let reverseAlphabeticallyOrder = orginalPlacesArr.reverse().sort();
console.log("In Reverse Alphabetically Order", reverseAlphabeticallyOrder);
//console.log(orginalPlacesArr);
