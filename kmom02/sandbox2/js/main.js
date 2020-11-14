// jshint esversion: 6

(function IIFE() {
    'use strict';
    const box = document.querySelector('.box');

    document.addEventListener('keydown', e => moveit(e, box));
})();


function moveit(e, box) {
    const key = e.key;
    let left = box.offsetLeft;
    let top = box.offsetTop;
    const step = 10;

    switch (key) {
        case "ArrowDown":
            e.preventDefault();
            if (top + step < 540) {
                box.style.background = 'yellow';
                box.style.top = (top + step) + "px";
            } else {
                box.style.background = 'red';
            }
            break;

        case "ArrowUp":
            e.preventDefault();
            if (top - step > 80) {
                box.style.background = 'yellow';
                box.style.top = (top - step) + "px";
            } else {
                box.style.background = 'red';
            }
            break;

        case "ArrowLeft":
            e.preventDefault();
            if (left - step > 197) {
                box.style.background = 'yellow';
                box.style.left = (left - step) + "px";
            } else {
                box.style.background = 'red';
            }
            break;

        case "ArrowRight":
            e.preventDefault();
            if (left + step < 966) {
                box.style.background = 'yellow';
                box.style.left = (left + step) + "px";
            } else {
                box.style.background = 'red';
            }
            break;
    }
}
