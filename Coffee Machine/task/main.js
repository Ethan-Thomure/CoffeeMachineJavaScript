const input = require('sync-input');

let supplies = {water: 400, milk: 540, "coffee beans": 120, cups: 9};
let money = 550;

const coffeeIngredients = {
    1: {water: 250, milk: 0, "coffee beans": 16, cups: 1, cost: 4},
    2: {water: 350, milk: 75, "coffee beans": 20, cups: 1, cost: 7},
    3: {water: 200, milk: 100, "coffee beans": 12, cups: 1, cost: 6}
};

function displayContents() {
    console.log(`\nThe coffee machine has:
${supplies.water} ml of water
${supplies.milk} ml of milk
${supplies["coffee beans"]} g of coffee beans
${supplies.cups} disposable cups
$${money} of money\n`);
}

function buy() {
    let choice = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
    if (choice === "back") {
        return;
    } else {
        choice = Number(choice);
    }
    for (let i in supplies) {
        if (supplies[i] < coffeeIngredients[choice][i]) {
            console.log(`Sorry, not enough ${i}!\n`);
            return;
        }
    }
    console.log("I have enough resources, making you a coffee!\n");
    supplies.water -= coffeeIngredients[choice].water;
    supplies.milk -= coffeeIngredients[choice].milk;
    supplies["coffee beans"] -= coffeeIngredients[choice]["coffee beans"];
    supplies.cups--;
    money += coffeeIngredients[choice].cost;
}

function fill() {
    supplies.water += Number(input("\nWrite how many ml of water you want to add:\n"));
    supplies.milk += Number(input("Write how many ml of milk you want to add:\n"));
    supplies["coffee beans"] += Number(input("Write how many grams of coffee beans you want to add:\n"));
    supplies.cups += Number(input("Write how many disposable cups you want to add:\n"));
    console.log()
}

function take() {
    console.log(`\nI gave you $${money}\n`);
    money = 0;
}

let action;
do {
    action = input("Write action (buy, fill, take, remaining, exit):\n")
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            displayContents();
    }
} while (action !== "exit");