//ARRAYS
/*
•	Arrays are used to store multiple values within one variable. The items are listed in the square brackets with a comma after each item. Different data types can be used at the same time in a single array (like a string and a number).*/
//Example:
let yourName = ['Phil', 'Claire', 'Gloria', 'Jay']; //4 items in an array.
console.log(yourName[0]); //logs "Phil" because the first item from the array is requested. Square brackets are also necessary in here to call for the item.

//The index of array items start from 0. That means the item 1 in every item has an index of 0, the item 2 has an index of 1 and so on and so forth...

console.log(yourName[2]); //logs "Gloria".
/*
  •	To find out if an array has an item, ".includes()" function is used.
  • yourName.includes("Jay") checks if the array of yourName variable has an item as "Jay" and returns a boolean value determining whether it is true or false.*/

//Ask the user for their name and check if their name is in the guest list or not:
//Example:

let givenName = prompt('What is your name?');
yourName = ['Phil', 'Claire', 'Gloria', 'Jay', 'Cameron', 'Mitchell'];

if (yourName.includes(givenName)) {
  //.includes() function is used with the prompt input.
  console.log('Your name is in the guest list. Welcome!');
} else {
  console.log('You are not invited. You cannot come in.');
}
//Prompt: Gloria  >   Your name is in the guest list. Welcome!
//Prompt: Jack    >   You are not invited. You cannot come in.

/*
•	An array can be left empty while being created. The items can be added to the array later.
• For that .push() function is required.*/

//Example:
let emptyArray = []; //Empty array has been created.
emptyArray.push('salt', 'pepper'); //Two items have been added to the array. This time regular paranthesis are used.
console.log(emptyArray[1]); //logs "pepper".
/*    
•	As many items as requested can be added to an array with .push() function.
• It can also be performed multiple times.
• What is to remember here is that what is added later to the array with .push() always comes to the end so it is pushed to the end. It does not find a place in the array randomly in the beginning or in the middle. For that, different methods are used.*/

emptyArray.push(55, 22, 'item', 'statue');
console.log(emptyArray); //55, 22, and "item" are items that are added to the array later. So what is logged to the console here is in this order: "salt", "pepper", 55, 22, "item", "statue"

//•	To add a new item in the beginning of the array, .unshift() function is used.
emptyArray.unshift('First'); //this item now comes first in the array.
/*
•	Just as adding new items to an array, it is also possible to remove an item from an array.
•	.shift() function removes the first item of the array and also returns it.
•	.pop function pops off only the last item from an array. So, if emptyArray.pop is used, then the last item will be removed which is "statue" in this array.
•	The number of items in an array can be easily found out with .length function. In the same example, emptyArray.length would return an item number of 6.*/

//How to Store Multiple Values in one Variable using JavaScript Arrays:
var personalInfo = ['Huggsy', 12, 'Manhattan'];
//How to Nest an Array within Another Array:
var data = [
  ['Tokio', 25],
  ['Istanbul', 23],
];

//Game of FizzBuzz

let output = []; //An empty array is created.
let countNumber = 1; //A variable is created to increase the value by 1 later.

function fizzBuzz() {
  if (countNumber % 3 === 0 && countNumber % 5 === 0) {
    output.push('FizzBuzz');
  } else if (countNumber % 3 === 0) {
    output.push('Fizz');
  } else if (countNumber % 5 === 0) {
    output.push('Buzz');
  } else {
    output.push(countNumber);
  }
  countNumber++; //Is used to increase the value of every new item by 1.
  console.log(output);
}
fizzBuzz(); //To be executed each time.

//FizzBuzz Solution with a While Loop:

let finalNumber = 1;
while (finalNumber <= 100) {
  if (finalNumber % 3 === 0 && finalNumber % 5 === 0) {
    console.log('FizzBuzz!');
  } else if (finalNumber % 3 === 0) {
    console.log('Fizz!');
  } else if (finalNumber % 5 === 0) {
    console.log('Buzz!');
  } else {
    console.log(finalNumber);
  }
  finalNumber++;
}
