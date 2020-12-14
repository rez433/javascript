// jshint esversion: 6

(function IIFE() {
    'use strict';

    /*
        // let tests = document.querySelectorAll('.test'); // static list
        let tests = document.getElementsByClassName('test'); // live list

        // for (let i = 0; i < tests.length; i++) {
        //     tests[i].className = '';
        //     console.log(i);
        // }
        // with live list prints only half the list
        // with static lists prints all the list

        console.log(tests.length); // prints 10 in both live list and static list

        let el = document.createElement('div');
        el.className = 'test';
        document.body.appendChild(el);
        console.log(tests.length); // with live list prints 11, with static list prints 10
    */

    const box = document.querySelector('#box1');
    let winHeight = window.innerHeight;
    let winWidth = window.innerWidth;
    let boxHeight = box.offsetHeight;
    let boxWidth = box.offsetWidth;

    // const boxLeft = window.getComputedStyle(box1).getPropertyValue('left');
    // const boxRight = window.getComputedStyle(box1).getPropertyValue('right');
    const boxLeft = parseInt(window.getComputedStyle(box).left);
    const boxTop = parseInt(window.getComputedStyle(box).top);
    const boxRight = parseInt(window.getComputedStyle(box).right);

    function printInfo() {
        console.log('box1 h,w: ', boxHeight, ', ', boxWidth);
        console.log('window h,w: ', winHeight, ', ', winWidth);
        console.log('box1 left, right, top: ', boxLeft, boxRight, boxTop);
    }

    function moveBox() {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        boxHeight = box.offsetHeight;
        boxWidth = box.offsetWidth;

        box.style.left = (winWidth / 2) - (boxWidth / 2) + 'px';
        box.style.top = (winHeight / 2) - (boxHeight / 2) + 'px';
    }

    function toggleSelected(e) {
        e.target.classList.toggle('selected');
    }

    function getAllSelected() {
        return document.getElementsByClassName('selected');
    }

    function toggleCircle(e) {
        if (e.key === 'e' || e === 'e') {
            let all = getAllSelected();

            for (let i = 0; i < all.length; i++) {
                all[i].classList.toggle('circle');
            }
        }
    }

    function changeColor(e) {
        if (e.key === 'r' || e === 'r') {
            let all = getAllSelected();

            for (let i = 0; i < all.length; i++) {
                let clr = all[i].classList;

                if (clr.item(0) === 'green') { // green
                    clr.replace('green', 'yellow');
                } else if (clr.item(0) === 'yellow') {
                    clr.replace('yellow', 'red'); // yellow
                } else if (clr.item(0) === 'red') { // red
                    clr.replace('red', 'blue'); // blue
                } else if (clr.item(0) === 'blue') { // blue
                    clr.replace('blue', 'purple');// green
                } else if (clr.item(0) === 'purple') { // purple
                    clr.replace('purple', 'green');// green
                }
            }
        }
    }


    function getRandNum(i) {
        const n = Math.floor(Math.random() * i);

        return n;
    }

    function countElm() {
        const cloned = document.querySelectorAll('.clone');

        return cloned.length;
    }

    function chngZ(e) {
        let all = document.querySelectorAll('.selected');

        all.forEach(elm => {
            if (e.key === 'a') {
                let zndx = parseInt(elm.style.zIndex) + 1;

                elm.style.zIndex = zndx;
            } else if (e.key === 's') {
                let zndx = parseInt(elm.style.zIndex) - 1;

                elm.style.zIndex = zndx;
            }
        });
    }

    function duplicate(e) {
        const all = getAllSelected();
        const elm = all[0].cloneNode(true);
        const top = getRandNum(800);
        const left = getRandNum(1500);

        elm.style.left = left + 'px';
        elm.style.top = top + 'px';
        elm.id = '';
        elm.id = Date.now();
        elm.classList.remove('selected');
        elm.classList.add(`clone`);
        // const z = countElm();

        elm.style.zIndex = 1;
        elm.addEventListener('click', e => toggleSelected(e));

        if (e.key === 't') {
            document.body.prepend(elm);
            const clones = countElm();
            const msg = clones == 1 ? `${clones} element added to body` :
                `${clones} elements added to body`;

            console.log(msg);
        } else if (e === 'random') {
            return elm;
        }
    }

    function unSelect(e) {
        if (e.key === 'u') {
            let all = document.querySelectorAll('.selected');

            all.forEach(elm => elm.classList.remove('selected'));
        }
    }

    function delElm(e) {
        if (e.key === 'y') {
            const everySelected = document.querySelectorAll('.selected');

            everySelected.forEach(elm => e.target.removeChild(elm));
        }
    }


    function selectAll(e) {
        if (e.key === 'i') {
            const all = document.querySelectorAll('.box');

            all.forEach(elm => elm.classList.add('selected'));
        }
    }

    function randomElm(e) {
        let all = document.querySelectorAll('.selected');

        if (e.key === 'p' && all.length > 0) {
            const shape = getRandNum(5);
            const newElm = duplicate('random');
            const colur = getRandNum(5);

            // newElm.classList.remove('green');
            const colors = ['red', 'black', 'yellow', 'blue', 'purple'];
            const shapes = ['triangle', 'rectangle', 'circle', 'oval', 'square'];

            let allClass = newElm.classList;

            shapes.forEach(shape => {
                if (allClass.contains(shape)) {
                    newElm.classList.remove(shape);
                }
            });
            newElm.classList.remove('circle');
            newElm.classList.remove('square');

            newElm.classList.add(shapes[shape]);
            newElm.classList.replace('green', colors[colur]);
            console.log(newElm);

            document.body.prepend(newElm);
        }
    }


    function moveElm(e) {
        const everySelected = document.querySelectorAll('.selected');

        everySelected.forEach(elm => {
            if (e.key === 'ArrowLeft') {
                let leftside = parseInt(window.getComputedStyle(elm).left);

                elm.style.left = (leftside - 5) + 'px';
            } else if (e.key === 'ArrowRight') {
                let leftside = parseInt(window.getComputedStyle(elm).left);

                elm.style.left = (leftside + 5) + 'px';
            } else if (e.key === 'ArrowUp') {
                let topside = parseInt(window.getComputedStyle(elm).top);

                elm.style.top = (topside - 5) + 'px';
            } else if (e.key === 'ArrowDown') {
                let topside = parseInt(window.getComputedStyle(elm).top);

                elm.style.top = (topside + 5) + 'px';
            }
        });
    }

    function resize(e) {
        let elm = document.getElementById(e);

        elm.classList.add('animateSize');

        setTimeout(() => {
            elm.classList.remove('selected');
            document.body.removeChild(elm);
        }, 2000);
    }

    function fastChange(e) {
        if (e.key === 'd') {
            console.log('start');
            const shapes = ['rectangle', 'triangle', 'oval', 'circle', 'square'];
            const all = document.querySelectorAll('.selected');

            shapes.forEach((shape, index) => {
                setTimeout(() => {
                    all.forEach(elm => {
                        const allClass = elm.classList;

                        shapes.forEach(shape => {
                            if (allClass.contains(shape)) {
                                elm.classList.remove(shape);
                            }
                        });

                        elm.classList.add(shape);
                        // console.log(elm, ': ', shape);
                        const top = getRandNum(800);
                        const left = getRandNum(1500);

                        elm.style.left = left + 'px';
                        elm.style.top = top + 'px';
                    });
                    changeColor('r');
                }, index * 200);
            });
        }
    }

    function addSize(e) {
        let all = document.querySelectorAll('.selected');

        if (e.key === 'q') {
            all.forEach(elm => {
                let elmWidth = parseInt(elm.clientWidth);
                let elmHeight = parseInt(elm.clientWidth);

                elm.style.height = elmHeight + 10 + 'px';
                elm.style.width = elmWidth + 10 + 'px';
            });
        }
    }

    function minSize(e) {
        let all = document.querySelectorAll('.selected');

        if (e.key === 'w') {
            all.forEach(elm => {
                let elmWidth = parseInt(elm.clientWidth) - 10;
                let elmHeight = parseInt(elm.clientHeight) - 10;

                elm.style.height = elmHeight + 'px';
                elm.style.width = elmWidth + 'px';
            });
        }
    }


    function turnElm(e) {
        if (e.key === 'o') {
            const all = document.querySelectorAll('.selected');

            all.forEach(elm => {
                let deg1 = elm.style.transform;

                if (!deg1) {
                    elm.style.transform = `rotate(45deg)`;
                } else {
                    let deg2 = deg1.replace('rotate(', '');

                    deg2 = deg2.replace('deg)', '');
                    console.log(deg2);
                    let deg = parseInt(deg2);

                    deg += 45;
                    elm.style.transform = `rotate(${deg}deg)`;
                }
            });
        }
    }

    window.addEventListener('dblclick', e => resize(e.target.id));

    window.addEventListener('resize', e => moveBox(e));
    box.addEventListener('click', toggleSelected);

    document.addEventListener('keydown', e => {
        let key = e.key;

        switch (key) {
            case 'e':
                toggleCircle(e);
                break;

            case 'r':
                changeColor(e);
                break;

            case 't':
                duplicate(e);
                break;

            case 'a':
                chngZ(e);
                break;

            case 's':
                chngZ(e);
                break;

            case 'y':
                delElm(e);
                break;

            case 'u':
                unSelect(e);
                break;

            case 'i':
                selectAll(e);
                break;

            case 'p':
                randomElm(e);
                break;

            case 'ArrowLeft':
                moveElm(e);
                break;

            case 'ArrowRight':
                moveElm(e);
                break;

            case 'ArrowUp':
                moveElm(e);
                break;

            case 'ArrowDown':
                moveElm(e);
                break;

            case 'd':
                fastChange(e);
                break;

            case 'o':
                turnElm(e);
                break;

            case 'q':
                addSize(e);
                break;

            case 'w':
                minSize(e);
                break;
        }
    });
    printInfo();
    moveBox();
})();
