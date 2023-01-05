//Object Type

/*
 * There are a few different ways to create an object in TypeScript and the syntax is a bit different from JavaScript.
 * It is possible to create a variable with type 'object' first and then update the variable with the object properties.
 * It is also possible to initially set types for the properties.
 * Object types are essential to safely work around with objects in TypeScript.
 */

let objectType: object;

objectType = {
  key1: "value",
  key2: "value",
  key3: "value",
  key4: "value",
};

//It is not possible to reassign an object with a primitive value.
objectType = 99; //Type 'number' is not assignable to type 'object'.

//The object type and the object properties can be joined and created together:
const joinedObject: { firstKey: string } = { firstKey: "value" };

//Optionally, the object type can be defined alone with the property keys and property types:
let objProps: {
  key1: number;
  key2: string;
};

//Then, the object can be updated with the values:
objProps = {
  key1: 55,
  key2: "value",
  //All the property keys that are supposed to be used have to be specified within the object type.
  key3: true, //Object literal may only specify known properties, and 'key3' does not exist in type '{ key1: number; key2: string; }'.
};

/*
    * Just like it is with function parameters, it is also possible to use 'optional properties' when it is not certain...
    ...whether a property will be definitely used or not. The syntax is exactly the same, with a question mark before...
    ...setting the type of the property. So that, a property within an object can be left without having to assign a value to it.
*/

let optionalProp: {
  option1: number;
  option2: number;
  option3?: number; //The optional property.
};

optionalProp = {
  option1: 1,
  option2: 2,
  //OK to exclude the third, optional property, 'option3'.
};

optionalProp = {
  option1: 1,
  //Property 'option2' is missing in type '{ option1: number; option3: number; }' but required in type...
  //...'{ option1: number; option2: number; option3?: number | undefined; }'
  option3: 3,
};

/*
    * Trying to retrieve or just simply use a property that does not exist within an object in JavaScript...
    ...would just return 'undefined' without a specific error.
    * TypeScript compiles an error in such a case because it is not possible to use a non-existent property.
*/

const absentProperty = optionalProp.option4; //'option4' does not exist in the object.
//Property 'option4' does not exist on type '{ option1: number; option2: number; option3?: number | undefined; }'.

//An 'interface' or a 'type alias' can also be used to form a group of values i.e. an object.

//Interface:
interface Address {
  street: string;
  city: string;
  postalCode: number;
}

const address = (address: Address) => {
  return address;
  //return address.city;
  //return address.postalCode;
};

//Type alias:
type Book = {
  name: string;
  author: string;
  publishedIn: number;
};

const book = (book: Book) => {
  return book;
  //return book.name;
  //return book.author;
};

//(More on interfaces and type aliases later.)
