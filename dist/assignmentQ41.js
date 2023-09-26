"use strict";
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
const Magicians_Array = ["Raj Kumar", "Aslam", "David D"];
const show_magicians = (magicians) => {
    for (let magician of magicians) {
        console.log(magician);
    }
};
show_magicians(Magicians_Array);
/* Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list
has actually been modified. */
const make_greatMagicianFun = (magician) => {
    let greatMagician = [];
    for (let magic of magician) {
        greatMagician.push(`The Great ${magic}`);
    }
    return greatMagician;
};
const magicianNames = make_greatMagicianFun(Magicians_Array);
show_magicians(magicianNames);
/*const magicianNames: string[] = [
    "David Copperfield",
    "Harry Houdini",
    "Criss Angel",
    "Penn Jillette",
    "Teller"
  ];
  
  const show_magicians = (magicians: string[]): void => {
    for (const magician of magicians) {
      console.log(magician);
    }
  };
  
  const make_great = (magicians: string[]): string[] => {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
  };
  
  const greatMagicianNames = make_great(magicianNames);
  show_magicians(greatMagicianNames); */
