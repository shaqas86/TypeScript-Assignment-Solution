"use strict";
var _a;
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let countryObj  = 
//     {
//         name: "Pakistan",
//         capital: "Islamabad",
//         population: 250000000,
//         language: "urdu",
//         cities : ["Lahore ","Karachi","Islamabad","Gujrat"],
//         condition :true
//     }
let countryArry = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 250000000,
        language: "urdu",
        cities: ["Lahore ", "Karachi", "Islamabad", "Gujrat"],
        condition: true
    }
];
console.log("List of Array Items");
for (let countryItems of countryArry) {
    console.log(`Name: ${countryItems.name}`);
    console.log(` Capital: ${countryItems.capital}`);
    console.log(`Population: ${countryItems.population}`);
    console.log(`CityNames: ${(_a = countryItems.cities.pop()) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`);
    console.log(`Condition: ${countryItems.condition}`);
}
