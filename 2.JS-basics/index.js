/***********************************************************
 *variables and data types
 */
/*

var firstName = 'vijay';
console.log(firstName);

var lastName = 'manikanta';
var age = 28;

var fullAge = true;
console.log(lastName);
console.log(fullAge);

var job;
console.log(job);

job = 'designer';
console.log(job);

// var 3years = 3; // error
// var john/mark = john and mark //uncaught syntax
// var if = 5 //cannot assign to special variables
years = 5;
console.log(years);

console.log(firstName, lastName);
*/

/***********************************************************
 *variables mutation and data type coercion
 */
/*

var firstName = 'vijay';
var lastName = 'manikanta';
var age = 28;

console.log(firstName + ' ' + age);

var job, ismarried;
job = 'teacher';
isMarried = false;
// console.log(isMarried);

console.log(
  firstName +
    ' is a ' +
    age +
    ' years old ' +
    job +
    ' is he Married? ' +
    isMarried
);

age = 'twenty eight';
job = 'driver';

alert(
  firstName +
    ' is a ' +
    age +
    ' years old ' +
    job +
    ' is he Married? ' +
    isMarried
);

console.log(firstName, lastName);
var lastName = prompt('what is his last name?');
console.log(firstName, lastName);
*/

/***********************************************************
 *Basic operators
 */
/*
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 22;
ageMark = 28;

//math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn, yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'john is gud boy');
var x;
x = ' ';
console.log(typeof x);
*/

/***********************************************************
 *operator precedence
 */
/*

var now = 2020;
var yearJohn = 1998;
var fullAge = 20;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 28;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//more operator
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1
console.log(x);
*/

/***********************************************************
 * Challenge one
 */
/*
var massMark = 65;
var massJohn = 85;
var heightMark = 1.69;
var heightJohn = 1.9;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

var BMICal = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's ? " + BMICal);
*/

/***********************************************************
 * if / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is Married.');
} else {
  console.log(firstName + ' is not married ');
}

var isMarried = false;
// var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is Married.');
} else {
  console.log(firstName + ' is not married ');
}

var massMark = 65;
var massJohn = 85;
var heightMark = 1.69;
var heightJohn = 1.9;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("mark's BMI is higher than John's BMI");
} else {
  console.log("john's BMI is higher than mark's BMI");
}

// console.log(BMIMark);
// console.log(BMIJohn);

// var BMICal = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's ? " + BMICal);
 */

/***********************************************************
 * Boolean logic
 */
/*
var firstName = ' john';
var age = 10;
// var age = 19;
// var age = 25;
// var age = 35;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young boy.');
} else {
  console.log(firstName + ' is a man.');
}

*/

/***********************************************************
 * the ternary operator and switch statements
 */
/*
var firstName = 'john';
var age = 16;

age >= 18
  ? console.log(firstName + ' drinks beer')
  : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch statement
var job = '';

switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches code');
    break;
  case 'driver':
    console.log(firstName + ' drives  car');
    break;
  case 'designer':
    console.log(firstName + ' designs webpage');
    break;
  default:
    console.log(firstName + 'does something else');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young boy.');
    break;
  default:
    console.log(firstName + ' is a man.');
}


* /

/***********************************************************
 * Truthy and Falsy values and equality operators
 */
/*
var height;
height = 23;
if (height || height === 0) {
  console.log('variable is defined');
} else {
  console.log('variable has NOT been declared');
}

//Equality operator
if (height == '23') {
  console.log('the == operator does type coercion');
}

*/

/***********************************************************
 * Challange 2
 */
/*

var scoreJohn = 89 + 120 + 103;
var scoreMike = 116 + 94 + 123;
var scoreMary = 97 + 134 + 105;
console.log(scoreJohn, scoreMike, scoreMary);

var averageJohn = scoreJohn / 3;
var averageMike = scoreMike / 3;
var averageMary = scoreMary / 3;
console.log(averageJohn, averageMike, averageMary);

if (averageJohn > averageMike) {
  console.log('John wins with an average score of ' + averageJohn);
} else if (averageMike > averageJohn) {
  console.log('Mike wins with an average score of ' + averageMike);
} else {
  console.log('The average scores are Draw');
}

if (averageJohn > averageMike && averageJohn > averageMary) {
  console.log('John wins with an average score of ' + averageJohn);
} else if (averageMike > averageJohn && averageMike > averageMary) {
  console.log('Mike wins with an average score of ' + averageMike);
} else if (averageMary > averageJohn && averageMary > averageMike) {
  console.log('Mary wins with an average score of ' + averageMary);
} else {
  console.log('The average scores are Draw');
}

*/

