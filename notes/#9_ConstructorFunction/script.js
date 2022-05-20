//CONSTRUCTOR FUNCTION
/*
•	An object like the one below can be created with key and value pairs.
•	If another housekeeper's information is needed like this, the same object with the same key and value pairs would need to be repeated with another variable name like houseKeeper2 and so on...
•	This would mean repeating similar blocks of codes over and over again.
*/
let houseKeeper1 = {
    name: 'Meryl',
    yearsOfExperience: 6,
    cleaningRepertoire: ['bathroom', 'lobby', 'bedroom']
}
let houseKeeper2 = {
    name: 'Judy',
    yearsOfExperience: 14,
    cleaningRepertoire: ['bathroom', 'bedroom']
}
/*
•	In these objects, 'name', 'yearsOfExperience', and 'cleaningRepertoire' are common.
•	Instead of doing this and causing repetition, a --constructor function-- can be used.

•	 A constructor function takes parameters and inside the function, 'this' keyword is used for each parameter.
•	'this' later will refer to the given information.
•	The first letter of the name of the constructor function is commonly capitalized instead of using camelCasing.
*/

//Creating the constructor function:
let HouseKeeper = (name, yearsOfExperience, cleaningRepertoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
}

let houseKeeper3 = new HouseKeeper('Jack', 8, ['garden', 'pool']);
/*
•	'new' keyword is used to define a new object with the given information within the HouseKeeper function.
•	The given information as the parameters in this example will find their correspondent 'this' value in the HouseKeeper function and the values will be assigned to houseKeeper3.
•	So basically 'this' becomes 'houseKeeper3' in this example and its value becomes whatever is given as the parameter.
*/

console.log(houseKeeper3.name);
console.log(houseKeeper3.yearsOfExperience);
