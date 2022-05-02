//The While Loop:
/*
•	The same components that are used in a for loop are still necessary to create a while loop. 
•	With a while loop, a condition should be specified and this condition is the most important part of the while loop because a while loop keeps running WHILE the condition is valid.*/

let repetition = 1; //This variable is created in the logic of a starting point but it is outside the loop (although a starter point/counter is not necessary for a while loop).
while (repetition <= 10) {
  //Condition is set.
  console.log(`WHILE: Exercise repetition ${repetition}.`);
  repetition++; //The increment is added for the loop to continue.
}
/*
•	A starting point assigned to a variable is not required in a while loop. 
•	When it is not known for sure how many iterations are needed for the loop to keep running, while loop should be used. 
•	Like rolling a dice and waiting for a 6. Since it is not known how many times the dice has to be rolled to roll a 6, a while loop is to be used in such a scenario.*/

let dice = Math.trunc(Math.random() * 7); //Math.trunc() returns the number with getting rid of the fractional digits and Math.random() gives a random number between 0-1. Use by multiplying by the specific number. (See more about Math.random())
while (dice !== 6) {
  //Keep running the loop as long as the rolled number is not 6.
  console.log(`You rolled a ${dice}. Keep trying.`);
  dice = Math.trunc(Math.random() * 7); //This part is the same with the part where the dice variable is declared. This is necessary for the loop to keep running again after every time the number is not 6.
  if (dice === 6) {
    console.log(`You rolled a 6. End of the loop.`);
  }
} //The result is different each time the code is executed.

/*********/ /*********/

//99 Bottles of Beer Challenge:

let bottlesOfBeer = 99;
function beer() {
  while (bottlesOfBeer > 0 && bottlesOfBeer !== 1) {
    console.log(
      `${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer. Take 1 down, pass it around, ${
        bottlesOfBeer - 1
      } bottles of beer on the wall.`
    );
    bottlesOfBeer--;
    if (bottlesOfBeer === 1) {
      console.log(
        `1 bottle of beer on the wall, 1 bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.`
      );
      bottlesOfBeer--;
    }
    if (bottlesOfBeer === 0) {
      console.log(
        `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,  99 bottles of beer on the wall.`
      );
    }
  }
}
beer();

/*********/ /*********/

//Fibonacci Challenge:

function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
fibonacciGenerator(6); //  (6) [0, 1, 1, 2, 3, 5]

/*********/ /*********/

//Calculate the Tip Challenge:
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
let calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]); //Each bill is calculated and the result is stored in 'tip'.
  tips.push(tip); //Calculated tips are pushed into the empty array.
  totals.push(tip + bills[i]); //Total calculations are pushed into the empty array.
}
console.log(bills, tips, totals);
