//WORKING WITH STRINGS

let airline = 'TAP Air Portugal';
let plane = 'A320';

//Getting a character from a string with the index:
console.log(plane[0]);
console.log(plane[1]);
console.log('String'[3]);

//'.indexOf()' is used to get the index of the selected character. It only gives the first occurence of the selection:
console.log(airline.indexOf('r'));

//The search can be made with multiple characters:
console.log(airline.indexOf('portugal'));

//'.lastIndexOf()' finds the last occurence of the selected character and returns its index:
console.log(airline.lastIndexOf('r'));

//A selected part of a string can be selected with '.slice()' method. This method uses indexes:
console.log(airline.slice(0, 3)); //Slice between 0 and 3 indexes (3 not included).
console.log(airline.slice(2)); //Slice 2 and the rest.

//Extracting the first word in the string by slicing until the first occurence of 'whitespace':
console.log(airline.slice(0, airline.indexOf(' '))); //logs the first word in the string.
//Extracting the last word in the string by starting to slice after the last occurence of the 'whitespace'.
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //'+1' is used to start slicing right after the whitespace.

//Slicing backwards with negative value:
console.log(airline.slice(-3));

//Start slicing from the index 1, and slice until the index -1, which is before the last character of the string:
console.log(airline.slice(1, -1));

//A function that checks if the airplane seat is a middle seat or not:
let yourSeat = seat => {
  seat = seat.slice(-1) === 'B' || 'E' ? `Middle seat` : `Not middle seat`;
  return seat;
};
console.log(yourSeat('17E'));

//STRING METHODS

//Comparing emails:
let email = 'hello@email.io';
let loginEmail = ' Hello@eMAil.Io \n';

//'.trim()' method is used to remove the whitespaces in a string from the start or the end:
let correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);

//'.replace()' Method:
let priceEUR = '288,97€';
let priceUS = priceEUR.replace('€', '$').replace(',', '.');
console.log(priceUS); //logs "288.97$"

//'.replace()' method only mutates the first occuring:
let announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
//'.replaceAll()' method should be used if all the occurences are to be replaced.
console.log(announcement.replaceAll('door', 'gate'));

/*
•	Alternatively, instead of using .replaceAll() method, regular expressions (regex) can be used.
•	To use it, the character(s) that will be replaced should be in slashes, not quotation marks.
•	And 'g' should be added after the second slash.
•	'g' refers to 'global' and with it, the method makes a search through the whole string:
*/
console.log(announcement.replace(/door/g, 'gate'));

//Check if a string includes a certain character or a set of characters with '.includes()' method. Returns 'true' or 'false':
let airplane = 'Airbus 320neo';
console.log(airplane.includes('Airbus')); //logs 'true'

//.startsWith() and .endsWith() Methods:

//Used to check how a string starts and ends. Returns 'true' or 'false’:
console.log(
  airplane.startsWith('Airbus') && airplane.endsWith('neo')
    ? `Part of the NEW Airbus Family`
    : `Not part of NEW Airbus Family`
);

//PRACTICE:

//Check the restricted items in passenger's baggage:
let checkBaggage = function (items) {
  let baggage = items.toLowerCase();
  baggage =
    baggage.includes('knife') || baggage.includes('gun') ? `Get out` : `Get in`;
  console.log(baggage);
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//.split() and '.join()' Methods:

//.split() method divides a string from the selected breaking points and returns an array with items:
console.log('THIS+IS+A+STRING'.split('+')); //'Split the elements of this array at '+'
console.log('Your Name'.split(' ')); //Split by the 'whitespaces'

//This method is also useful to use while destructuring:
let [firstName, lastName] = 'John Doe'.split(' ');
console.log(firstName);
console.log(lastName);

//With '.join()' method, an array can be converted into a string:
let newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
//What is inserted into the join method is what will appear between the items.
//A whitespace is used in this example to insert a whitespace after each word.
console.log(newName);

let capitalizedName = function (name) {
  let names = name.split(' ');
  let namesUpper = [];
  for (let letter of names) {
    namesUpper.push(letter[0].toUpperCase() + letter.slice(1));
    /*Alternative of doing this:
      namesUpper.push(n.replace(n[0], n[0].toUpperCase())); */
  }
  console.log(namesUpper.join(' '));
};
capitalizedName('helen ann davis');
capitalizedName('david verde');

//Padding Methods:

//'.padStart()' method firstly takes a target padding length and takes a string.
//Then, the method 'pads' the current string with the string which is taken in the method, and repeats it for the specified amount of time.

//The length specified in the method becomes the new length of the string.

//'.padEnd()' does the same thing, padding to the end of the string.

let message = 'Go to gate 32';
console.log(message.padStart(25, '+'));
//So here, 25 is the padding length.
//And '+' is the string that will be padded and repeated until the length of the string is 25 and it will be added to the beginning of the actual string.
console.log(message.padStart(25, '*').padEnd(35, '*'));
console.log(message.padStart(75, ' * *'));

//The length of the actual string is important in this case.
//If a number which is shorter than the length of the actual string is inserted, then nothing will be padded.

//Hiding the numbers of a credit card except the last 4 digits:
let creditCardNum = '2352312421796096';
let last4Digits = creditCardNum.slice(-4);
let hiddenCardNum = last4Digits.padStart(creditCardNum.length, '*');
console.log(creditCardNum);
console.log(hiddenCardNum);

//'.repeat()' method is used to repeat the same string multiple times.
//The number of the repitition is inserted into the method:
let message2 = 'Bad weather... All departures delayed! ';
console.log(message2.repeat(4)); //Repeat 4 times.

let planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};
planesInLine(5);
planesInLine(11);

//CODING EXERCISE:

//'flights' variable is a string with information about 4 flights.
//Take the details of each flight from the variable and return them in a properly-structured way:
// Example:
//🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Each flight is separated from each other with a '+' sign.
//Split the string from the '+' sign to store each flight information within a separate item in the array:
flights.split('+');

//Loop over the separated items of the array and make the changes:

//SOLUTION 1:

//Loop over the items and apply the necessary changes to make the string look like the example string:
for (let flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  let output = `${type.replaceAll('_', '').trim()} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ':',
    'h'
  )})`;
  //Add padding to the strings from the start:
  output = output.includes('Delayed')
    ? `${(output = '🔴 ' + output).padStart(50)}`
    : output.padStart(50);
  console.log(output);
}

//SOLUTION 2:

let getCode = str => str.slice(0, 3).toUpperCase();

for (let flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  let output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    50
  );
  console.log(output);
}
