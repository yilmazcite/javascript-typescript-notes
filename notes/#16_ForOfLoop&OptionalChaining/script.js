//'restaurant' object is still being used for further examples:
let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ mainIndex, starterIndex, address, time }) {
    console.log(time, address, mainIndex, starterIndex);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//LOOPING ARRAYS: THE FOR-OF LOOP:

//For-of loop is simpler and more practical than the actual for loop because the iteration, counter, and starter index etc. are not required here.

let menuItems = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let item of menuItems) console.log(item);

/*
•	Loop over the entire item in the selected element (menuItems) and execute the selected code for each of the items in that element.
•	So, the loop will work on the items inside 'menuItems' and it will console log each item and then will continue repeating.
•	'Continue' and 'break' keywords can still be used with for-of loop.
•	In order to get the index of an element using for-of loop, '.entries()' method can be used:
*/

for (let item of menuItems.entries()) {
  console.log(item);
  //To list the items with a number order, the following line of code can be used. But this is an old-fashioned way.
  console.log(`${item[0] + 1}: ${item[1]}`); //Check this out.
}

//.entries() method returns each item with their index.
//Instead of using the example above, the 'item' can be destructured:
for (let [index, element] of menuItems.entries()) {
  console.log(`${index + 1}: ${element}`);
}

//Optional Chaining (?.):

/*
•	Optional chaining is used to check if a certain property exists.
•	If a certain property does not exist, it immediately returns 'undefined'.
*/

console.log(restaurant.openingHours.mon?.open); //Logs 'undefined' because 'mon' does not exist.

/*
•	Optional chaining is used right after the property name that is wanted to be checked.
•	In this example, it is checked whether 'mon' property exists or not.
•	!!!And only if the properties before the optional chaining exist, the following property ('open') will be read!!!
•	Otherwise, it will return 'undefined' if 'mon' property does not exist.
*/
console.log(restaurant.openingHours.thu?.open); //Logs 12 by reaching the value of 'open'
console.log(restaurant.openingHours?.mon?.open); //Logs 'undefined'

let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (let day of days) {
  console.log(day);
  let open = restaurant.openingHours.day?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Using Optional Chaining with Methods:

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.'); //Logs ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');
//Logs 'Method does not exist.' Operator checks if orderRisotto exists and returns the following value because it does not exist.

//Using Optional Chaining with Arrays:

//It can be checked if an array is empty with optional chaining.
let users = [{ name: 'John', email: 'hello@goodbye.com' }];
console.log(users[0]?.name ?? 'Empty array.');
//Logs 'John' because the operator checks if 'users[0]' array exists, and since it exists, it returns the value.
console.log(users[5]?.name ?? 'Empty array.'); //Logs 'Empty array.'

//LOOPING OBJECTS: Object Keys, Values, and Entries:

//Objects can be looped in an indirect way.

//PROPERTY NAMES:

//With '.key' keyword, the property names of the object are stored.
let properties = Object.keys(openingHours);
//Stores the names of the properties inside the 'properties' variable and returns an array.

console.log(properties); //Logs "(3) ['thu', 'fri', 'sat']"

let openStr = `We are open ${properties.length} days a week.`;

for (let day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//PROPERTY VALUES:

//With '.values' keyword, the values of the properties of the object are stored.
let values = Object.values(openingHours);
console.log(values);

for (let hour of values) {
  console.log(hour);
}

//SELECTING THE ENTIRE OBJECT WITH 'ENTRIES':

//It basically converts the object and its properties into an array:
let entries = Object.entries(openingHours);
console.log(entries); //Check this out.

for (let [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

//CODING CHALLENGE CONT'D

//Loop over the 'game.scored' array and print each player name to the console, along with the goal number:
let thoseWhoScored = game.scored;
for (let [index, element] of thoseWhoScored.entries()) {
  console.log(`Goal ${index + 1}: ${element}`);
}

//Take the sum of the odds and find their average:

//1)	Declaring empty variables for the sum of 3 odds for further use:
let sumOdds = 0;

//2)	Taking the values of the properties and storing them in the variable.
let allOdds = Object.values(game.odds);

//3)	Creating a loop to calculate the sum of the odds:
for (let value of allOdds) {
  sumOdds += value;
}

//4)	Taking the average of the sum:
let avgOdds = sumOdds / allOdds.length;

//5)	Printing out the sum and the average:
console.log(`The total of the odds: ${sumOdds}`);
console.log(`The average odd is: ${avgOdds}`);

//Creating a loop that takes prints out the team name and the corresponding odd of that team:
for (let [team, odd] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//Creating an object and printing out the names of the goal scorers and the number of goals scored by each player:
let scorers = {};
for (let players of game.scored) {
  if (scorers[players]) {
    scorers[players] += 1;
  } else {
    scorers[players] = 1;
  }
}
console.log(scorers);
