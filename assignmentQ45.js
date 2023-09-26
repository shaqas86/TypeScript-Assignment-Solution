/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required
information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to
 make sure all the information was stored correctly. */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define the function to store car information
var car_object = function (manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    Object.entries(args).map(function (_a) {
        var key = _a[0], value = _a[1];
        car = __assign(__assign({}, car), value);
    });
    return car;
};
console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));
