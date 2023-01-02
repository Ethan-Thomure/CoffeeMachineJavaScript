const input = require('sync-input');

let supplies = {water: 400, milk: 540, coffeeBeans: 120, cups: 9, money: 550,
    displayContents() {
        console.log(`The coffee machine has:
${supplies.water} ml of water
${supplies.milk} ml of milk
${supplies.coffeeBeans} g of coffee beans
${supplies.cups} disposable cups
$${supplies.money} of money`);
    }};

const coffeeIngredients = {
    1: {water: 250, milk: 0, coffeeBeans: 16, cost: 4},
    2: {water: 350, milk: 75, coffeeBeans: 20, cost: 7},
    3: {water: 200, milk: 100, coffeeBeans: 12, cost: 6}
};

function buy() {
    let choice = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n"));
    supplies.water -= coffeeIngredients[choice].water;
    supplies.milk -= coffeeIngredients[choice].milk;
    supplies.coffeeBeans -= coffeeIngredients[choice].coffeeBeans;
    supplies.cups--;
    supplies.money += coffeeIngredients[choice].cost;
    console.log()
}

function fill() {
    supplies.water += Number(input("Write how many ml of water you want to add:\n"));
    supplies.milk += Number(input("Write how many ml of milk you want to add:\n"));
    supplies.coffeeBeans += Number(input("Write how many grams of coffee beans you want to add:\n"));
    supplies.cups += Number(input("Write how many disposable cups you want to add:\n"));
    console.log()
}

function take() {
    console.log(`I gave you $${supplies.money}`);
    supplies.money = 0;
}

supplies.displayContents();
switch (input("Write action (buy, fill, take):\n")) {
    case "buy":
        buy();
        supplies.displayContents();
        break;
    case "fill":
        fill();
        supplies.displayContents();
        break;
    case "take":
        take();
        supplies.displayContents();
        break;
}