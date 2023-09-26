/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
added to each magician’s name. */

const Magicians_Array : string[] =["Raj Kumar","Aslam","David D"];
//show magician()
let show_Magician_Fun =(magicianArr:Array<string>)=>{
    magicianArr.map((magician) =>{
        console.log(magician)
    });   
}
//make great ()
let make_Great_Fun =(magicianArr:Array<string>)=>{
    const arr :Array<string> = []
    magicianArr.map((name) =>{
        arr.push("The Great"  + name);
    })
        return arr;
}

 let newarr= make_Great_Fun(Magicians_Array);
    console.log("Orignal");
show_Magician_Fun(Magicians_Array);
    console.log("New Array:");
    show_Magician_Fun(newarr);