/***********************************************************
 * Functions
 */
/*

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMike = calculateAge(1947);
var ageMary = calculateAge(1990);
console.log(ageJohn, ageMike, ageMary);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + 'years');
  } else {
    console.log(firstName + ' is already retired');
  }
}

yearsUntilRetirement(1998, 'vijay');
yearsUntilRetirement(1947, 'praveen');
yearsUntilRetirement(1964, 'pavan');

*/

/***********************************************************
 * Functions Statement and Expressions
 */
/*

// Function Decleration
//  function whatDoYouDo(job, firstName)

// function expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches code';
      break;
    case 'driver':
      return firstName + ' drives car';
      break;
    case 'designer':
      return firstName + ' designs webpage';
      break;
    default:
      return firstName + ' does something else';
  }
};

console.log(whatDoYouDo('designer', 'vijay'));
console.log(whatDoYouDo('teacher', 'vijay'));
console.log(whatDoYouDo('', 'vijay'));

*/

/***********************************************************
 * Arrays
 */
/*
var names = ['vijay', 'pavan', 'rajesh'];
var years = new Array(1998, 1997, 1996);

console.log(names[0]); // gets first element of array
console.log(names); // get all the elaments of array
console.log(names.length); //get the length of array
console.log(names[0], names[1], (names[1] = 'vinay'), names[1]); // re writes the element
names[names.length] = 'ajay'; //add new element at last
console.log(names); // new array

//Different data types
var john = ['john', 'smith', 1990, 'teacher', false];
console.log(john);

john.push = 'vijay';

john.unshift = 'Mr.';

console.log(john);

john.pop();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf('designer') === -1
    ? 'john is not a designer'
    : 'john is a designer';

console.log(isDesigner);

*/

/***********************************************************
 * challange 3
 */
/*
function tipCalculator(bill) {
  var pecentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
console.log(tipCalculator(25));

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(finalValues);

*/

/***********************************************************
 * Objects and properties
 */
/*

// Object literal
var john = {
  firstName: 'john',
  lastName: 'smith',
  birthYear: 1998,
  family: ['jane', 'mark', 'bob', 'marley'],
  job: 'teacher',
  isMarried: false,
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
console.log(john);

// new object syntax
var jane = new Object();
jane.firstName = 'jane';
jane.lastName = 'wiliams';
jane.birthYear = 1992;
jane['job'] = 'designer';
console.log(jane);
*/

/***********************************************************
 * Objects and methods
 */
/*
var john = {
  firstName: 'john',
  lastName: 'smith',
  birthYear: 1998,
  family: ['jane', 'mark', 'bob', 'marley'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    return 2020 - this.birthYear;
  },
};
console.log(john);
john.calcAge();
console.log(john.calcAge(1998));
*/

/***********************************************************
 * challenge 4
 */
/*
var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
console.log(john.BMI, mark.BMI);
console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
} else if (mark.BMI > john.BMI) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
} else {
  console.log('they have same BMI');
}
 */

/***********************************************************
 * Loops and itterations
 */
/*
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (var i = 0; i < 10; i += 2) {
//   console.log(i);
// }

var john = ['John', 'Smith', 1998, 'designer', false];

// console.log(john[0]);
// console.log(john[1]);
// console.log(john[2]);
// console.log(john[3]);
// console.log(john[4]);

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
var john = ['John', 'Smith', 1998, 'designer', false];

// continue and Break statements
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

console.log(' ');

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}
//  looping Backward
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

*/
/***********************************************************
 * Coding Challenge 5
 */
/*

var john = {
  fullName: 'john smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++) {
      // determine percentage based on tip rules
      var percentage;
      var bill = this.bills[i];

      if (this.bills[i] < 50) {
        percentage = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // add result to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  },
};

var mark = {
  fullName: 'mark miller',
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++) {
      // determine percentage based on tip rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // add result to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();
calcAverage(john.tips);
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
} else {
  console.log('they both families pay same average amount of tips');
}
 */
