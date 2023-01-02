//Functions

/*
    Syntax:
    
    function functionName(param1:[type], param2:[type]):[return_type] {}
    const functionName = (param1:[type], param2:[type]):[return_type] => {}
    * Works in the same logic with all kinds of functions, be it named or anonymous functions. 

    * It is possible to specify types for the parameters and the type of the function (i.e. the return type).
    * The return type can also be optionally excluded because TypeScript is able to infer the return type...
    ...by analyzing the return statement of the function and set the return type of the function in the background.
    * If the type of any given parameter is not explicitly identified, then its type implicitly will be 'any'.

    * If the return type of the function is pre-specified, then the return statement is expected to...
    ...have the corresponding type. Otherwise, TypeScript will give an error.
*/

const returnType = (x: number, y: number): number => {
  //Function return type is 'number'.
  return "Hello"; //Type 'string' is not assignable to type 'number'.
};

//When the return type of a function is specified, TypeScript will compile an error if there is not a return value within that function.
const emptyFunction = (str: string): string => {}; //A function whose declared type is neither 'void' nor 'any' must return a value.

const concat = (param1: string, param2: string): string => {
  return `${param1} ${param2}`;
};

concat("Hello", "World"); //OK
concat(55, "TypeScript"); //Argument of type 'number' is not assignable to parameter of type 'string'.

//When the return type of a function is explicitly specified, it is not possible to reassign and change the return type of that function.
//Function 'concat' initially has type 'string' as its return type.
const funcStr: string = concat("Two", "Strings"); //OK
const funcString = concat("Two", "Strings"); //Also OK
const funcNum: number = concat("Two", "Strings"); //Type 'string' is not assignable to type 'number'.
//Even if the function return type was not explicitly annotated, TypeScript would still give an error in such a case.

/*
    * In JavaScript, it is possible to use less arguments than the specified parameters, for instance.
    * JavaScript will just take the unused parameters as 'undefined'. On the other hand, TypeScript will compile an error on...
    ...the condition that all the parameters specified while creating the function are not used as arguments while calling the function.

    * In cases where any one of the parameters may be excluded while calling the function, 'optional parameters' can be used.
    * Syntactically, a question mark is required right before setting the type of the parameter.

    * In the same way, it is also possible to set a 'default value' to a parameter in case the argument for that parameter...
    ...may not be passed while calling the function. If an argument is passed for that parameter during the function call,..
    ...then the default value will be disregarded and it will be updated with the passed value.
    * Syntactically, the default value should be specified with an equals sign right after the type of the parameter.
*/

//It is not possible to set a parameter both optional and with a default value at the same time:
const optionalAndDefault = (x: string, y: string, z?: boolean = false) => {}; //Parameter cannot have question mark and initializer.

const unmatchingArguments = (x: string, y: string, z: number): string => {
  return `${x} ${y}: ${z}`;
};

unmatchingArguments("New", "Number"); //Expected 3 arguments, but got 2.
unmatchingArguments("Hello", "World", 20, 23); //Expected 3 arguments, but got 4.

const optionalParameter = (x: string, y: string, z?: boolean) => {
  //'z' is the optional parameter in this function.
  return `${x}, ${y}, ${z}`;
};

optionalParameter("Hello", "World."); //OK. Excludes the third, optional parameter because its argument is not passed.
optionalParameter("Hello", "World.", true); //OK. Optional parameter is used because its argument is passed.

const defaultVal = (x: string, y: string, z: boolean = false) => {
  //Parameter 'z' has a default value of 'false'.
  return `${x} ${y}: ${z}`;
};

defaultVal("Default", "value"); //OK. Takes the last parameter as 'false' even though its argument is not provided.
defaultVal("Default value", "changed to", true); //OK. The default value is updated.

/*
 * Rest parameters can also be assigned to functions in TypeScript.
 * Rest parameters can be used when multiple values are passed into the function but the number of arguments is not known.
 * The type of a rest parameter is one specified type and all the values within must be of that exact type.
 * It is like a "placeholder for multiple arguments of the same type."
 * A rest parameter should be used after all of the other parameters.
 * The type of a rest parameter should be explicitly specified as an array.
 */

const restFirst = (...str: string[], num: number) => {}; //A rest parameter must be last in a parameter list.

const restParameterStr = (...str: string[]) => {
  //return `${str}`;
  return `${str.join(", ")}`;
};

restParameterStr("Greetings!", "Hello!", "Welcome!");

const restParameterNum = (...num: number[]) => {
  return num.map((num) => num + 5);
};

restParameterNum(55, 23, 16, 86, 99, 4);
restParameterNum(523, false, 560); //Argument of type 'boolean' is not assignable to parameter of type 'number'.

/*
 * https://www.javatpoint.com/typescript-function
 * https://www.tutorialspoint.com/typescript/typescript_functions.htm
 */
