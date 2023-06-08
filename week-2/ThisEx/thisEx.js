// const person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       this.hungry = false;
//       alert("Im no longer hungry!");
//     }
//   },
// };

// person.feed(); //should alert "I'm no longer hungry"

// -------------------------------------------------------------------

// const pump = function (amount) {
//   this.liters += amount;
//   console.log("You put " + amount + " liters in " + this.name);
// };

// const garage = {
//   car1: {
//     name: "Audi",
//     liters: 3,
//     fillTank: pump,
//   },
//   car2: {
//     name: "Mercedes",
//     liters: 1,
//     fillTank: pump,
//   },
// };

// garage.car1.fillTank(2);
// console.log("Audi should have 5 liters: ", garage.car1.liters);

// garage.car2.fillTank(30);
// console.log("Mercedes should have 31 liters: ", garage.car2.liters);

// -------------------------------------------------------------------

// const pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// const airplane = {
//   fuel: 0,
//   fly: function () {
//     if (this.fuel < 2) {
//       return "on the ground!";
//     } else {
//       return "flying!";
//     }
//   },
// };

// console.log("The plane should not be able to fly (yet): " + airplane.fly());

// pumpFuel(airplane);
// console.log("The plane should STILL not be able to fly: " + airplane.fly());

// pumpFuel(airplane);
// console.log("Take off! " + airplane.fly());

// -------------------------------------------------------------------

// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },
//   stealCoins: function (num) {
//     if (this.coinCount >= num) {
//       this.coinCount -= num;
//     } else {
//       this.coinCount = 0;
//     }
//   },
// };

// tipJar.tip();
// console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

// -------------------------------------------------------------------

// const revealSecret = function () {
//   return this.secret;
// };

// const shoutIt = function (person, func) {
//   person.revealItAll = func;
//   const result = person.revealItAll();
//   alert(person.name + " said: " + result);
// };

// const avi = {
//   name: "Avi",
//   secret: "Im scared of snakes!",
// };

// const narkis = {
//   name: "Narkis",
//   secret: "I dont have secrets because I'm zen like that.",
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);

// -------------------------------------------------------------------

// const coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12,
//   },

//   makeDrink: function (drinkType) {
//     let drink = this.drinkRequirements[drinkType];
//     if (drink) {
//       if (this.beans >= drink) {
//         this.beans -= drink;
//         console.log("Here is your " + drinkType + " :)");
//       } else {
//         console.log("Sorry, we're all out of beans :(");
//       }
//     } else console.log("Sorry, we don't make " + drinkType + ":(");
//   },
// };

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

// -------------------------------------------------------------------

const coffeeShop = {
    beans: 40,
    money: 60,
    beanPrice: 0.5,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 6 },
        americano: { beanRequirement: 5, price: 3 },
        doubleShot: { beanRequirement: 15, price: 10 },
        frenchPress: { beanRequirement: 12, price: 7 },
    },
    buyDrink: function (drinkType) {
        if (this.makeDrink(drinkType)) {
            this.money += this.drinkRequirements[drinkType].price;
            console.log("Here is your " + drinkType + " :)");
        }
    },

    makeDrink: function (drinkType) {
        let drink = this.drinkRequirements[drinkType];
        if (drink && this.beans >= drink.beanRequirement) {
            this.beans -= drink.beanRequirement;
            return true;
        } else if (
            drink &&
            this.beans < drink.beanRequirement &&
            drink.beanRequirement * this.beanPrice <= this.money
        ) {
            this.money -= drink.beanRequirement * this.beanPrice;
            return true;
        } else if (
            drink &&
            this.beans < drink.beanRequirement &&
            drink.beanRequirement * this.beanPrice > this.money
        ) {
            console.log("Sorry, we're all out of money :(");
            return false;
        } else {
            console.log("Sorry, we don't make " + drinkType + ":(");
        }
        return false;
    },
};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("americano");
