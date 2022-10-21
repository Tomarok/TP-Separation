import { SpaceLocation } from './SpaceLocation';

const message: string = 'Hello, World';
console.log(message);

const spaceCraftName: string = 'Determination';
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerKilometer: number = 0.621;

const milesToMars: number = kilometersToMars * milesPerKilometer;
console.log(`${ spaceCraftName } would take ${ milesToMars / speedMph / 24 } hours to get to Mars.`);

function getDaysToLocation(kilometersAway: number): number {
    return kilometersAway * milesPerKilometer / speedMph / 24;
}

console.log(getDaysToLocation(kilometersToMars));

console.log(`It would take ${ getDaysToLocation(kilometersToMars) } days for the ${ spaceCraftName } to get to Mars.`);
console.log(`It would take ${ getDaysToLocation(kilometersToTheMoon) } days for the ${ spaceCraftName } to get to the Moon.`);

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        return kilometersAway * milesPerKilometer / this.speedMph / 24;
    }

    printDaysToLocation(location: string, kilometersAway: number): void {
        console.log(`It would take ${ this.getDaysToLocation(kilometersAway) } days for the ${ this.name } to get to ${ location }.`);
    }

    printDaysToSpaceLocation(location: SpaceLocation) {
        console.log(`${ this.name } would take ${ this.getDaysToLocation(location.kilometersAway) } days to get to ${ location.name }.`);
    }

}

const spacecraft = new Spacecraft('Determination', 17500);
spacecraft.printDaysToLocation('Mars', kilometersToMars);
spacecraft.printDaysToLocation('the Moon', kilometersToTheMoon);

const spacecraft2 = new Spacecraft('Determination', 17500);
spacecraft2.printDaysToSpaceLocation(new SpaceLocation('Mars', kilometersToMars));
