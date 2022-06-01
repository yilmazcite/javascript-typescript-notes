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

//LOGICAL ASSIGNMENT OPERATORS

let rest1 = {
  name: 'Capri',
  //numGuests: 0, -> Check for the || and ||= operators.
  numGuests: 20, //Check for the ??= (nullish) operator.
};

let rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//'numGuests' property is not present in 'rest2'. The || operator is used to check if 'numGuests' is an existing property in the objects:
rest1.numGuests = rest1.numGuests || 10;
//Returns 20 because the property is present in the object and the first value returns true.

rest2.numGuests = rest2.numGuests || 10;
//Returns 10 because the first value is falsy (because there is not an object called 'numGuests' in 'rest2'), as a result, the second value returns true.

//Logical ||= Operator:

//This operator assigns a value to the variable if the existing value of the variable is falsy.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1, rest2);
/*
•	However, doing this might cause a problem and return a wrong result.
•	For instance, if the 'numGuests' property has a value of 0 (zero), the || operator will consider it false and take the second value, '10', true.
•	Instead of using this operator, logical nullish assignment operator can be used.
*/

//Logical Nullish Assignment (??=) Operator:
/*
•	This operator assigns the value to the variable if the previous value of the variable is 'nullish' ('null' or 'undefined').
•	As a result, the value being 0 (zero) will not affect the result:
*/
rest1.numGuests ??= 10; //logs 0
rest2.numGuests ??= 10; //logs 10

//Logical &&= Operator:

//How to set the 'owner' property of the restaurants to 'anonymous' when the owner of the restaurant is not declared:
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
/*
The logical &&= operator checks the existing value of the property and returns the existing value without a change if that value is true.
If the existing value is false, the &&= operator evaluates the second value and returns it.
*/
console.log(rest1.owner, rest2.owner);

//Coding challenge:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Creating two separate arrays for all players of both teams:
let players1 = game.players[0];
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

let players2 = game.players[1];
let [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);
/*
  It could be done in a shorter way:
  let [players1, players2] = game.players;
*/

//Gathering all players in 1 array:
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Adding extra players to Team 1 and storing the final version with all the players:
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Storing the values inside the 'odds' object into variables for further use:
let { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);
/*
  This part could also be done in a different way:
  let {odds: {team1, x: draw, team2}} = game;
*/

let printGoals = function (...players) {
  //Storing the length of the given values in 'goals':
  let goals = players.length;
  //Logging the given players to the console:
  console.log(`Players who scored are:`, players);
  //Logging the goal score according to the value given while calling the function:
  console.log(`Total number of goals: ${goals}`);
  //Comparing the odds with logical && operator. The team with the lower odd is more likely to win:
  team1 < team2 && console.log(`${game.team1} is more likely to win!`);
  team1 > team2 && console.log(`${game.team2} is more likely to win!`);
};
printGoals('Kimmich', 'Goretzka', 'Coman');
printGoals(...game.scored); //Taking the value from the 'scored' parameter but separating the elements because the property is an array.
