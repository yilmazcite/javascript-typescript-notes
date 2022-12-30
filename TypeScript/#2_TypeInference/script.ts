//Type Inference

//TypeScript infers to the type of the data initially when there is no explicit annotation about the data type.

let text = "string";

/*
    * In the example above, the data type of the variable 'text' is not specified initially.
    * Based upon the value assigned to this variable, TypeScript is able to infer the data type which JavaScript fails to do on its own.
    * Now that TypeScript infers type 'string' to 'text' variable, if the value of 'text' variable is attempted to be reassigned...
    ...with a non-string value, TypeScript will compile an error.
*/

text = 534434; //Compiler Error: Type 'number' is not assignable to type 'string'.

/*
    * With complex objects in which values with different types can be present, TypeScript basicly looks for...
    ...the most common data type among all of the given values and infers the one that is most compatible with all present types.
    * In case there is not a compatible, super type that will encircle all of the existing types in the object...
    ...all recognized types will be included and a union will be created. It is called a 'union type'.
*/

const arr = [4, 20, "TypeScript"];
//Type inference of the above array is: arr: (number | string)[]

/*
    * For this array, since there is not a single type that will encompass all the data types in the array,..
    ...the type would be 'string | number' meaning that the array can either hold values with type string or number.
    * It is possible to add a new element to this array if the type of the new value is string or number.
    * TypeScript will compile an error if a value that is not string or number is attempted to be pushed into this array.
*/

arr.push("hello"); //OK
arr.push(true); //Compiler Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.

let x = "TypeScript";
let y = 9032;
x = y; //Compile-time Error: Type 'number' is not assignable to type 'string'

/*
    * TypeScript compiles an error in the example above while trying to assign a value to another one.
    * That is simply because while inferring the types that are not explicitly stated here,..
    ...TypeScript accepts 'x' variable as type 'string' and 'y' variable as type 'number'.
    * Eventually gives an error because it is not possible to assign type 'number' to type 'string'.

    ---

    * The value that is returned from a function defines the return type of that function.
    * In the example below, both of the taken parameters are specified as type number and the function processes...
    ...these two type number parameters and returns that value. That is why, the return type of the function is number.
    * If the return type is attempted to be manipulated while calling the function, TypeScript will compile an error.
*/

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};
let sumNumbers: number = sum(5, 7); //OK
let sumNums = sum(5, 7); //OK
let sumNumbersStr: string = sum(5, 7); //Compiler Error: Type 'number' is not assignable to type 'string'.

/*
 * https://www.typescriptlang.org/docs/handbook/type-inference.html
 * https://www.tutorialsteacher.com/typescript/type-inference
 */
