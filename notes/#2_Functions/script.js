//FUNCTIONS\\

/*FUNCTIONS
    •   Functions are used to repeat a block of codes without repetition. Functions can be named.
    •   A set of paranthesis comes after the name of the function.
    
    Creating and calling a function:
    •   The codes that interest the function should be in curly brackets after the set of paranthesis following the name of the function. This is called creating the function.
    •   When a function is created and is expected to be executed and used, what is necessary to do is just write the name of the function, use a set of paranthesis and a semi-colon. This is called calling the function.

    •   The paranthesis after the function name can be filled with a parameter.
    •   Parameters are not obligatory and yet it might affect the readability of the code if too many parameters are used at once.
    •   If a parameter is defined in a function, the value has to be assigned to the parameter and that value is called argument.*/

//Example:
function getReady() {
  //Creating the function
  alert('Get up.');
  alert('Wash your face.');
  alert('Brush your teeth.');
  alert('Take a shower.');
  alert('Get dressed.');
  alert('Leave.');
}

getReady(); //Calling the function

//Example 2: Fruit Processor Function:
function fruitProcessor(orange, apple) {
  let juice = `Juice with ${orange} orange(s) and ${apple} apple(s).`;
  return juice; //the value returned from the function.
}
let orangeJuice = fruitProcessor(5, 0); //These values go up to orange and apple parameters.
console.log(orangeJuice); //Logs: "Juice with 5 orange(s) and 0 apple(s)."

let appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice); //Logs: "Juice with 3 orange(s) and 2 apple(s)."
//The value captured with return in the function is later stored in the variables (orangeJuice and appleOrangeJuice) in order to be able to use the value of return.

//THE KAREL ROBOT\\
//1)	Functions Challenge – The Karel Robot (http://stanford.edu/~cpiech/karel/ide.html):
//  Objective: Move Karel from left bottom corner to right top corner and take her back to left bottom corner.
function main() {
  moveFwd();
  moveFwd();
  moveFwd();
  moveFwd();
}
function moveFwd() {
  move();
  move();
  move();
  move();
  turnLeft();
}

//2)	Diagonal Move and Put Beeper Challenge – The Karel Robot

function main() {
  putBeeper();
  turnThreeTimes();
  turnThreeTimes();
  turnThreeTimes();
  turnThreeTimes();
}
function turnThreeTimes() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

//3)	Final Karel Chessboard Challenge
function main() {
  finalRep();
  finalRep();
  threeBeepers();
}
function threeBeepers() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  turnLeft();
  move();
  turnLeft();
}
function twoBeepers() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}
function finalRep() {
  threeBeepers();
  twoBeepers();
}

/*
	How to repeat an action in a function:
    •   The set of paranthesis of a function while calling it can be left empty. While creating the function, if a parameter is set in the function, then numbers can be added to the paranthesis of the function while calling it in order to repeat the related action in the requested amount.*/

//How to Get X Bottles of Milk:

function getMilk(bottles) {
  //Define the parameter in the function paranthesis while creating it.
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('moveRight');
  console.log('buy ' + bottles + ' bottles of milk'); //Output: buy 5 bottles of milk.
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}

getMilk(5); //The number stated here calls the related action that many times.

//How to Divide the Given Money and Figure Out the Numbers of Bottles of Milk that Can be Bought with that Money:

function getMilk(money) {
  //The parameter is defined.
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('moveRight');
  var numberOfBottles = Math.floor(money / 1.5); //See below for details
  console.log('buy ' + numberOfBottles + ' bottles of milk'); //Output: buy 3 bottles of milk.
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}

getMilk(5); //The given money here is 5 units. Above, a bottle of milk costs 1.5 units. A new var called numberOfBottles is defined to divide the given money to the cost of a bottle of milk. Math.floor function is also used here in order to get rid of the extra digits after comma and get an exact number. Math.round is used to round the number.

//HOW TO USE A FUNCTION INSIDE ANOTHER FUNCTION (Buying Milk Example)

