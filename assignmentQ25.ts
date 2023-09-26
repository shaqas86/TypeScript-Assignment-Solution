/* Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */

let alien_color : string = 'red';
if(alien_color == 'red'){
    console.log("🚀 ~ file: assignmentQ25.ts:8 ~ alien_color:", "you just earned 5 Points",alien_color);
}else{
       console.log("🚀 ~ file: assignmentQ25.ts:7 ~ alien_color:", alien_color)
    
   }
if(alien_color == 'green'){
    console.log("🚀 ~ file: assignmentQ25.ts:12 ~ alien_color:", alien_color)
    
}