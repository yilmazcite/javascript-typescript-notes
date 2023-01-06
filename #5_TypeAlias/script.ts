//Type Alias:

/*
    * With the help of type aliases, it is possible to create a new, specific, reusable type that doesn't exist.
    * Rather than explaining it as "creating a new type", it would be more appropriate to say that a type alias is...
    ...actually a custom name that is defined for a specific type.
    * A type alias can be created both using primitive types such as number or string...
    ...and using complex, non-primitive types such as objects, arrays, union types.
    * Even though it is possible to create a type alias with any type, it may not be primarily necessary to use it...
    ...with primitives because it is already convenient to work with them without having to define a type alias.
    * On the other hand, a type alias can be used when a specific type is going to be used multiple times.
    * Type aliases improve the code because it helps developers write less repeated, reusable code blocks.
*/

//The 'type' keyword is required to define a type alias.

//Aliases with primitives:
type BookName = string;
type BookAuthor = string;
type BookLang = string;
type BookPageNum = number;

//An alias with an object:
type Book = {
  //The types of the properties within the 'Book' alias are specified via the previously defined type aliases.
  book: BookName; //Becomes a type string.
  author: BookAuthor; //Becomes a type string.
  lang: BookLang; //Becomes a type string.
  pageNum: BookPageNum; //Becomes a type number.
};

//The created type aliases can be used as specific types that can be assigned to values and so they work just like regular types.

//Defined aliases assigned to variables:
const bookName: BookName = "Dune";
const bookAuthor: BookAuthor = "Frank Herbert";
const bookLang: BookLang = "English";
let bookPageNum: BookPageNum = 707; //Since 'BookPageNum' is an alias with type 'number' assigned to it,..
//...it is not possible to assign another type to a variable using this alias.
bookPageNum = "String"; //Type 'string' is not assignable to type 'number'.

//The 'book' variable below has the type 'Book' which is defined above.
//It means that the value assigned to this variable should not be in conflict with its type.
//The type alias 'Book' is an object type with 4 properties defined within. They should be used accordingly while assigning values.
const book: Book = {
  book: bookName,
  author: bookAuthor,
  lang: bookLang,
  pageNum: bookPageNum,
  bookPublishedIn: 1959, //Object literal may only specify known properties, and 'bookPublishedIn' does not exist in type 'Book'.
};

const defineBook = (book: Book): Book => {
  console.log(`The provided book info: ${book}`);
  return book;
};

const dune = defineBook({
  book: "Dune",
  author: "Frank Herbert",
  lang: "English",
  pageNum: 707,
});

//The type of an alias does not necessarily have to refer to a regular type.
//A specific value of any type or a union type can be specified while defining an alias.

type Colors = "blue" | "green"; //A union type of string literals is assigned to 'Colors' alias.

const colorBlue: Colors = "blue"; //OK
const colorGreen: Colors = "green"; //OK
const colorYellow: Colors = "yellow"; //Type '"yellow"' is not assignable to type 'Colors'.

type Year = 2022 | 2023;

const isValidTrue: Year = 2023; //OK
const isValidFalse: Year = 2019; //Type '2019' is not assignable to type 'Year'.

type DifferentTypes = boolean | number | string | string[] | number[];

const str: DifferentTypes = "String"; //OK
const strArr: DifferentTypes = ["s", "t", "r", "i", "n", "g"]; //OK
const num: DifferentTypes = 19; //OK
const numArr: DifferentTypes = [1, 2, 3]; //OK
const func: DifferentTypes = { x: 123 }; //Type '{ x: number; }' is not assignable to type 'DifferentTypes'.

//It is even possible to rename regular types and use that custom name for that type everywhere:
type TheString = string;

const string: TheString = "This is a value of type string.";
