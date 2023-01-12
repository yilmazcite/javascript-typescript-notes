//Readonly and Optional Properties

/*
Readonly Properties:

    * Readonly is an effective keyword to work around with properties in TypeScript.
    * As its name suggests, a type or a property that is assigned 'readonly' can only be read but not changed.
    * It is actually possible to mutate readonly properties only via aliases. Other than that, they are immutable.
    * A property can be specified as 'readonly' while creating a type, an interface or a class.
    * Such properties are expected to be initialized and specified either during declaration or inside the class constructor.
    * It is possible to either assign a property as 'readonly' individually or to use...
    ...a type Readonly<Type> to make it thoroughly immutable.

Optional Properties:

    * Since TypeScript requires all properties within a complex object to be used while it is being processed or updated,..
    ...a property can be specified as 'optional' when it is uncertain if that property will be used or not.
    * A question mark is used before setting the type of that property to make it optional. 
*/

type userInfo = {
  firstName: string;
  lastName: string;
  age?: number; //Optional property
};

//Type Readonly<Type> makes all properties within <Type> readonly.
//All the values within the previously specified 'userInfo' type are immutable.
let newUser: Readonly<userInfo> = {
  firstName: "First Name",
  lastName: "Last Name",
  age: 0, //OK to exclude this property because it is optional.
};

newUser.firstName = "New Name"; //Cannot assign to 'firstName' because it is a read-only property.

//Only one specific property can also be specified as 'readonly' so that only that property will be immutable.
interface BirthInfo {
  readonly birthYear: number; //Immutable property
  birthPlace: string;
  hospital?: string; //Optional property
}

let birthday: BirthInfo = {
  birthYear: 2023,
  birthPlace: "Birth place",
  //The optional property 'hospital' is excluded.
};

birthday.birthYear = 2020; //Cannot assign to 'birthYear' because it is a read-only property.
birthday.birthPlace = "New place"; //OK

/*************/

//While working with types and creating new types, a new type based on previously defined types can be created.
//In other words, it is possible to bind already existing, defined types and therefore define a new type.

type firstType = {
  val_1: string;
  val_2: number;
};

type secondType = {
  val_3: boolean;
};

//The two types defined above can be joined in a single type and used singularly with the newly defined type.
//A '&' sign is used between the types that are to be bound.
type bindTypes = firstType & secondType;

//Now, 'bindTypes' is a type that requires all that 'firstType' and 'secondType' require.
const newValues: bindTypes = {
  val_1: "string",
  val_2: 123,
  val_3: true,
};

//While creating a new type via making use of some of the other defined types, it is also possible to add brand new properties to it.
type bindNewType = firstType &
  secondType & {
    val_4: number;
    val_5: string;
  };

const values: bindNewType = {
  val_1: "string",
  val_2: 123,
  val_3: true,
  val_4: 456,
  val_5: "string",
};

/*
  * The example types defined above are simple and have just a few properties in order to illustrate the binding use case clearly.
  * Having this option might not be necessary at all while working with such types that are not highly complex or crowded.
  * On the other hand, it is very helpful and useful with big projects because it prevents developers from losing time...
  ...and writing repetitive code which can be a quite serious problem if the types that are to be joined together...
  ...have too many properties and details.
*/

// https://www.tutorialsteacher.com/typescript/typescript-readonly
