"use strict";
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
const update_Tshirt = (size, msg) => {
    console.log(`Shrit Size:${size}:::${msg}`);
};
update_Tshirt("XS", "I love to learn Typescript");
update_Tshirt("S", "I love to learn JavaScript");
update_Tshirt("M", "I love to learn Node JS");
update_Tshirt("L", "I love to learn Node Project");
