//OBJECTS\\

/*
•	Objects are one of the most fundamental parts of JavaScript.
•	Objects are used to store a number of values in a single variable like arrays but they differ from arrays in practice.
  
•	It is not possible to give a name to the items in an array.
•	When multiple items are stored in an array, the only way to call a certain item is to refer to its position in the array (by calling it as [0] or [4] etc.)..
  
•	With objects, it is possible to assign a name to each value (item) and call it by its name.
•	Square brackets are needed to create arrays while curly braces are required with objects.*/

//Example:
let country = {
  name: 'Hungary',
  capital: 'Budapest',
  sinceEstablishment: 2022 - 1000,
  region: 'Europe',
  neighbouringCountries: [
    'Romania',
    'Ukrania',
    'Slovakia',
    'Austria',
    'Serbia',
    'Croatia',
    'Slovenia',
  ],
};
/*
•	Here, 'country' is simply the object with whatever is within.
•	Inside the object are keys and value pairs.
•	'name', 'capital', 'sinceEstablisment', 'region' and 'neighbouringCountries' are the 'keys' in this object and the expressions coming after the keys are the 'values'. These key and value pairs are also called 'object properties'. 

•	A comma is a must after every single item is declared to separate them from one another. 

•	Any kind of expression, which holds a value, can be used here (like a calculation that holds a value).
•	As seen in the last item, it is also possible to use an array.
•	To be able to call a certain item from this array, after calling the name of the value, the place of the item in the array is required (like [3] or [6]).

•	Unlike arrays, the order of the property in the object does not matter at all when it is required to be retrieved. (If the value of a property is composed of an array and a certain item is to be retrieved from the array, then again, it is important what place the item holds in the array list.)

•	Arrays should be used for order data more, because the order of each item in the array holds great importance. Objects should be used for unstructured data more, because the order of a property is not important.*/

//Dot and Bracket Notations:

//We can use dot or bracket notations in order to retrieve a value from an object.
country.capital; //retrieving the value with dot notation.

//Using a dot between the name of the object and the exact same name of the property helps to call the value.
country.neighbouringCountries; //like this, all items in the array are retrieved.
country.neighbouringCountries[2]; //like this, only the selected item from the array is requested.

//Bracket notations can also be used to retrieve a value from an object:

country['capital']; // retrieving the value with bracket notation.
//Using a pair of square brackets right after the name of the object and always using quotation marks for the name of the property!!!
//Turning the name of the property into a string is a must to be able to retrieve the item.

country['neighbouringCountries']; //like this, all items in the array are retrieved.
country['neighbouringCountries'][3]; //like this, only the selected item from the array is requested. The order number of the item in the array should be in square brackets as always, AND this should be after the first bracket notation, which is used to retrieve the value of the property. Square brackets should not be inside one another in this case.
/*
•	Dot and bracket notations cannot always replace one another's place.
•	Sometimes it is impossible for dot notation to do what bracket notation is capable of doing.
•	For instance, let's think about a prompt that asks the user about what information they would like to receive (based on the previous country example).*/
let wantsToKnowAbout = prompt(
  'What do you want to learn about Hungary? Capital, sinceEstablishment, region, neighbouringCountries?'
); //user's input is stored in a variable.
/*
•	In this scenario, if country.wantsToKnowAbout; is executed, it does not work and the result is 'undefined.' When country.wantsToKnowAbout is used, JavaScript is looking for a property named as 'wantsToKnowAbout' in the 'country' object and cannot find it. That is why, the result is undefined.
•	However, if country[wantsToKnowAbout]; is executed, JavaScript will simply replace 'wantsToKnowAbout' with the actual value of the variable, which is the user input, and as a result, that will be searched in the 'country' object.
•	Bracket notation is to be used in such a situation because any expression can be used within bracket notations.*/

wantsToKnowAbout = prompt(
  'What do you want to learn about Hungary? Capital, sinceEstablishment, region, neighbouringCountries?'
);
//user input: "region"
country[wantsToKnowAbout]; //result is "Europe"

