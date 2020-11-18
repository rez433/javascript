// jshint esversion: 6

(function IIFE() {
    'use strict';

    const roll = document.querySelector("#roll");

    const dicesInput = document.querySelector("#dices");
    const sidesInput = document.querySelector("#sides");

    // Get the value of dices and sides
    let dices = dicesInput.value;
    let sides = sidesInput.value;

    // Update the dices and sides value on change
    dicesInput.addEventListener('change', () => {
        dices = dicesInput.value;
    });
    sidesInput.addEventListener('change', () => {
        sides = sidesInput.value;
    });

    // on button click call the rollDice function and send the dices and sides value
    roll.addEventListener('click', e => rollDice(e, dices, sides));
})();


function rollDice(e, dices, sides) {
    let results = [];
    const resultsDiv = document.querySelector("#results");
    let sum = 0;
    let avg = 0;

    if (e.type === 'click') {
        results = [];
        for (let i = 0; i < dices; i++) {
            // send sides as arg to getRand func and push it to results array
            const result = getRand(sides);

            results.push(result);
        }
    }

    for (let i = 0; i < results.length; i++) {
        // calculate the sum and avg of results array
        sum = results.reduce((a, b) => a + b);
        avg = sum / results.length;
        avg = avg.toFixed(2);
    }

    resultsDiv.innerHTML = `sum: ${sum} and avrage: ${avg}<br><br> ${results}`;
    console.log(results, 'sum: ', sum, 'avg: ', avg);
}

function getRand(sides) {
    // Generate a random number between 1 and sides value
    let res = Math.random() * sides;

    res = Math.ceil(res);
    return res;
}
