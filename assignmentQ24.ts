/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


let fruit = 'apple';
let number = 42;
let colors = ['red', 'green', 'blue'];

// Equality and inequality tests with strings
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // False

console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit != 'orange'); // True

// Tests using the lowercase function
console.log("Is fruit.toLowerCase() == 'APPLE'? I predict True.");
console.log(fruit.toLowerCase() == 'apple'); // True

// Numerical tests
console.log("Is number === 42? I predict True.");
console.log(number === 42); // True

console.log("Is number < 30? I predict False.");
console.log(number < 30); // False

console.log("Is number >= 50? I predict False.");
console.log(number >= 50); // False

// Tests using "and" and "or" operators
console.log("Is number > 20 && number < 60? I predict True.");
console.log(number > 20 && number < 60); // True

console.log("Is fruit == 'apple' || number == 100? I predict True.");
console.log(fruit == 'apple' || number == 100); // True

// Test whether an item is in an array
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes('red')); // True

// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow')); // True
