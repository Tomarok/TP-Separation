"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Exercise 1
var message = 'Hello, World';
console.log(message);
// Exercise 2
var spaceCraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
var milesToMars = kilometersToMars * milesPerKilometer;
console.log("".concat(spaceCraftName, " would take ").concat(milesToMars / speedMph / 24, " hours to get to Mars."));
// Exercise 3
function getDaysToLocation(kilometersAway) {
    return kilometersAway * milesPerKilometer / speedMph / 24;
}
console.log(getDaysToLocation(kilometersToMars));
// Exercise 4
console.log("It would take ".concat(getDaysToLocation(kilometersToMars), " days for the ").concat(spaceCraftName, " to get to Mars."));
console.log("It would take ".concat(getDaysToLocation(kilometersToTheMoon), " days for the ").concat(spaceCraftName, " to get to the Moon."));
// Exercise 5
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        return kilometersAway * milesPerKilometer / this.speedMph / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location, kilometersAway) {
        console.log("It would take ".concat(this.getDaysToLocation(kilometersAway), " days for the ").concat(this.name, " to get to ").concat(location, "."));
    };
    Spacecraft.prototype.printDaysToSpaceLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spacecraft = new Spacecraft('Determination', 17500);
spacecraft.printDaysToLocation('Mars', kilometersToMars);
spacecraft.printDaysToLocation('the Moon', kilometersToTheMoon);
// Exercise 6
var spacecraft2 = new Spacecraft('Determination', 17500);
spacecraft2.printDaysToSpaceLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
