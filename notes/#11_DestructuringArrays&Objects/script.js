//DESTRUCTURING ARRAYS AND OBJECTS

/*Destructuring Arrays:

•	Destructuring an array is simply unpacking values from an array.
•	This way, a value can be reduced into a smaller piece of data structure like a variable.
•	The items of the array below can be broken into smaller pieces for further separate use.
*/

let arr = [0, 1, 2]; //An array with three items to be destructured.

//Destructuring the 'arr' array:
let a = arr[0]; //a = 0;
let b = arr[1]; //b = 1;
let c = arr[2]; //c = 2;

//Instead of doing this separately, the variables can be declared at the same time:

let [x, y, z] = arr;
console.log(x, y, z);

//Destructuring explained through the 'restaurant' object below:
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
/*
•	Taking elements from the 'restaurant' object.
•	Since there are more than 2 variables that are declared, the first two elements from the object will be extracted:
*/
const [first, second] = restaurant.categories;
console.log(first, second);

//If an element among the other elements is required to be skipped, an empty set of comma is used in the corresponding order.
const [one, , two, three] = restaurant.starterMenu;
console.log(1, one, `the second item is skipped.`, 2, two, 3, three);

//If two items are to be switched places:
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receiving 2 return values from a function and storing them into the variables:
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Destructuring a nested array:
const nested = [2, 4, [5, 6]];
let [i, , [j, k]] = nested;
//The second item '4' is skipped. And for the nested array, the last two variables are used within another set of square brackets.
console.log(i, j, k);

/*
•	The number of items in an array cannot be always known.
•	For instance, there might be an array with 2 items and if 3 variables are declared for the destructuring, the last item (or any one of the items) will return undefined.
•	Setting default values to the declared variables can help in this situation.
*/
let [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Destructuring Objects:

/*
•	Objects as well as arrays can be destructured.
•	To destructure an object, this time, curly braces are used instead of square brackets.
•	Firstly, the name of the property is required in the curly braces.
•	If a specific name is to be given to that property and create a variable, then it can be declared after the name of the property with a column:
*/
let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Or it could just simply be the property names:
let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
/*
•	Setting a default value for menu and starterMenu.
•	Since 'menu' does not exist in the object, it returns undefined.
•	The elements within 'starterMenu' are stored into 'starters' which is already primarily declared with a default value.
•	Setting a default value is very helpful when there is not a previously coded data.
*/

let { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables while destructuring objects:
let m = 111;
let n = 999;
let obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //a: 23, b: 7

/*
•	Working with nested objects:
•	From the 'openingHours' object, the opening and closing hours of day 'fri' is to be extracted.
•	Since the hours are also nested inside the object,  another set of curly braces are used for 'open' and 'close'.
•	They are also stored into variables, 'opensAt', and 'closesAt':
*/
let {
  fri: { open: opensAt, close: closesAt },
} = openingHours;
console.log(opensAt, closesAt);

/*
•	It is quite handy to pass objects as arguments to functions.
•	The objects given as parameters are immediately destructured when the function is called.
•	When there are too many parameters in a function, it can be difficult to remember or keep track of the order of the parameters.
•	Using an object with the necessary properties can help in such cases because the order of the parameters and the order used while calling the function do not necessarily need to match one another.
*/
restaurant.orderDelivery({
  time: '22:45',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
/*
•	Only 1 object is passed into the function, not 4 separate arguments.
•	And the properties of this object are not in the exact same order that is used while creating the function but it does not matter.
*/
