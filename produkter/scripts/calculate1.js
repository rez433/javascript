let totAntal = 0;
let totPris = 0;

let row = document.getElementsByTagName("TR");
let tHead = document.createElement("TH");
let table = document.getElementById("pricetable");
let rowL = row.length;

let content = document.getElementById("content");
let calcBtn = document.createElement("button");
let reducerad = document.createElement("span");
reducerad.setAttribute("class", "rabattSpan");
reducerad.innerHTML = " ";
calcBtn.innerText = "Beräkna pris";
calcBtn.setAttribute("class", "btn-primary");
let rabatt = document.createElement("input");
rabatt.setAttribute("class", "rabatt");
rabatt.placeholder = "din rabatt kod";

// #### rabattkod som ger 20% rabatt på total summan #######
const rabattKod = "vinter2020";

content.appendChild(rabatt);
content.appendChild(calcBtn);
content.appendChild(reducerad);

addCell();
visaSumma();

// ###################### function ############################

// ######### skapa ny row and column #############
function addCell() {
  let tHeadTxt = document.createTextNode("Summa: ");
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

  for (let i = 1; i < rowL; i++) {
    let prisCell = row[i].insertCell(5);

    let pris = row[i].children[3].textContent;

    let antal = row[i].children[4].children[0];
    antal.value = 0;
    antal.min = 0;
    antal.max = 10;
    prisCell.innerText = `${antal.value * pris} sek`;

    /*############## när antalet på en vara ändras då funktionen 
    aktiveras och räknar och anropar visaSumma funktionen ############## */

    antal.onchange = function () {
      row[i].classList.remove("b2b");
      // ########### Kontrollera om antalet är mindre än 10 per vara ##############
      if (antal.value != 10) {
        row[i].classList.remove("maxAntal");
        document.getElementById("b2b").classList.remove("b2b");
        prisCell.innerText = `${antal.value * pris} sek`;
      } // ########## om mer än 10 highlight raden ##############
      else {
        row[i].setAttribute("class", "maxAntal");
      }
      // #### nollar antal och pris först sen anropar visaSumma ######
      totAntal = 0;
      totPris = 0;
      visaSumma();
    };
  }
}

// ################ visa summering row med summan av antal och pris ################
function visaSumma() {
  let totAntalCell = document.querySelector(".totAntal");
  let totSumCell = document.querySelector(".totSumma");
  for (let i = 1; i < rowL; i++) {
    /* ######### kontrollera om en beställt mer än 10 av en vara 
     då visa en ruta och meddela kund att kontakta B2B support ########## */
    if (row[i].cells[4].children[0].value == 10) {
      document.getElementById("b2b").setAttribute("class", "b2b");
    }

    let cellAntal = row[i].cells[4].children[0].value;

    let pris = row[i].children[5].textContent.slice(0, -4);

    totAntal = totAntal + parseInt(cellAntal);
    totPris = totPris + parseInt(pris);
  }
  // ########## Visa total antal av varor och totall summan
  totAntalCell.innerText = totAntal;
  totSumCell.innerText = totPris;
}

// ########### kalykera pris efter rabatt ############
function calcRabatt() {
  let totPris = +document.querySelector(".totSumma").textContent;
  let kundsKod = document.querySelector(".rabatt").value;
  let rabattSpan = document.querySelector(".rabattSpan");

  // ############ Kontrollera om rabattkoden är rätt  ##############
  if (totPris == 0) {
    rabattSpan.innerText = "Din varokorg är tom";
  } else if (kundsKod === rabattKod && totPris > 0) {
    rabattSpan.innerText = `${totPris * 0.8} sek`;
    console.log(rabattSpan);

    // ############ om rabattkoden är TOM ELLER FEL  ##############
  } else if (kundsKod === "" && totPris > 0) {
    rabattSpan.innerText = totPris + " SEK";
  } else {
    rabattSpan.innerText = "FEL KOD";
  }
}

calcBtn.addEventListener("click", calcRabatt);
