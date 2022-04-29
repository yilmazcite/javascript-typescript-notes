//The Ternary Conditional Operator:

/*
•	Conditional ternary operator is used to take quick decisions with simple conditions. It should not be confused with if/else statements. Although they seem to do the same job, they do not really actually replace one another. If/Else statements are still obligatory and necessary for bigger blocks of codes while ternary operator is used for simpler conditional comparisons. Ternary operator is used as a one-line code.*/

//Example:
let age = 18;
age >= 18 ? console.log('You can drive.') : console.log('You cannot drive.');
/*
  •	Ternary operator works in three parts. In the first part (age>=18), the condition is set. Then a question mark is added and the next part is the output if the condition is true. If the condition is not true, the output in the third part is executed. It works in the logic and order of if/else.
  •	The two conditions are separated from eachother with a colon.
  •	Since ternary operators are expressions, which means that they hold a value, it is also possible to assing a variable to them or use them in a template literal. This makes ternary operators really useful in terms of quick solutions for small problems to solve in just a few lines.*/

let canDrive =
  age >= 18 ? console.log('You can drive.') : console.log('You can’t drive.');
console.log(canDrive);
//or:
canDrive = age >= 18 ? 'You can drive.' : 'You cannot drive.'; //The value that will return from the ternary operator is stored in canDrive variable.
console.log(canDrive);

console.log(
  `You are ${age} years old and that is why, ${
    age >= 18 ? 'you can drive.' : 'you cannot drive.'
  }`
);
// In the template literal, the ternary operator is used and the value this operator holds will be executed.

//Coding Challenge #4 (Calculating the tip according to the bill):

//(1)With if/else statements:

let tip;
let bill = 15;

if (bill >= 50 && bill <= 300) {
  let tip = (bill / 100) * 15;
  console.log(
    'The bill was ' +
      bill +
      ', the tip was ' +
      tip +
      ', and the total value is ' +
      (tip + bill)
  );
} else {
  let tip = (bill / 100) * 20;
  console.log(
    'The bill was ' +
      bill +
      ', the tip was ' +
      tip +
      ', and the total value is ' +
      (tip + bill)
  );
}
//The bill was 275, the tip was 41.25, and the total value is 316.25

//(2)With ternary operator:

//let tip;
bill = 275;
bill >= 50 && bill <= 300
  ? console.log(
      'The bill was ' +
        bill +
        ', the tip was ' +
        (bill / 100) * 15 +
        ', and the total value is ' +
        ((bill / 100) * 15 + bill)
    )
  : console.log(
      'The bill was ' +
        bill +
        ', the tip was ' +
        (bill / 100) * 20 +
        ', and the total value is ' +
        ((bill / 100) * 20 + bill)
    );
// The bill was 275, the tip was 41.25, and the total value is 316.25

//This is an alternative of doing this calculation. A cleaner and smoother version of it is the one below:

bill = 275;
tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
// The bill was 275, the tip was 41.25, and the total value is 316.25

//This is a much better example. The value that will return from the ternary operator (the tip calculation) is stored in the variable called tip so that it can be easily used without further calculations.

//Tip Calculation Challenge Part 2:

function calcTips(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
bills = [125, 555, 44];
tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
