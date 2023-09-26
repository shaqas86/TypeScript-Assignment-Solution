"use strict";
/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
let alien_color2 = "green";
if (alien_color2 == 'green') {
    console.log("you earned 5 points");
}
if (alien_color2 === 'blue') {
    console.log("You have earned Nothing");
}
else {
    if (alien_color2 != 'green') {
        console.log("you earned 5 points");
    }
    else {
        console.log("You earned 10 points");
    }
}
console.log("🚀 ~ file: assignmentQ26.ts:14 ~ alien_color2:", alien_color2);
