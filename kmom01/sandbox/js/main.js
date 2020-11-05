// jshint esversion: 6

(function IIFE() {
    'use strict';

    const myContent = document.querySelector('#content');

    let title = '<h3>This is a MEGA template!</h3>';

    let content = '';

    content += title;

    window.console.log('Sandbox is ready!');
    const today = new Date();

    const timeNow = today.toLocaleString('ja-jp');

    // const min = today.getMinutes();
    // const sec = today.getSeconds();

    // const datum = `<p><span>${today.getFullYear()}</span>-<span>${addZero(today.getMonth())}
    // </span>-<span>${addZero(today.getDate())}</span></p>`;
    // const tid = `<p><span>${today.getHours()}</span>: <span>${addZero(min)}</span>: <span>
    // ${addZero(sec)}</span></p>`;

    // content += datum;
    // content += tid;

    const datum = `<p>${timeNow}</p>`;

    console.log(timeNow);


    content += datum;
    myContent.innerHTML = content;
    setTimeout(IIFE, 1000);
})();


// function addZero(i) {
//     if (i < 10) {
//         i = '0' + i;
//     }
//     return i;
// }
