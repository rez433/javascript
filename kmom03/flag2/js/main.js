// jshint esversion: 6

(function IIFE() {
    const flagsList = document.querySelector('.flagslist');
    const flagDiv = document.querySelector('.flagDiv');
    const df = new DocumentFragment();
    const df1 = new DocumentFragment();
    const landUl = document.createElement('ul');

    const flags = { 'Sweden': 2, 'Surinam': 2, 'Armenien': 2, 'Sudan': 3 };

    // draw all flags
    for (const land in flags) {
        let flag = drawFlag('', land, flags[land]);

        df1.append(flag);
    }

    // make list of all flags
    for (const land in flags) {
        const landLi = genList(land);

        landLi.addEventListener('click', e => this.drawFlag(e, land, flags[land]));
        landUl.append(landLi);
    }

    df.append(landUl);
    flagsList.append(df);
    flagDiv.append(df1);
})();

// function to generate list of flags
function genList(land) {
    const landLi = document.createElement('li');
    const anchor = document.createElement('a');

    landLi.classList.add(land);
    anchor.innerHTML = land;
    anchor.href = '#';
    landLi.append(anchor);
    return landLi;
}

// function to draw the flag
function drawFlag(e, land, parts) {
    const df = new DocumentFragment();
    const div = document.createElement('div');

    div.classList.add('flag');
    div.classList.add(land);

    // hide flag on click
    div.addEventListener('click', () => {
        div.style.display = 'none';
    });

    for (let i = 0; i < parts; i++) {
        const divChild = document.createElement('div');

        divChild.classList.add(`part${i + 1}`);
        df.append(divChild);
    }
    div.append(df);

    if (e.type == 'click') {
        const flag = document.querySelector('.flag');

        flag.innerHTML = '';
        flag.append(div);
    } else {
        return div;
    }
}
