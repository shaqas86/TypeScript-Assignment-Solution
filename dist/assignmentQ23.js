"use strict";
/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
let car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // This should be True
// Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // This should be False
// Test 3
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // This should be False (strict equality checks both value and type)
// Test 4
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // This should be False
// Test 5
console.log("Is car.length <= 10? I predict True.");
console.log(car.length <= 10); // This should be True
// Test 6
let age = 25;
console.log("Is age > 18 && age < 30? I predict True.");
console.log(age > 18 && age < 30); // This should be True
// Test 7
console.log("Is age >= 30 || car == 'subaru'? I predict True.");
console.log(age >= 30 || car == 'subaru'); // This should be True
// Test 8
let raining = true;
console.log("Is raining and car == 'honda'? I predict False.");
console.log(raining && car == 'honda'); // This should be False
// Test 9
console.log("Is !raining? I predict False.");
console.log(!raining); // This should be False
// Test 10
let price = 100;
console.log("Is price != 150? I predict True.");
console.log(price != 150); // This should be True