//Adding a New Property with Dot and Bracket Notations:

//•	Dot or bracket notations can also be used to add new properties to an object.
//•	They both work in the same way.
country.nationality = 'Hungarian';
country['nationality'] = 'Hungarian';

//Coding Practice:
let phoebeBuffay = {
  firstName: 'Phoebe',
  lastName: 'Buffay',
  friends: ['Monica', 'Ross', 'Joey', 'Chandler', 'Rachel'],
  job: 'musician and a masseuse',
};

//With dot notation:
console.log(
  `${phoebeBuffay.firstName} is a ${phoebeBuffay.job}. She has ${phoebeBuffay.friends.length} friends and her best friend is ${phoebeBuffay.friends[0]}.`
);

//With bracket notation:
console.log(
  `${phoebeBuffay['firstName']} is a ${phoebeBuffay['job']}. She has ${phoebeBuffay['friends'].length} friends and her best friend is ${phoebeBuffay['friends'][0]}.`
);

//Output: "Phoebe is a musician and a masseuse. She has 5 friends and her best friend is Monica."

//OBJECT METHODS\\
/*
•	An expression is necessary to create an object property.
•	It means that anything that holds a value can be used within objects.
•	This means a function can be used within a property. Function becomes the value of the property.
•	As seen in the example, there are string values, number values, array values, and now function values.
•	Any function that is attached to an object is a method.*/

//From the previous example (cont'd):
country = {
  name: 'Hungary',
  capital: 'Budapest',
  establishmentDate: 1000,
  region: 'Europe',

  sinceEstablishment: function (establishmentDate) {
    return 2022 - establishmentDate;
  },
};
console.log(country.sinceEstablishment(1000)); //with dot notation
console.log(country['sinceEstablishment'](1000)); //with bracket notation
// A function is used in a property. The name of the function is the name of the property, 'sinceEstablishment'. Whatever value is returned from the function is the value that 'sinceEstablishment' property holds.
/*
•	With a function that is used in an object, it is possible to retrieve a value that already exists in the object.
•	Instead of having to write the same value again, the value of the property can be called with 'this. keyword'.
•	In JavaScript, 'this. keyword' refers to an object when it is used in an object method.*/

country = {
  name: 'Hungary',
  capital: 'Budapest',
  establishedIn: 1000,
  currentYear: 2022,
  region: 'Europe',

  sinceEstablishment: function () {
    return this.currentYear - this.establishedIn;
  },
};
console.log(country.sinceEstablishment());
//With 'this. keyword', the values that are already in the object are retrieved.
/*
•	If this keyword is logged to the console on its own in this function (console.log(this);), it logs all the properties in the object to the console.
•	Another detail is that it is possible to store a value in a property within a function.
•	For instance, if the value that results from the previous year calculation is to be used plenty of times, it can be stored in a property for further use.
•	This way, the calculation will be completed once and the result will be stored.
•	Whenever the result of the calculation is retrieved, it will be just taken from the property instead of having to calculate it again every single time. 
•	It can be done with 'this. keyword' again.*/

country = {
  name: 'Hungary',
  capital: 'Budapest',
  establishedIn: 1000,
  currentYear: 2022,
  region: 'Europe',
  sinceEstablishment: function () {
    this.calcYear = this.currentYear - this.establishedIn;
    return this.calcYear;
  },
};
console.log(country.calcYear); //this time, 'this.' is not necessary because the property is already declared and it is a property that holds a value in a function within the object. It is enough to just type the name of the property after the object name.
//Practice:
let country = {
  name: 'Hungary',
  capital: 'Budapest',
  establishedIn: 1000,
  currentYear: 2022,
  region: 'Europe',

  getSummary: function () {
    //getSummary object method is created.
    this.summary = `${country.name} is a country in ${
      country.region
    }. Its capital is ${country.capital}. It was established in ${
      country.establishedIn
    } and it has been ${country.sinceEstablishment()} years since then. The country has 7 neighbouring countries which are ${
      country.neighbouringCountries
    }.`;
  },
};
console.log(country.getSummary());
