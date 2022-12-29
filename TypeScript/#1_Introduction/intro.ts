//A brief intro about what TypeScript is, when to use it and its syntax:

/*
    * TypeScript simply is "...JavaScript with syntax for types." 
    * It is basically a strongly typed superset of JavaScript that helps developers write...
    ...safer, less error-prone, and more easily understandable code.
    * Code written with TypeScript is converted into JavaScript code and...
    ...works just fine with every environment where JavaScript works.

    https://www.typescriptlang.org/play > This TypeScript playground is helpful to see...
    ...how TypeScript code is converted into JavaScript and to check out the differences.
*/

//Available Types in TypeScript:
/*
    * There are many types in TypeScript.
    * Number, string, boolean (which are three of the most commonly used primitive types),..
    ...null, undefined, void, object, array, tuples are some of the types in TypeScript...
    ...with a few extra types unmentioned.

    * Any, never and undefined are also types in TypeScript.
*/

//When to Use TypeScript

/*
    * TypeScript processes the data either the developer is sending out or receiving in.
    * For instance, if two numbers are to be processed within a function, maybe for a calculation,...
    ...it would cause the program to fail if a type other than number is used/received.

    * With TypeScript, it is not necessarily required to explicitly worry about and...
    ...check the validity of each and every single data and its type before processing that data.
    * Since the type of the data will be pre-specified, no furhter need to double check the type of the data...
    ...will be required and therefore the program will not cause an error that results from the type of the data.
*/

//Syntax

/*
    * The type of the data is specified right after the name of the variable following a colon.
    * The type must be all lowercase for all types.

    -- Basic Syntax:
    const variableName: type = value;
*/

let greetings: string = "Hello World!";
console.log(greetings);

//If 'greetings' variable is to be changed with a data type...
//...that is not a 'string', TypeScript will give out a warning.

/*
    * When a method is to be used with a variable, TypeScript takes the type of the variable...
    ...and shows out only the related methods.
    * For instance, in this case, when "greetings." is inserted,..
    ...TypeScript will only display string methods because its type is 'string'.
*/

let newNumber: number = 17;

/*
    * Since newNumber is a type number, trying to use a string method...
    ...(e.g. newNumber.toLowerCase()) with this data also fails.
    * TypeScript recognizes the type of the value and only lists the related number methods.
*/

let isValid: boolean = false;
const num: number = 5324.5;
const str: string = "string";
