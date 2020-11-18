/**
 * @preserve 0dc6d931409b5db66ade49b6682d6c53
 *
 * 0dc6d931409b5db66ade49b6682d6c53
 * js
 * lab3
 * v1
 * rere20
 * 2020-11-14 14:59:37
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-11-14 15:59:37 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent, newline-after-var */
/* jscs:disable indent */
/*jshint esversion: 6 */
(function (dbwebb) {
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


    /** ======================================================================
     * Lab 3 - functions
     *
     * Practice to write functions.
     *
     */



    /** ----------------------------------------------------------------------
     * Section 1 . Basic functions
     *
     * Practice on basic functions.
     *
     */



    /**
     * Exercise 1.1 (1 points)
     *
     * Create a function `sumRangeNumbers()` that returns the sum of all numbers
     * between two chosen numbers. The function should take two arguments, one
     * representing the lowest boundary and one that represents the highest
     * boundary. For example, the arguments 10 and 20 should return the sum of
     * 10+11+12+13...+20.
     *
     * Test it using the values `46 and 88`, answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    let l = 46;
    let h = 88;
    let list1 = [];

    function sumRangeNumbers(l, h) {
        for (let i = l; i <= h; i++) {
            list1.push(i);
        }

        let svar = list1.reduce((a, b) => a + b);
        return svar;
    }

    let result = sumRangeNumbers(l, h);


    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.1", ANSWER, false);

    /**
     * Exercise 1.2 (1 points)
     *
     * Create a function called `fruitColor()` that takes one argument called
     * `fruit` and returns the color of the fruit.
     *
     * The function should be aware of the following fruits (`banana, apple, kiwi,
     * plum`) with respective color (`yellow, green, green, red`).
     *
     * Try it out using the fruit `apple` and answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let fList = ['banana', 'apple', 'kiwi', 'plum'];
    let colors = ['yellow', 'green', 'green', 'red'];

    function fruitColor(f) {
        let indx = fList.indexOf(f);
        let svar = colors[indx];
        return svar;
    }

    let result2 = fruitColor('apple');

    ANSWER = result2;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.2", ANSWER, false);

    /**
     * Exercise 1.3 (1 points)
     *
     * Create a function `printRange()` that takes two arguments `rangeStart` and
     * `rangeStop` and returns a string with all numbers comma-separated in the
     * range.
     *
     * Try it using the arguments `25 and 47`.
     *
     * Answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    let rangeStart = 25;
    let rangeStop = 47;

    function printRange(l, h) {
        let list3 = [];
        for (let i = l; i <= h; i++) {
            list3.push(i);
        }

        return list3.join();
    }

    let result3 = printRange(rangeStart, rangeStop);

    ANSWER = result3;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.3", ANSWER, false);

    /**
     * Exercise 1.4 (1 points)
     *
     * Create a function `printRangeReversed()` that takes two arguments
     * `rangeStart` and `rangeStop` and returns a string with all numbers
     * comma-separated in the range.
     *
     * Try it using the arguments `47 and 25`.
     *
     * Answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    rangeStart = 47;
    rangeStop = 25;


    function printRangeReversed(l, h) {
        let list4 = [];
        for (let i = l; i >= h; i--) {
            list4.push(i);
        }

        return list4.join();
    }

    let result4 = printRangeReversed(rangeStart, rangeStop);

    ANSWER = result4;


    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.4", ANSWER, false);

    /**
     * Exercise 1.5 (1 points)
     *
     * Create a function `printAnyRange()` that takes two arguments `rangeStart`
     * and `rangeStop` and returns a string with all numbers comma-separated in
     * the range.
     *
     * If `rangeStart` is smaller than `rangeStop` then call the function
     * `printRange()`.
     *
     * If `rangeStart` is greater than `rangeStop` the call the function
     * `printRangeReversed()`.
     *
     * Try it using the arguments `25 and 47` (both ways).
     *
     * Answer with the result using arguments 25 and 47.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    function printAnyRange(l, h) {
        let svar = '';
        if (l < h) {
            svar = printRange(l, h);
        } else if (l > h) {
            svar = printRangeReversed(l, h);
        }

        return svar;
    }

    result = printAnyRange(25, 47);

    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.5", ANSWER, false);

    /**
     * Exercise 1.6 (1 points)
     *
     * Create a function called `stringRepeat()` that returns a string a specific
     * number of times. The function should take two arguments, one string and one
     * number: `blue` and `6`. The number represents the number of times the
     * string should be added to a string.
     *
     * Test the function and answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    function stringRepeat(str, num) {
        let list = '';
        let i = 0;
        while (i < num) {
            list += str;
            i++;
        }

        return list;
    }

    result = stringRepeat('blue', 6);


    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.6", ANSWER, false);

    /**
     * Exercise 1.7 (1 points)
     *
     * Create a function `inRange()` that takes three arguments, `rangeStart`,
     * `rangeStop` and `value`.
     *
     * The function should return boolean `true` if value is greater than
     * rangeStart and less than rangeStop. Otherwise it should return boolean
     * `false`.
     *
     * Try it out using the range `141 - 586` and the value `362`.
     *
     * Answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    function inRange(l, h, v) {
        let svar = false;
        if (v > l && v < h) {
            svar = true;
            return svar;
        } else {
            return svar;
        }
    }

    result = inRange(141, 586, 362);


    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.7", ANSWER, false);

    /**
     * Exercise 1.8 (1 points)
     *
     * Try out the function `inRange()` using the range `141 - 586` and the value
     * `662`.
     *
     * Answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */

    result = inRange(141, 586, 662);




    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.8", ANSWER, false);

    /**
     * Exercise 1.9 (1 points)
     *
     * Create a function called `degreesToRadians()` that should take one
     * argument, a degree value. The function should convert the value to radians
     * and return the result with max 4 decimals.
     *
     * Test your function with the value `12` and answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    function degreesToRadians(deg) {
        let svar = deg * (Math.PI / 180);
        return svar.toFixed(4);
    }

    result = degreesToRadians(12);
    result = parseFloat(result);
    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.9", ANSWER, false);

    /**
     * Exercise 1.10 (1 points)
     *
     * Create a function called `fizzBuzz()` that takes two arguments `start` and
     * `stop` and returns a comma-separated string.
     *
     * The arguments represents the starting point and stop point of the game
     * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
     * run from start to stop and add `Fizz`, `Buzz` or both to your
     * result-variable at appropriate numbers.
     *
     * Each entry to your result should be comma-separated. If `stop` is equal or
     * lower than `start`, the function should return an appropriate error
     * message.
     *
     * Test the function using `start=3 and stop=22`.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    function fizzBuzz(l, h) {
        let svar = [];
        let list = [];
        for (let i = l; i <= h; i++) {
            list.push(i);
        }

        list.forEach(n => {
            if (n % 3 == 0 && n % 5 == 0) {
                svar.push('Fizz Buzz');
            } else if (n % 5 == 0) {
                svar.push('Buzz');
            } else if (n % 3 == 0) {
                svar.push('Fizz');
            } else {
                svar.push(n);
            }
        });
        return svar.join();
    }

    result = fizzBuzz(3, 22);

    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("1.10", ANSWER, false);

    /** ----------------------------------------------------------------------
     * Section 2 . Extra assignments
     *
     * These questions are worth 3 points each. Solve them for extra points. In
     * this section, you could re-use your code from lab 1 in exercise 2.1 and
     * 2.2.
     *
     */



    /**
     * Exercise 2.1 (3 points)
     *
     * Create a function called `printSum()` that should take two variables, the
     * sum of the players hand and the sum of the dealers hand.
     *
     * Your hand should be three cards with the values: `9, 10 and 9`.
     * The dealers hand should be three card with the values: `5, 8, 1`.
     * The function should return the sum and the player: `Player: 28, Dealer:
     * 14`.
     *
     * Test your function with the given values and answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */



    function printSum(player, dealer) {
        let svar = '';
        let pHand = player.reduce((a, b) => a + b);
        let dHand = dealer.reduce((a, b) => a + b);

        svar = `Player: ${pHand}, Dealer: ${dHand}`;
        return svar;
    }


    result = printSum([9, 10, 9], [5, 8, 1]);

    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("2.1", ANSWER, false);

    /**
     * Exercise 2.2 (3 points)
     *
     * Create a function called `printResult()` that should take two variables,
     * the sum of the players hand and the sum of the dealers hand.
     *
     * Players hand should be three cards with the values: `9, 10 and 9`. The
     * dealers hand should be three card with the values: `5, 8, 1`.
     *
     * This time you should include the check from lab 2 where you find out the
     * boundaries of the player and the dealer.
     * Player hand = 21 (black jack).
     * Player hand less than 21 (safe).
     * Player hand larger than 21 (busted).
     * Dealer hand less than 17 (safe).
     * Dealer hand larger or equal to 17 and less than 21 (stop).
     * Dealer hand = 21 (black jack).
     * Delaer hand larger than 21 (busted).
     *
     * Return a string in the format: `Player: safe, Dealer: busted`.
     *
     * Test your function with the given values and answer with the result.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */


    function printResult(player, dealer) {
        let pHand = player.reduce((a, b) => a + b);
        let dHand = dealer.reduce((a, b) => a + b);
        let svar = '';
        let checkP = checkHand(pHand, 'player');

        let checkD = checkHand(dHand, 'dealer');

        svar = `Player: ${checkP}, Dealer: ${checkD}`;
        return svar;
    }

    function checkHand(hand, who) {
        let svar = '';
        console.log(hand, who);
        if (hand >= 22) {
            svar = 'busted';
        } else if (hand <= 20 && who == 'player') {
            svar = 'safe';
        } else if (hand == 21) {
            svar = 'black jack';
        } else if (hand <= 16 && who == 'dealer') {
            svar = 'safe';
        } else if (who == 'dealer' && hand <= 17 && hand < 21) {
            svar = 'stop';
        }
        return svar;
    }

    result = printResult([9, 10, 9], [5, 8, 1]);
    // result = printResult([9, 10, 2], [5, 8, 10]);
    // result = printResult([9, 3, 6], [5, 8, 8]);


    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("2.2", ANSWER, false);

    /**
     * Exercise 2.3 (3 points)
     *
     * Create a function called `calculateInterest()` that returns the money you
     * have after x years of interest, given three arguments: `871, 45 and 5`.
     * First argument represents the start money, the second argument represents
     * the number of years your money produces interest. The third argument is the
     * interest rate in percent (%).
     *
     * Test your function and answer with the result with a maximum of 4 decimals.
     *
     * Write your code below and put the answer into the variable ANSWER.
     */



    function calculateInterest(start, years, interests) {
        let svar = start;
        let i = 0;
        while (i < years) {
            svar += svar * (interests / 100);
            i++;
        }

        svar = svar.toFixed(4);
        return parseFloat(svar);
    }

    result = calculateInterest(871, 45, 5);

    ANSWER = result;

    // I will now test your answer - change false to true to get a hint.
    dbwebb.assert("2.3", ANSWER, false);


    console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
