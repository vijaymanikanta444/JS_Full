///////////////////////////////////////
// Lecture: Hoisting
/*
    // functions
    // calculateAge(1998);
    function calculateAge(year) {
    console.log(2020 - year);
    }
    calculateAge(1998);

    // retirement(1998); // retirement is not a function
    var retirement = function (year) {
    console.log(65 - (2020 - year));
    };
    retirement(1998);

    // variables
    /*
    console.log(age); //age is not defined
    */

/*
    // console.log(age); //undefined
    var age = 22;
    console.log(age);
    // */
/*
    function foo() {
    console.log(age); //undefined
    var age = 68;
    console.log(age); //68
    }
    foo();
    console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  //   console.log(b); //b is not defined
  // console.log(c); //c is not defined
  console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

calculateAge(1998);

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}

var john = {
  name: 'john',
  yearOfBirth: 1998,
  calculateAge: function () {
    console.log(this);
    console.log(2020 - this.yearOfBirth);
    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  
  */
  },
};

john.calculateAge();

var mike = {
  name: 'mike',
  yearOfBirth: 1997,
};
mike.calculateAge = john.calculateAge;

mike.calculateAge();
