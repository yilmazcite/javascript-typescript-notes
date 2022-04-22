//SOME SUPER BASICS OF JAVASCRIPT\\

/*  •   Strings, numbers, typeof, and booleans are some data types used in JavaScript.
	•   What’s between quotes"" is called a 'string'. "Hello" and "54%3" are strings.
	•   Boolean is a data type that describes whether the data is 'true' or 'false'.
	•   'Typeof' is another data type that returns the data type of requested value.*/
//Example:

typeof 'Hello 12%34'; //Returns "string"
typeof true; //Returns "boolean"

/*  •   To create a pop-up, use alert("Your text here");
    •   Prompt is used to create a pop-up which the user fills in.*/
//Example:

prompt('What is your name?');

/*********/ /*********/

/*
    •   Var/Let/Const are different ways of defining variables.

    •   Var is the oldest way to define variables while let and const are modern ones.
    •   With var and let, the variable can be defined and changed later if necessary. It is also possible to give empty values to var and let (undefined value which can be assigned to the variable later).
    • On the surface let and var seem to be quite similar but they actually differ a lot in the details.
    
    •   With const, the value of the variable is unchangeable. It is constant. Once it is defined, the value is to be remained that way all the time.
    •	When a value is assigned to a variable (ex: var myName="Jude";), var/let is to be used just for the first time the variable is being created. If it is wanted to change the value of the variable later on, a second var/let is not necessary. Just typing "myName='Jill';" is enough for the change.

    •	The name of your variable CANNOT be "var", cannot include spaces and cannot start with a number. The name of the var can only include letters, numbers, $ and _ (dollar sign and underscore).

/*********/ /*********/

/*  .length PROPERTY:
    •	To retrieve/count the number of characters, .length property can be used after the name of the variable.*/
//Example:
var myName = 'Phoebe Buffay';
myName.length; //13

/*.slice() METHOD:
    •   To remove or slice down parts of a string, .slice method is used. the characters to be sliced are specified. The count always starts from zero.
    Example:*/
var myName = 'Alessandro';
myName.slice(0, 4); //Output is: "Ales"
var myName = 'Alessandro';
myName.slice(0, 1); //Output is: "A"

//How to count the number of characters in a tweet:
var yourTweet = prompt('Your tweet:');
var tweetCount = yourTweet.length;
alert(
  'The length of your tweet is ' +
    tweetCount +
    ' characters. You have ' +
    (280 - tweetCount) +
    ' characters left.'
);

//How to cut down a tweet after 140 characters with .slice property:
yourTweet = prompt('Your tweet here:');
var tweetUnder140 = yourTweet.slice(0, 140);
alert(tweetUnder140);

/*********/ /*********/

//.toUpperCase() property turns all the letters in the string into upper case.
//Example:
myName.toUpperCase();
//.toLowerCase() property turns all the letters in the string into lower case.
myName.toLowerCase();

//How to display the user’s name only with the first letter capitalized:
var yourName = prompt('What is your name?');
var firstChar = yourName.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = yourName.slice(1, yourName.length);
var finalizedName = upperCaseFirstChar + restOfName;
alert('Hello, ' + finalizedName + '. Welcome!');

/*********/ /*********/

//How to Form a Dog Age to Human Age Formula:
var inputDogAge = prompt('How old is your dog?');
var dogAge = inputDogAge;
var humanAge = (dogAge - 2) * 4 + 21;
alert('According to human age, your dog is ' + humanAge + ' years old.');

/*********/ /*********/

//Increment and Decrement Expressions:

//Increment:
var x = 5;
x = x + 1; //output: 6
var y = 5;
y++; //output: 6

//Decrement:
x = 3;
x = x - 1; //output: 2
y = 3;
y--; //output: 2

//It is possible to define the arithmetic operators and use the number to be added to/subtracted from the actual value:
x = 5;
x += 2; //output: 7
x += 6; //output: 13
x -= 3; //output:10

x = 5;
y = 6;
x += y; //output: 11
x *= y; //output: 30

/*With the expressions which are +=, - =, *=, /=, the calculations are made according to the symbol. (See prefix form and postfix form for more details.)*/