function getMilk(money) {
  console.log('Go to the market.');
  console.log('Buy ' + calcBottles(money, 1.5) + ' bottles of milk.');

  return money % 1.5;
}

function calcBottles(startingMoney, pricePerBottle) {
  var numberOfBottles = Math.floor(startingMoney / pricePerBottle);
  console.log(
    'You can buy ' + numberOfBottles + ' bottles of milk with your money.'
  );

  return numberOfBottles;
}

var change = getMilk(8);

console.log('Your change is ' + change);
//In the first function, money is the input. Inside the function, money input comes across to calcBottles function with values "money", and "1.5" and goes to 'calcFunction'. Inside this function, 'money' input is equal to the 'startingMoney' input and '1.5' is equal to the 'pricePerBottle' input. Thus the calculation is completed in this second function according to these values, assigned to a variable called 'numberOfBottles', and returned. (Return statement is used to return or call a value from the function.) The change of the money after buying the milk is called with return statement in the first function, and then assigned to a variable called change and it is stated that the change is equal to the value given in the function getMilk as input which is 8 in this example.

//Who’s Buying Lunch Challenge:

function whosPaying(names) {
  let numberOfPeople = names.length;
  let randomPersonPicker = Math.floor(Math.random() * numberOfPeople);
  let randomPerson = names[randomPersonPicker];
  return randomPerson + ' is going to buy lunch today!';
}
let names = ['Jack', 'John', 'Ava', 'Barbara'];
whosPaying(names); //Barbara is going to buy lunch today!
whosPaying(names); //John is going to buy lunch today!

//How to Calculate How Many Days, Weeks, and Months Left in Someone’s Life:

function lifeInWeeks(age) {
  var daysLeft = 32850 - age * 365;
  var weeksLeft = 4680 - age * 52;
  var monthsLeft = 1080 - age * 12;
  console.log(
    'You have ' +
      daysLeft +
      ' days, ' +
      weeksLeft +
      ' weeks, and ' +
      monthsLeft +
      ' months left.'
  );
} //Calculation is made considering one can only live up to 90 years.

LifeInWeeks(24); //Age is the input.

//USING STRINGS AND TEMPLATE LITERALS:

yourName = 'Regina';
yourLastName = 'Phalange';
yourAge = 32;

let youAre =
  'I am ' +
  yourName +
  ' ' +
  yourLastName +
  ' and I am ' +
  yourAge +
  ' years old.';

console.log(youAre);
//Above, the variables are connected and with the help of "+" and the space between words need to be taken into consideration. It may get a little confusing as the variables or the concatenations get complicated.

//Using templates makes this easier. (variables from above applied here.)

youAre = `I am ${yourName} ${yourLastName} and I am ${yourAge} years old.`;

console.log(youAre);
//Instead of using double quotes, like in the first one, backticks (`) are necessary for templates. While using the variables inside the backticks, a dollar sign is used and the name of the variable, or any expression, goes into curly braces. No further use of "+" is needed to concatenate.

/*********/ /*********/

//FUNCTIONS PART 2\\

//FUNCTION DECLARATIONS VS. FUNCTION EXPRESSIONS:
/*
    •   Functions can be created in different formats. Previous examples in the notes used function declarations. It is simply because functions were declared. The name coming after 'function' is the declaration of the function.
    (function yourAge(){…} is a function declaration)*/

function calcBirthYear(yourAge) {
  //function is declared with calcBirthYear
  return 2022 - yourAge;
}
let birthYear1 = calcBirthYear(25);
console.log(birthYear1); //1997

let calcBirthYear2 = function (yourAge) {
  return 2022 - yourAge;
};
let age2 = calcBirthYear2(27);
console.log(age2); //1995	//In this function, a variable is declared to the function and as a result, the value that will return from the function will be stored in the variable. Since a function is an expression, which means it holds a value, it is possible to assign that value to a variable. This is why, it’s called function expression. Once that is done, the variable name is used to call the function in the end just like calling the function (calcBirthYear2(27);). Simply, it is a function value which is stored in a variable.
/*
	•   MAJOR DIFFERENCE between function declaration and function expression is that with function declarations, function can be called before the block of codes of creating the function/declaring the function but with function expression, "creating the function" must come first and the "calling the function" action must always come later than that.

    ARROW FUNCTIONS:

    •	Arrow functions are function expressions that are shorter and as a result, faster.
    •	To continue with the previous 'birthYearCalculation' example: */
