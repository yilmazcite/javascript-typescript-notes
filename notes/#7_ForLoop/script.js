//THE FOR LOOP\\

/*
//•	Loops are used to run certain blocks of codes multiple times.
•	There are three essential parts of a for loop: 
•	Firstly, the counter which sets the initial value,
•	secondly, the condition which is used to define the ending condition of the loop,
•	And the final part is like a counter which decides on the repetition frequency.*/

for (let rep = 1; rep <= 10; rep++) {
  console.log(`The repetition for now is ${rep}`);
}
/*
•	For loop is created with a set of paranthesis in which the conditions of the loop are set, and a set of curly braces for the code to be executed.

•	In the paranthesis, after each part, a semicolon is necessary except the last one.
•	In the first part, rep, in this example, is the starting point of this loop, which is 1. This can be any number.

•	Assigning this starter value to a variable is required to be able to use the value.
•	The variable name of the initial value is commonly used as  "index" or just "i" which stands for "index".

•	The second part, 'rep <= 10;', is a condition until when the loop will be running. 
•	In this case, the loop will keep running until rep is smaller than or equal to 10.
•	For loop keeps running until the condition, in the middle, is FALSE. 

•	And the final part, rep++, is used to decide on the repetition frequency of the initial value.
•	In this scenario, rep will be counting and increasing the initial value of rep by 1.
•	This loop will stop when the value of rep becomes 10.*/

for (let i = 0; i < array.length; i++) {
  console.log('Code here');
}

//Looping Arrays, Breaking, and Continuing:

//When working with arrays, for loops are quite useful because they get rid of the unnecessary the repetition.

let array = [44, 'Stormtrooper', 555, 'ocean', false]; //an array with 5 items
for (let i = 0; i < array.length; i++) {
  console.log(array[i], typeof array[i]);
}
/*Output:
44 'number',
Stormtrooper string,
555 'number',
ocean 'string',
false 'boolean'	*/
/*
•	In this loop, the iteration keeps continuing according to the item number of the array.
•	The loop keeps running until i is smaller than the array length.
•	The starting point is 0 because the first item in an array has an index of 0. They should match.
•	Typeof is used for each item in the array, in this example. 

•	It is also possible to create an empty array outside the loop, and then assing the returning typeof value inside that empty array with the help of the loop.*/

let dataTypes = []; //empty array is assigned.
array = [44, 'Stormtrooper', 555, 'sss', false];

for (let i = 0; i < array.length; i++) {
  console.log(array[i], typeof array[i]); //inside the square brackets of the array comes the variable of the starter value.
  dataTypes[i] = typeof array[i]; //assigns each typeof value to the empty array as the loop repeats itself.
}
console.log(dataTypes); //logs the typeof of each item in the array.
// (5) ['number', 'string', 'number', 'string', 'boolean']
/*
•	Instead of "dataTypes[i] = typeof array[i];", it is also possible to use .push() method to add the typeof values to the array in order: dataTypes.push(typeof array[i]); This is a bit cleaner version but both options are fine. 
•	Another example of a .push method used in the same logic:*/

let ages = []; //empty array
for (let i = 0; i < birthYears.length; i++) {
  ages.push(2022 - birthYears[i]);
}
console.log(birthYears); // (4) [1992, 2005, 1954, 1899]
console.log(ages); // (4) [30, 17, 68, 123]

//Continue and Break Statements in For Loop:
/*
•	Break is used to stop executing the whole loop.
•	For instance, a loop can be instantly stopped after a certain condition or a certain criteria is met.

•	Continue is used to stop executing the first iteration and continue with the second iteration. 
•	A condition is given with a continue statement and the loop either runs according to the given condition, if TRUE, or the other way around, if FALSE.*/

//Continue:
console.log('Only print out STRINGS');
array = [44, 'Stormtrooper', 555, 'ocean', false, 'white'];
let stringsHere = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== 'string') continue; //the condition is stated and the loop is executed according to whether this condition is true or false.
  stringsHere.push(array[i]);
}
console.log(stringsHere); // (3) ['Stormtrooper', 'ocean', 'white']

console.log('Only print out NUMBERS');
array = [44, 'Stormtrooper', 555, 'ocean', 5463, 'white'];
numbersHere = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'string') continue;
  numbersHere.push(array[i]);
}
console.log(numbersHere); // (3) [44, 555, 5463]

//Break:
console.log("STOP the loop before 'ocean'");
array = [44, 'Stormtrooper', 555, 'ocean', 5463, 'white'];
let beforeOcean = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 'ocean') break;
  beforeOcean.push(array[i]);
}
console.log(beforeOcean); // (3) [44, 'Stormtrooper', 555]

//Looping Backwards and Loops in Loops:

//Looping Backwards:
/*
•	Items in arrays are used in a loop in their regular order. 
•	If an array wants to be used in a loop backwards, the last item in the array can be treated as the first item, as if it has the index of 0.*/
let yourInfo = [
  'Trevor',
  '25',
  'Traveller',
  'Canadian',
  ['Mexico', 'New Zealand', 'Japan', 'Morocco'],
];
for (let i = yourInfo.length - 1; i >= 0; i--) {
  //This time, the index, the starting point is declared by using the length of the array minus 1 (because there are 5 items in an array but the index of the last item is 4 due to the fact that array items have a starting index of 0.)
  //Then the repetition condition is set. This condition means "run the loop as long as i is greater than or equal to 0."
  //It stops at 0 (zero) because that will eventually be the last item in the array.
  //And for the repetition amount, this time decrement is used instead of increment because the array is looping backwards.
  console.log(yourInfo[i]);
} // (4) ['Mexico', 'New Zealand', 'Japan', 'Morocco'], Canadian, Traveller, 25, Trevor

//Loops in Loops:

//It is possible to use another loop in a loop.
for (let exercise = 1; exercise < 4; exercise++) {
  //The actual loop.
  console.log(`***Starting exercise ${exercise}***`);
  for (let repetition = 1; repetition < 5; repetition++) {
    //Loop inside.
    console.log(`Exercise ${exercise}: Exercise repetition ${repetition}`);
  }
}
