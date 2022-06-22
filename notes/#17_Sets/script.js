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

//SETS AND MAPS (P1)

/*
•	Sets and maps are built-in data structures like objects and arrays.

SETS:

•	A set is basically a collection of unique values.
•	A set can never have duplicates.
•	Sets are iterables just like arrays.
•	Most common iterable to be used with Set() is an array.
*/

//An iterable is assigned to Set():

let ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //All the duplicate elements are gone and only 1 of the repeated elements is logged to the console.

console.log(new Set('String'));

//HOW TO WORK WITH SETS:
/*
•	To get the size of the set '.size' property is used.
•	It is similar to how '.length' works but while getting the size, the repeated items are counted just once.
•	It returns a number.
*/
console.log(ordersSet.size); //logs 3 (not 6)
/*
•	In order to check if a certain element exists in a set, '.has()' method can be used.
•	It is similar to the '.includes()' method.
•	The result returns 'true' or 'false'.
*/
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false
/*
•	New elements can be added to the set with '.add()' method.
•	What is to remember here is that no matter how many times the exact same element is pushed to the same set...
...it is actually added to the set just once because a set is 'a collection of unique values'.
*/
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); //logs "Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}"

//Just as adding elements, it is also possible to remove an element from the set with the help of '.delete()' method:

ordersSet.delete('Garlic Bread');
console.log(ordersSet); //logs "Set(3) {'Pasta', 'Pizza', 'Risotto'}"

//To be able to clear the set completely, '.clear()' method is used.
//ordersSet.clear();  //Check this out.

//HOW TO RETRIEVE VALUES OUT OF A SET:
/*
•	The values in a set cannot be retrieved with indexes like in the arrays because the values in a set do not have indexes.
•	There is no need to get values out of a set.
•	The purpose of using sets are not to retrieve values; it is to check if a certain value is inside the set.
•	And for that, '.has()' method should be used and if a value is asked to be retrieved, an array should be used, rather than a set.
*/

//Since sets are iterable, they can be used in loops:
for (let order of ordersSet) console.log(order);

/*
•	One of the main purposes of using sets is to get rid of the duplicate values inside an array.
•	For example, below, the values are taken from the 'staff' array and the purpose is to get rid of duplicate elements and find the work positions in the array:
*/
let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//Setting a set called 'staffUnique' by using the value of 'staff' array:
let staffUnique = new Set(staff); //Check this out.

//This action returns a set, though, not an array.

console.log(staffUnique); //logs Set(3) {'Waiter', 'Chef', 'Manager'}
/*
•	To convert a set to an array, spread operator can be used because spread operator works on all iterables.
•	To do this, while creating the new Set with 'staffUnique' name, the set should be in square brackets and the 3 dots of spread operator need to be used:
*/
staffUnique = [...new Set(staff)]; //Converting the set to an array
console.log(staffUnique);

console.log(new Set('Breeze')); //logs Set(4) {'B', 'r', 'e', 'z'}
console.log(new Set('Breeze').size); //logs 4