yourAge => 2022 - yourAge; // This is simply an arrow function. Before the arrow, the parameter of the function (yourAge) is used. What will be returned from this function is expressed after the arrow (=>). But again, to be able to use what’s returned from the function, a variable should be assigned to this function like below:
let birthYear3 = yourAge => 2022 - yourAge; //Variable is assigned to function.
let yourBirthYear = birthYear3(28);
console.log(yourBirthYear); //1994
/*    
    •	Curly braces aren’t needed in arrow functions and as seen above, return actually runs behind the scenes so return statement is also not needed, all of which make arrow functions shorter and faster.
    •   Curly braces and return can be left out only if the arrow function is a one-liner. For a longer block of code, both are required.*/

//Example (cont’d) (to calculate how many years left until retirement (one-line)):
let yearsLeftToRetire = yourAge => 65 - yourAge;
let retirement = yearsLeftToRetire(20); //45
console.log(retirement); //or the result can be directly logged to the console as follows:
//console.log(let retirement = yearsLeftToRetire(20));

//Example (cont’d) (to calculate how many years left until retirement (multi-lined)):

let yearToRetire = yourAge => {
  //yourAge is the parameter of the function.
  let yourBirthYear = 2022 - yourAge;
  let yourRetirementYear = yourBirthYear + 65;
  return yourRetirementYear;
};
console.log(yearToRetire(20)); //2067

//If more than one parameter is to be used, the names of the parameters can be written in paranthesis and a comma after each parameter is necessary. Example:
yearToRetire = (yourName, yourBirthYear, currentYear) => {
  let retirementYear = yourBirthYear + 65;
  let yearsUntilRetirement = retirementYear - currentYear;
  return `You, ${yourName}, will retire in ${retirementYear} so there are ${yearsUntilRetirement} years until your retirement.`; //A string like this can also be returned.
};
console.log(yearToRetire('Jack', 1990, 2022)); // "You, Jack, will retire in 2055 so there are 33 years until your retirement."
console.log(yearToRetire('John', 1972, 2022)); // "You, John, will retire in 2037 so there are 15 years until your retirement."

//Retirement calculation example improved (with function within another function):

let age = function (yourBirthYear) {
  return 2022 - yourBirthYear;
};

yearsLeftToRetire = function (yourBirthYear, yourName) {
  let yourAge = age(yourBirthYear); //this 'yourBirthYear' refers to the first function called 'age.'
  let retirement = 65 - yourAge;

  if (retirement > 0) {
    console.log(`${yourName}, you have ${retirement} years left to retire.`);
    return retirement;
  } else {
    console.log(`${yourName}, you are already retired.`);
    return -1;
  }
};
console.log(yearsLeftToRetire(1955, 'David'));
console.log(yearsLeftToRetire(1988, 'Matt'));

//(Challenge) TAKE AVERAGE OF 3 SCORES OF 2 TEAMS AND FIND OUT WHO WINS:

//(Condition: A team can only win if their average score, doubled, is greater than or equal to the average score of the other team, not doubled.)

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3; //First function that calculates the average		//Arrow function is created.

//Scores of each team are stored in variables.
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(165, 524, 455);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win. (${avgDolphins} vs. ${avgKoalas})`);
    return avgDolphins;
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win. (${avgKoalas} vs. ${avgDolphins})`);
    return avgKoalas;
  } else {
    console.log('Nobody wins.');
  }
}
checkWinner(scoreDolphins, scoreKoalas); //this one takes the data from the assigned variables.
checkWinner(522, 108); //this one takes these two values to with the function parameter.
