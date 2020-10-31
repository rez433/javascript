/* ################## alla variables ################## */
let totAntal = 0;
let totPris = 0;

const row = document.getElementsByTagName("TR");
const tHead = document.createElement("TH");
const table = document.getElementById("pricetable");
const rowLen = row.length;

const content = document.getElementById("content");
const calcBtn = document.createElement("button");
const reducerad = document.createElement("span");
calcBtn.innerText = "Beräkna pris";
calcBtn.setAttribute("class", "btn-primary");

content.appendChild(calcBtn);

/* ###################### function ############################ */

// skapa ny row and column
function addCell() {
  const tHeadTxt = document.createTextNode("Summa: ");
  tHead.appendChild(tHeadTxt);
  row[0].appendChild(tHead);

  let totSum = table.insertRow(-1);
  totSum.insertCell(0);
  totSum.setAttribute("id", "sumrow");

  totSum.insertCell(1);
  totSum.insertCell(2);
  totSum.insertCell(3);
  totSum.insertCell(4).setAttribute("class", "totAntal");
  totSum.insertCell(5).setAttribute("class", "totSumma");

  for (let i = 1; i < rowLen; i++) {
    const prisCell = row[i].insertCell(5);
    let pris = row[i].children[3].textContent;
    let antal = row[i].children[4].children[0];
    antal.setAttribute("type", "number");
    antal.value = 0;
    antal.min = 0;
    prisCell.innerText = `${antal.value * pris} sek`;

    /* när antalet på en vara ändras då funktionen 
    aktiveras och räknar pris i samma rad */

    antal.onchange = function () {
      prisCell.innerText = `${antal.value * pris} sek`;
    };
  }
}

//  visa summering row med summan av antal och pris
function visaSumma() {
  let totAntalCell = document.querySelector(".totAntal");
  let totSumCell = document.querySelector(".totSumma");

  // nolla värden för total antal och total pris
  totAntal = 0;
  totPris = 0;

  // räkna total antal och total pris
  for (let i = 1; i < rowLen; i++) {
    let cellAntal = row[i].cells[4].children[0].value;

    let pris = row[i].children[5].textContent.slice(0, -4);

    totAntal = totAntal + parseInt(cellAntal);
    totPris = totPris + parseInt(pris);
  }
  // Visa total antal av varor och totall summan
  totAntalCell.innerText = totAntal;
  totSumCell.innerText = totPris;
}

/* ################## EventListeners ################## */

calcBtn.addEventListener("click", visaSumma);

/* ##################  anropa all function när sidan laddas ################## */
addCell();
visaSumma();
