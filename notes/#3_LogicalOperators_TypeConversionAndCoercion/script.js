//EQUALITY OPERATORS, BOOLEAN LOGIC, AND TYPE CONVERSION & TYPE COERCION\\

//EQUALITY OPERATORS: == VS. ===
/*
•   These operators are used to find out if two values are equal.

•   The difference between double equation and triple equation is simply the restriction.
•   Triple equation is highly strict and requires both of the values that will be compared to be exactly the same, both as a value and as a value type. If a string is compared to a number, triple equation will not work.
•   Double equation, since it is more lenient and loose, is able to do type coercion on its own which triple equation does not do.

•	(Double equation may cause bugs which might be difficult to determine. That is why, it is better code practice and it is considered as clean code to use triple equation in general. It is also better to convert the type of the value or whatever value that is needed manually than to wait for double equation to do it behind the scenes.
        (See more about type conversion and coercion.))*/

//Example:
age = 18; //typeof: number
if (age === 18) console.log('You are 18.');
//The value of the variable is exactly the same with the value given in the if condition. Also the value types are the same. As a result, it works properly.

//Example:
age = '18'; //typeof: string
if (age === 18) console.log('You are 18.');
//The value type of the variable is a string and the value given in the if condition is a number. They do not match and triple equation strictly refuses to compare them and fails to do the equation.

//Example:
age = 18; //typeof: number
if (age == 18) console.log('You are 18.');
//The value of the variable is exactly the same with the value given in the if condition. Also the types of values are the same. As a result, it works properly just like it does with triple equation.

//Example:
age = '18'; //typeof: string
if (age == 18) console.log('You are 18.');
//The value type of the variable is a string and the value given in the if condition is a number. They do not match but double equation, which is not that strict, converts the string into a number, knowing that this string only contains numbers. Then, it considers the variable as a number and the if condition works properly. That is why, double equation is more lenient than triple equation.

//INEQUALITY OPERATORS: != VS !==
/*
•   They are used to define whether both given values are not equal.
•   It works the same way as the equality operators work. != is the loose, more lenient way and !== is the strict version.*/

//BASIC BOOLEAN LOGIC: AND (&&), OR (||), NOT (!):
/*
•   Two or more values can be compared and found out if they are true or false at the same time.
•	If there are two conditions, and "and" is used, then both of the conditions must be true for the output to be true.
•	If there are two conditions, and "or" is used, then it is enough for at least one of the conditions to be true for the output to be true.
•	If there are two conditions, and "not (!)" is used, then it simply converts the value either from true to false or from false to true.*/

//Example:
age = 18;
/*  A: age is greater than 20	    //FALSE
    B: age is less than 30		//TRUE
    A and B = FALSE (because one of the conditions is false.)
    A or B = TRUE (because at least one of the conditions is true.)
    !A = TRUE (because A is originally false but 'not' operator converts it to true.)
!A and B = TRUE (because !A becomes true)
A or !B = FALSE (because A is originally false and B is converted and becomes also false.)*/

//Example:
yourAge = true;
yourDrivingLicense = true;
isTired = false;
if (yourAge && yourDrivingLicense && isTired) {
  console.log('You can drive.');
} else {
  console.log('You can’t drive.');
} //The output here goes for "else" because value of 'isTired' is false and it does not meet the requirements of if condition. 'Not' operator can be used to invert 'isTired'.

if (yourAge && yourDrivingLicense && !isTired) {
  console.log('You can drive.');
} else {
  console.log('You can’t drive.');
} //The output here goes for "if" because the the value of 'isTired' is converted and now it is true just like every other value and they meet the requirements.

//Coding Challenge:

averageKoalas = (88 + 91 + 110) / 3;
averageDolphins = (96 + 108 + 89) / 3;
console.log(averageKoalas, averageDolphins);
if (averageKoalas > averageDolphins) {
  console.log('Koalas win!');
} else {
  console.log('Dolphins win!');
}

//TYPE CONVERSION & TYPE COERCION:

/*Type Conversion:

•   In JavaScript, it is possible to convert the values of some certain data types. A string, for instance, can be turned into a number. (That might be necessary to perform a calculation.) The data types that can be converted are string, number, and boolean. These three data types can be converted.*/

//Example:
yourAge = '25'; //This is a string.
myAge = 23; //This is a number.
calcAges = yourAge + myAge; //Result would be 2523. Two values can’t be summed because one of them is a string.
letCalcAges = Number(yourAge) + myAge; //with "Number" function, the string is converted to a number.
//With the same logic, to convert a number into a string, we need the "String()" function. The initial of the function should be capitalized.

/*Type Coercion:

•   Type coercion is simply JavaScript performing the data type conversion on its own automatically behind the scenes.
•   For example, when concatenating multiple strings and numbers, JavaScript will actually convert numbers into strings automatically.*/

//Example:
console.log('I have been living here for ' + 4 + ' years and counting.'); //4 is converted to a string in the result.
//Plus (+) operator triggers the number to turn into a string in such a scenario but minus operator triggers the opposite conversion and turns strings into numbers in a similar case.

//Example:
console.log('23' + 45 + '1'); //"23451" Here 45 is a number and 23 and 1 are strings but plus operator turns 45 also to a string and concatenates the values.

console.log('23' - 45 - '1'); //"-23" Here also 45 is a number and 23 and 1 are strings but minus operator turns 23 and 1 into numbers and triggers a calculation.

//Example:
let x = '1' + 1; //11, typeof: string
x = x - 1; //10, typeof: number

//Example:
2 + 3 + 4 + '5'; //95 > 2, 3, and 4 are numbers here so they are calculated and the result is 9. Then 9 and "5", which is a string, are concatenated.
'9' - '1' - '4' - 2 + '55'; //255 >	 9, 1, and 4 are strings here but the minus operators treats them as numbers and makes a calculation and also uses the number 2. The result from this calculation is 2 and then the result is concatenated with 55 which is a string (not mathematically calculated).

//(Challenge) FINDING OUT THE LEAP YEAR (WITHOUT A LOOP):

//SOLUTION 1:
function isLeap(year) {
  var result = '';
  if (year % 4 === 0 && !(year % 100 === 0)) {
    result = 'Leap year.';
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    result = 'Leap year.';
  } else {
    result = 'Not leap year.';
  }
  return result;
}
isLeap(2000); //Leap year.
isLeap(2100); //Not a leap year.

//SOLUTION 2 (IF STATEMENTS INSIDE ONE ANOTHER):
function isLeap(year) {
  var result = '';
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result = 'Leap year.';
      } else {
        result = 'Not a leap year.';
      }
    } else {
      result = 'Leap year.';
    }
  } else {
    result = 'Not a leap year.';
  }
  return result;
}
isLeap(2000); //Leap year.
isLeap(2100); //Not a leap year.
