/*jshint maxcomplexity:false */
/* eslint-disable indent, newline-after-var */
/* jscs:disable indent */
/*jshint esversion: 6 */
/**
 * @preserve bec7bb7a448e49eb6cc1edc4ec932f93
 *
 * bec7bb7a448e49eb6cc1edc4ec932f93
 * js
 * lab5
 * v1
 * rere20
 * 2020-11-21 17:04:06
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-11-21 18:04:06 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 5 - objects
 *
 * Practice basics on objects.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Create object
 *
 * Start by creating an empty object called `person` by using the object
 * literal.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Give your person-object the property `firstName` with a value of `"Isaac"`.
 * Add a method called `print1()` that returns a presentation of the object,
 * like this: `"My name is Isaac."`
 * Use `this.firstName` to construct the string.
 *
 * Answer with the result from calling `person.print1()`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let person = {
    firstName: 'Isaac',
    print1: function() {return 'My name is ' + this.firstName + '.';},
};




ANSWER = person.print1();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Add properties `lastName` and `nationality` to your person-object. Their
 * values should be `"Newton"` and `"England"`.
 *
 * Create the method `person.print2()` which should say: `"My name is Isaac
 * Newton from England."`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

person.lastName = 'Newton';
person.nationality = 'England';

console.log(person);

person.print2 = function () {
    return 'My name is ' + this.firstName + ' ' +
    this.lastName + ' from ' + this.nationality + '.';
};

ANSWER = person.print2();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Add the property `born` with the value of a Date object: `"1643-01-04"`.
 *
 * Create a method `print3()` that says exactly the same as `print2()`
 * followed by `"I was born 1643."`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




person.born = "1643-01-04";
let date = new Date(person.born).getFullYear();
person.print3 = function() {
    return 'My name is ' + this.firstName + ' ' + this.lastName + ' from ' +
    this.nationality + '.' + ' ' + 'I was born ' + date + '.';
};



ANSWER = person.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a second person, called `person2` by using built-in function
 * `Object.create()`.
 *
 * person2 should have the following properties: `"Henri", "Becquerel",
 * "France", "1852-12-15"`.
 *
 * Print out details on the second person using `person2.print3()`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



let person2 = Object.create(person);
person2.firstName = 'Henri';
person2.lastName = 'Becquerel';
person2.nationality = 'France';
person2.born = "1852-12-15";
date = new Date(person2.born).getFullYear();


ANSWER = person2.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Add the method, `init(firstName, lastName, nationality, born)`, to your
 * Person-object. The method should help you create new Person-objects.
 *
 * Try it out using the following properties: `"Albert", "Einstein",
 * "Germany", "1879-03-14"`.
 *
 * Name the variable holding the person `person3`.
 *
 * Print out details on the third person using `person3.print3()`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

person.init = function (firstName, lastName, nationality, born) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.born = born;
    date = new Date(this.born).getFullYear();
};


let person3 = Object.create(person);
person3.init("Albert", "Einstein", "Germany", "1879-03-14");

ANSWER = person3.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
