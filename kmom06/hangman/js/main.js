// jshint esversion: 6

(function IIFE() {
    'use strict';
    const hangman = window.Hangman;
    const letters = document.querySelector('.letters');
    const matchDiv = document.querySelector('.match');
    const resetBtn = document.querySelector('.reset');

    resetBtn.style.display = 'none';
    resetBtn.addEventListener('click', function() {window.location.reload();});
    let fail = 0;
    let match = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split('');

    hangman.getRand();
    let answer = hangman.peek().toLowerCase().split('');

    for (let i = 0; i < answer.length; i++) {
        let span = document.createElement('span');

        span.innerHTML = '-';
        span.className = 'placeholder';
        matchDiv.append(span);
    }

    for (let i = 0; i < hangman.validParts.length; i++) {
        hangman.hide(hangman.validParts[i]);
    }

    let winMsg = 'You Won The Game!';
    let failMsg = 'Game Over';

    function makeGuess(e) {
        let ph = document.querySelectorAll('.placeholder');
        let ord = e.target.innerHTML;

        e.target.style.pointerEvents = 'none';
        e.target.style.color = 'grey';

        if (answer.includes(ord.toLowerCase())) {
            for (let i = 0; i < answer.length; i++) {
                if (answer[i] === ord.toLowerCase()) {
                    match.push(i);
                }
            }

            if (match.length > 0) {
                for (let i = 0; i < match.length; i++) {
                    ph[match[i]].innerHTML = answer[match[i]];
                }
            }
            if (match.length === answer.length) {
                console.log('you win');
                letters.parentNode.removeChild(letters);
                document.querySelector('.winmsg').innerHTML = winMsg;
                resetBtn.style.display = 'block';
            }
        } else {
            fail++;
            hangman.show(hangman.validParts[fail - 1]);
            if (fail === hangman.validParts.length) {
                letters.parentNode.removeChild(letters);
                document.querySelector('.winmsg').innerHTML = failMsg;
                resetBtn.style.display = 'block';
            }
        }
    }

    for (let i = 0; i < alphabet.length; i++) {
        const letter = document.createElement('div');

        letter.className = 'letter';
        letter.innerHTML = alphabet[i];
        letter.addEventListener('click', makeGuess);
        letters.append(letter);
    }
})();
