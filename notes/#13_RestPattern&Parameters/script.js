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

//REST PATTERN AND PARAMETERS

/*
•	Syntax of rest pattern looks exactly like the spread operator.
•	It has the exact same syntax with 3 dots; however, what it does is the opposite of spread operator.

•	Spread operator is used to build new arrays or to pass multiple values into a function.
•	But in both cases, spread operator is actually used to separate elements and use them individually.
•	Rest pattern is used to pack elements into an array.

•	Spread operator is used on the right side of the = operator.
•	Rest can be used on the left side of = opeator.
*/

let [value1, value2, ...others] = [1, 2, 3, 4, 5];
console.log(value1, value2, others);
/*
•	The first two values are stored in 'value1' and 'value2' and the Rest is packed together in 'others' as an array.
Rest collects the unused values.
*/

/*
• Two of the food elements are selected and stored from 'mainMenu' and 'starterMenu' parameters of the 'restaurant' object.
• The declared elements (pizza, risotto etc.) start to take the elements from the first selector, which is '...restaurant.mainMenu' in this example.
• The element between 'pizza' and 'risotto' is skipped. And the rest of the elements are stored in 'otherFood'.
*/
let [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
/*
•	The skipped elements are not included to the rest package.
•	Rest should always be used in the end. If another variable is declared after the rest operator, it returns an error.
*/

//Using REST with OBJECTS:
let { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekend, weekdays);

//REST with FUNCTIONS:
/*
•	Rest syntax takes multiple values and gathers them in one array.
•	Without the Rest operator, the number of parameters given in the function should match the number of values given while calling the function.
•	In the parameter of the function, the rest operator is used so that the number of values given while the function is being called does not matter.
*/
let add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
add(2, 3);
add(5, 3, 7, 2);
add(2, 1, 5, 3, 8, 7, 6, 5);

/*
•	An array with 3 items are created.
•	If the values inside this array are to be used with the 'add' function via the name of the variable, ‘xy’,...
•	...firstly the spread operator is used at 'add(...xy)' and then as the parameter of the function, the rest operator is used.
•	So simply, the values of xy variable are firstly spreaded and then brought back together.
*/
let xy = [23, 5, 7];
console.log(add(...xy));

/*
•	In the 'orderPizza' function in the 'restaurant' object, the first parameter becomes the 'mainIngredient'.
•	And as many values as the user wants can be used while calling the function.
•	That's because after the first value, which is stored in the mainIngredient, the rest of the values will be stored in 'otherIngredients' no matter how many.
•	The rest operator is used for that.
*/
restaurant.orderPizza('tomato', 'mushrooms', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
