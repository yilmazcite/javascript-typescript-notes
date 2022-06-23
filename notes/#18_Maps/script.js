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

//SETS AND MAPS (P2)

//MAPS:
/*
•	Maps are more versatile and more useful when compared with sets.
•	Map is a data structure that we can use to map values to keys.
•	In maps, there are key value pairs just like objects.
•	The major difference between objects and maps is that in maps, the keys can be any data type while in objects, the keys are basically strings.
•	In maps, there can be any kind of key like an array, object, or even another map.
•	The easiest way to create a map is to create an empty set and then set the values into it later:
*/

let rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italia');

console.log(rest.set(2, 'Lisbon, Portugal')); //CHECK THIS OUT.
/*
•	Calling the '.set()' method returns the updated map.
•	That is why, when the new change is logged to the console, all of the values inside the map are logged to the console.
*/

//Also, multiple '.set()' methods can be used at once:

rest
  .set('open', 11)
  .set('close', 23)
  .set('Diet Types', ['Vegan', 'Vegetarian'])
  .set(true, 'We are open.')
  .set(false, 'We are closed.');

console.log(rest);

//'.get()' method is used to return a certain element among all the elements inside a map.
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//Conditions can be set to refer to the corresponding keys in maps:
let time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));
/*
•	Here, firstly 'time' value is checked with the value of 'open' by getting its value.
•	So simply checks if 21 > 11.
•	Then checks if 'time' is smaller than the value of 'close' which is 23.
•	The result from here returns true, and that gets the value of the 'true' from the map, which is "We are open.".
*/

console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //logs "We are open."

//To check if the map has a certain key:
rest.has('Diet Types'); //returns 'true' or 'false'.

//To remove a key from the map:
rest.delete(2);

//To clear the whole map:
rest.clear();

//To get the number of elements in the map:
console.log(rest.size);

//Example of using an array (a built-in data structure) as a key of the map:

//Firstly the array will be created and the name of it will be used:
let arrMap = [1, 2];
rest.set(arrMap, 'Array is used as a key.');

console.log(rest.get(arrMap));

/*
•	Another way of populating a new map other than using '.set()' method:
•	Below, an array of arrays is created while creating the map.
Inside the inner array; key & value' pairs are declared.
In each array, there are 2 items; the first item being the 'key' name, and the second item being the 'value'.
*/

let question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

//Converting an object to a map:
let hoursMap = new Map(Object.entries(openingHours));

console.log(question.get('question'));

for (const [key, value] of question) {
  //This loop will look for 'question' and inside the map, the arrays has 2 items.
  //The first item is the key and the second item is the value.
  //That is why, 'key' and 'value' is used here.
  if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}

//Check the prompt input and direct the value via logical operators to either 'true' or 'false' keys in the map...
//...which will return the corresponding answer, 'correct' or 'try again':
let answer = Number(prompt('Your answer:'));
console.log(question.get(answer !== 3) && question.get(answer === 3));

//Or it can be done like this alternatively:
console.log(question.get(question.get('correct') === answer));

//How to convert a map to an array:
console.log([...question]); //Using square brackets and inside the brackets, spread operator is used with the name of the map.

//Also, only the keys or the values of the map can also be converted to an array and stored:
console.log([...question.keys()]);
console.log([...question.values()]);

//CODING EXERCISE CONT'D

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Take the values from the key-value pairs of the 'gameEvents' map.
//Print out the events that happened in the game without duplicating any event:
let events = [...new Set(gameEvents.values())];
console.log(`All the events that occured in the match: ${events}`);

//Removing a key-value pair from the map. (Remove the pair with '64' key and 'Yellow card' value.):
gameEvents.delete(64);

//Calculating the event occuring frequency in the match (Taking the average):
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

//Checking the minutes of when the events happened and finding out if the event happened in the first or the second half:
for (let [key, value] of gameEvents) {
  let half = key <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} HALF] ${key}: ${value}`);
}
