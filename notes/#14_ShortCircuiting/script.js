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

//SHORT CIRCUITING (&& AND ||)

//Logical operators can use ANY data type, return ANY data type and also do short-circuiting (short-circuit evaluation).

/*
|| (OR) Operator:

•	Short-circuit evaluation simply means that if the first of the given values with || (or) operator is true, it will immediately return that value.
•	See comparisons below:
*/
console.log('--- || OPERATOR ---');
console.log(5 || 'Bird'); //logs 5
console.log('' || 'Bird'); //logs 'Bird'
console.log(true || 0); //logs true
console.log(undefined || null); //logs null
console.log(undefined || 0 || '' || 'hello' || 23 || null); //logs 'hello'

//Short-circuit evaluation helps setting default values faster and easier than having to deal with ternary operators or even if-else statements:

//There is not a property called 'numGuests' in the 'restaurant' object. That is why, the ternary operator accepts the second condition, 10, to be stored in 'guests1' variable:
let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//Instead of using a ternary operator, short-circuiting can be used in this situation:
let guests2 = restaurant.numGuests || 10;
console.log(guests2);

/*
&& (AND) Operator:
*/

console.log('--- && OPERATOR ---');

//	&& operator works exactly like how || operator works.
//&& operator looks for the first falsy value and returns it immediately.
console.log(0 && 'Cat'); //logs 0
console.log('Dog' && undefined); //logs undefined
console.log(14 && 'Cat'); //logs 'Cat' because the && operator checks each value one by one and if all the values are true, it returns the value which is at the end.
console.log('Hello' && 23 && null && 'Dog'); //logs null

//Practical example:
//If it is not known whether the object has a property called 'orderPizza', usually it can be checked with an if statement, and if 'true' (meaning that the property exists), call the function.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
/*
•	Instead of using an if statement, the short-circuit can be used.
•	Firstly, restaurant.orderPizza is checked by the && operator.
•	The operator checks it and if it is true, it will skip it and will check the second value and will execute the function.
•	Because even if also the second value is true, it would not matter anymore because, as stated before, the last value is returned if all the values are true.
*/
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Also note that even though it is practical and fast to use short-circuit evaluation in such cases, it is not a very good coding practice to use it too frequently because of lack of readability.

/*
The example from above cont'd:
•	The value of restaurant.numGuests is set to 0 as a default value but the || operator still will return 10 in this scenario because it will accept 0 as a falsy value. •	The result can be wrong or misleading in this case.
*/
restaurant.numGuests = 0;
let guests = restaurant.numGuests || 10;
console.log(guests); //logs 10 instead of 0
//In such situations, 'nullish coalescing operator (??)' can be used.

/*
Nullish Coalescing Operator (??):

•	It works almost like the || operator but it fixes the possible problem.
•	Nullish coalescing operator actually checks for the 'nullish' values instead of 'falsy' values.
•	That is why, this operator does not treat 0 (zero) or '' (empty string) as falsy values.
•	It only checks whether the values are 'null' or 'undefined'.
•	This operator checks the values and returns the first non-nullish value.

•	Nullish values: null and undefined (not 0 or '')
*/

let guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //logs 0
console.log(null ?? 22 ?? 66); //logs 22
console.log(undefined ?? 'String' ?? null ?? 27); //logs "String"
