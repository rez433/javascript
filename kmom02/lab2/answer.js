
/**
 * @preserve 8a395f04d1fc4e81dd23e1c8cfb8153e
 *
 * 8a395f04d1fc4e81dd23e1c8cfb8153e
 * js
 * lab2
 * v1
 * rere20
 * 2020-11-13 17:50:15
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-11-13 18:50:15 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/*jshint esversion: 6 */
/* eslint-disable indent */
/* jscs:disable indent */
/* eslint-disable camelcase */
(function (dbwebb) {
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


    /** ======================================================================
     * Lab 2 - statements
     *
     * Statements and expressions in JavaScript.
     *
     * Use MDN as your reference and base to solving the exercises.
     *
     */



    /** ----------------------------------------------------------------------
     * Section 1 . If, else if and else
     *
     */



    /**
     * Exercise 1.1 (1 points)
     *
     * Create five variables: `card1, card2, card3, card4, card5`.
     *
     * Assign the values `2, 11, 10, 6, 7` to the variables created above.
     *
     * Add them up and put the sum in a variable called `result`.
     *
     * Answer with the variable `result`.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    let card1 = 2, card2 = 11, card3 = 10, card4 = 6, card5 = 7;

    let result = [card1, card2, card3, card4, card5].reduce((a, b) => a + b);


    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.1", ANSWER, false);

    /**
     * Exercise 1.2 (1 points)
     *
     * Use an `if statement` to see if the five cards (card1-card5) have a
     * combined sum that is higher than 21.
     *
     * Create a variable `status` and give it a different value depending on the
     * following.
     *
     * * If the sum is higher than 21, give your variable the value `"busted"`.
     * * Else give it the value `"safe"`.
     *
     * Answer with your status-variable.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let status = '';

    // if (result > 21) {
    //     status = 'busted';
    // } else {
    //     status = 'safe';
    // }

    status = result > 21 ? 'busted' : 'safe';

    ANSWER = status;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.2", ANSWER, false);

    /**
     * Exercise 1.3 (1 points)
     *
     * Use `if else statements` to see if the combined value of the first three
     * cards (card1-card3) is lower, higher or exactly 21.
     *
     * Answer with a string corresponding to the result:
     * lower = `"safe"`
     * higher = `"busted"`
     * 21 = `"black jack"`
     *
     * Store the response in your status-variable and answer with it.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    let cardSum = [card1, card2, card3].reduce((a, b) => a + b);

    status = cardSum == 21 ? 'black jack' : cardSum > 21 ? 'busted' : 'safe';




    ANSWER = status;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.3", ANSWER, false);

    /**
     * Exercise 1.4 (2 points)
     *
     * Create three variables: `dealer1, dealer2, dealer3`.
     *
     * Assign the values `6, 7, 3` to the variables.
     *
     * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
     * to see what the dealer should do. Combine as you feel needed.
     *
     * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
     * the sum is higher than or equal to 17 and lower than 21 answer with
     * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
     * than 21 answer with `"busted"`.
     *
     * Store the response in a variable, and answer with it.
     *
     * PS. You can change the sum to test that your if-statement really works for
     * all values, just to try it out.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let dealer1 = 6, dealer2 = 7, dealer3 = 3;
    // let dealer1 = 9, dealer2 = 7, dealer3 = 3;

    let cardSum1_4 = [dealer1, dealer2, dealer3].reduce((a, b) => a + b);

    if (cardSum1_4 < 17) {
        status = 'pick';
    } else if (cardSum1_4 >= 17 && cardSum1_4 < 21) {
        status = 'stop';
    } else {
        status = 'busted';
    }

    // console.log(status);

    ANSWER = status;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.4", ANSWER, false);

    /** ----------------------------------------------------------------------
     * Section 2 . Switch, case
     *
     */



    /**
     * Exercise 2.1 (1 points)
     *
     * Use a switch-case statement to create a message with the type of fruit and
     * its color. You have the following type of fruits with a corresponding
     * color:
     *
     * * banana: yellow
     * * apple: green
     * * kiwi: green
     * * plum: purple
     *
     * Create a variable `myFruit` which holds the current type of your fruit. If
     * 'myFruit' is banana, the result should be a variable containing the string
     * value `"The banana is yellow."`
     *
     * Ensure that your switch-case works for all values.
     *
     * Answer with the result where `myFruit = "apple"`.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */



    let fruits = { 'banana': 'yellow', 'apple': 'green', 'kiwi': 'green', 'plum': 'purple' };
    let myFruit = 'apple';

    switch (myFruit) {
        case 'banana':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        case 'apple':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        case 'kiwi':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        case 'plum':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
    }


    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("2.1", ANSWER, false);

    /**
     * Exercise 2.2 (1 points)
     *
     * Extend your switch-case statement with a `default value`. The result should
     * be:
     *
     * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
     * value.
     *
     * Answer with the result where 'myFruit = pear'.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    myFruit = 'pear';

    switch (myFruit) {
        case 'banana':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        case 'apple':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        case 'kiwi':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        case 'plum':
            result = `The ${myFruit} is ${fruits[myFruit]}.`;
            break;
        default:
            result = 'That is an unknown fruit.';
    }


    ANSWER = result;



    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("2.2", ANSWER, false);

    /** ----------------------------------------------------------------------
     * Section 3 . For loops
     *
     */



    /**
     * Exercise 3.1 (1 points)
     *
     * Use a `for-loop` to increment `322` with the value `5`, `10` times.
     *
     * Answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let base = 322;
    let incr = 5;

    for (let i = 0; i < 10; i++) {
        base += incr;
    }



    ANSWER = base;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("3.1", ANSWER, false);

    /**
     * Exercise 3.2 (1 points)
     *
     * Use a for-loop to decrement `636` with the value `3`, `11` times.
     *
     * Answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let base3_2 = 636;
    let incr3_2 = 3;



    for (let i = 0; i <= 10; i++) {
        base3_2 -= incr3_2;
    }



    ANSWER = base3_2;



    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("3.2", ANSWER, false);

    /**
     * Exercise 3.3 (3 points)
     *
     * Use a for-loop to add all the even values in the range `23` to `43` to a
     * string with each number separated by a comma `,`.
     *
     * The result should not end with a comma. You should neither have a space
     * after the comma.
     *
     * Answer with the resulting string.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let startV = 23;
    let endV = 43;

    let answer = [];

    for (let i = startV; i < endV; i++) {
        if (i % 2 == 0) {
            answer.push(i);
        }
    }

    answer = answer.join();

    ANSWER = answer;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("3.3", ANSWER, false);

    /** ----------------------------------------------------------------------
     * Section 4 . While loops
     *
     */



    /**
     * Exercise 4.1 (1 points)
     *
     * Use a `while-loop` to increment `10` with the value `5` until it has
     * reached or passed `322`.
     *
     * Answer with the amount of steps needed.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    startV = 10;
    endV = 322;
    incr = 5;
    let steps = 0;

    while (startV < endV) {
        startV += incr;
        steps += 1;
    }





    ANSWER = steps;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("4.1", ANSWER, false);

    /**
     * Exercise 4.2 (1 points)
     *
     * Use a while-loop to subtract `3` from `636` until the value has reached or
     * passed `0`.
     *
     * Answer with the amount of steps needed.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let base1 = 636;
    let decr = 3;
    let steps1 = 0;

    while (base1 > 0) {
        base1 -= decr;
        steps1 += 1;
    }




    ANSWER = steps1;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("4.2", ANSWER, false);

    /**
     * Exercise 4.3 (3 points)
     *
     * Use a while-loop to add all the values, to a comma-separated string, in the
     * range `28` to `67`, where the value is divisable by 5 or 7.
     *
     * Answer with the resulting string.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let ans4_2 = [];
    let base4_2 = 28;
    let endV4_2 = 67;

    while (base4_2 < endV4_2) {
        if (base4_2 % 5 == 0 || base4_2 % 7 == 0) {
            ans4_2.push(base4_2);
        }
        base4_2 += 1;
    }

    ans4_2 = ans4_2.join();

    ANSWER = ans4_2;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("4.3", ANSWER, false);


    console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
