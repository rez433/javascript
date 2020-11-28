/* jslint esversion: 6 */

const myObj = {

    init: function (land, parts) {
        this.land = land;
        this.parts = parts;
        const allFlagsList = this.getElm(".flagslist");
        const ulList = this.cr8Elm('ul');
        const landLi = this.makeList(this.land);

        landLi.addEventListener('click', e => this.draw(e, this.land, this.parts));
        ulList.append(landLi);
        allFlagsList.prepend(ulList);
    },

    // draw flag/flags
    draw: function (e = '') {
        let allFlagsDiv = '';

        if (e.type == 'click') {
            allFlagsDiv = this.getElm(".flag");
            allFlagsDiv.innerHTML = '';
        } else {
            allFlagsDiv = this.getElm(".flagDiv");
        }
        const flagDiv = this.cr8Elm("div", this.land);

        flagDiv.style.margin = '1rem';
        for (let i = 0; i < this.parts; i++) {
            const divChild = this.cr8Elm('div', `part${i + 1}`);

            flagDiv.append(divChild);
        }

        this.addEv(flagDiv);

        allFlagsDiv.append(flagDiv);
    },

    // add Eventlistener to flag
    addEv: function(flag) {
        flag.addEventListener('click', function() {
            flag.style.display = 'none';
        });
    },

    // make a ul list of all flags
    makeList: function (land) {
        const li = this.cr8Elm('li');
        const a = this.cr8Elm('a');

        a.href = "#";
        a.innerHTML = land;
        li.appendChild(a);
        return li;
    },

    // create an element with/without class
    cr8Elm: function(tag, className) {
        const Elm = document.createElement(tag);

        if (className) {
            Elm.classList.add(className);
        }
        return Elm;
    },

    // get en element by its selector (class or id)
    getElm: function(selector) {
        const Elm = document.querySelector(selector);

        return Elm;
    },
};

const obj1 = Object.create(myObj);
const obj2 = Object.create(myObj);
const obj3 = Object.create(myObj);
const obj4 = Object.create(myObj);

obj1.init('Sweden', 2);
obj2.init('Sudan', 3);
obj3.init('Surinam', 2);
obj4.init('Armenien', 2);

const allObj = [obj1, obj2, obj3, obj4];

allObj.map(obj => obj.draw());
