/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */

const numberArray : (string|Number|undefined | null)[]=["Pakistan",10,20,30,40,50];
//throw new Error("Index out of bounds");
console.log(numberArray[101]);
// Intentionally causing an index error