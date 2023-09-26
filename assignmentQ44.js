/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should print a summary of the
 sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
// Define the function that accepts an array of sandwich items
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items specified for the sandwich.");
    }
    else {
        console.log("Items on the sandwich:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log("\n");
}
// Call the function three times with different numbers of arguments
orderSandwich("Bar B Q", "Cheese", "RumPum");
orderSandwich("Turkey", "Tomato");
orderSandwich("Chicken", "Egg Shami", "Zinger", "simple Sandwich");
//without any parameter
orderSandwich();
