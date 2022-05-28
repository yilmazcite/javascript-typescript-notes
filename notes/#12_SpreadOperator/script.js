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

//THE SPREAD OPERATOR

//The spread operator is used to expand an array into all of its elements.
//(It can actually be used with all iterables (arrays, strings, maps, sets).

let arr1 = [7, 8, 9];
//If 3 more items are to be added into the beginning of this array, it can be done with the spread operator:
let newArr = [1, 2, 3, 'spread', ...arr1]; //1, 2, 3, and ‘spread’ are the new items.
console.log(newArr);
/*
•	So basically, the spread operator takes all the elements/items from the selected array as if all the items were written one by one.
•	The spread operator takes all the elements OUT of the array and writes them manually.
*/

//•	See the difference between console.log(newArr) and (...newArr):
console.log(newArr); //Returns an array.
console.log(...newArr); //Returns each element individually.

//A quick example of using the spread operator with a string and adding new elements:
let str = 'John';
letters = [...str, 29, 'X'];
console.log(letters);

let newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
//In this example, the spread operator is used on the 'restaurant' object's 'mainMenu' property and 'Gnocchi' is added to the mainMenu array. The updated version of the 'mainMenu' array is stored into 'newMenu'.

/*
!!!Spread operator takes all the elements from an array but it does not create a variable!!!
!!!That's why, it can only be used in situations where values separated by commas are to be used!!!
*/

//Creating shallow copies of arrays and merging arrays:

//Copy an array:
let mainMenuCopy = [...restaurant.mainMenu];

//Merge arrays:
let menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuAll);

//Accepting a function that takes multiple arguments and using spread operator to pass those arguments:

//Three prompts that ask the user 3 ingredients for the pasta and store the return values into 'ingredients' array:
let ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
/*
•	The 3 ingredient parameters in the 'orderPasta' function is replaced with the 'ingredients' variable here.
Instead of stating the prompt values one by one (like 'restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);'), the spread operator is used on the variable to use all of its elements individually.
*/
restaurant.orderPasta(...ingredients);

//Spread operator with objects:

//With '...restaurant', the already declared values of the 'restaurant' object is copied to newRestaurant variable and an additional 'founder' property with a string value is also stored into the new array:
let newRestaurant = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

/*
•	Another copy of the 'restaurant' object is created and called 'restaurantCopy'.
•	The value of the 'name' property inside the copied object is changed to 'Ristorante Roma'.
•	However, the value of the 'name' property in the original object, 'restaurant', does not change and remains with the original value, 'Classico Italiano':
*/
let restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);
