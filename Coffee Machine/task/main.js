const input = require('sync-input');

const waterPerCoffeeCup = 200;
const milkPerCoffeeCup = 50;
const coffeeBeenPerCoffeeCup = 15;

smallestCoffeeCoefficient = Math.floor(Math.min(Number(input("Write how many ml of water the coffee machine has:\n")) / waterPerCoffeeCup,
    Number(input("Write how many ml of water the coffee machine has:\n")) / milkPerCoffeeCup,
    Number(input("Write how many grams of coffee beans the coffee machine has:\n")) / coffeeBeenPerCoffeeCup)); // finding "weakest of chain"
const neededCupsOfCoffee = Number(input("Write how many cups of coffee you will need:\n"));

if (smallestCoffeeCoefficient >= neededCupsOfCoffee) {
    console.log(`Yes, I can make that amount of coffee${(smallestCoffeeCoefficient === neededCupsOfCoffee) 
                ? "" : ` (and even ${smallestCoffeeCoefficient - neededCupsOfCoffee} more than that`}`);
} else {
    console.log(`No, I can make only ${smallestCoffeeCoefficient} cups of coffee`);
}