let searchTable = document.getElementById("search-table");
// gömma searchTable
searchTable.style.display = "none";

const sokBtn = document.querySelector(".form > button");
// när en klickar på sokBtn anropa fetchData
sokBtn.addEventListener("click", fetchData);

// fetchData
// använde cors-anywhere proxy
function fetchData() {
  // spara sokOrd som user skrivit i search input
  let sokOrd = document.querySelector("#search-word").value;
  // sokOrd är inte tom då fetchUrl med sokOrd
  if (sokOrd !== "") {
    let url = `https://cors-anywhere.herokuapp.com/https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn=${sokOrd}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // när fetch är klar anropa display funktion och
        //skicka data, data length och sokOrd som parameter
        display(data.livsmedel, sokOrd, data.livsmedel.length);
      });
  }
  // om sokOrd är tom ge en alert
  else {
    alert("Please fill in input field first to search");
  }
}

// display funktion att visa data i tabel
// ta data, sokOrd och data längd som parameter
function display(data, sokOrd, length) {
  // get table body och tomma den innan att append till tBody
  const tBody = document.querySelector("#search-table > tbody");
  tBody.innerHTML = "";

  // spara table label för att visa varning senare
  let titel = document.querySelector("body > div > div > form > div > label");

  if (length > 0) {
    // om data längden är inte noll då visa tabel först
    searchTable.style.display = "block";
    // ändra tabel label
    titel.innerHTML = "Livsmedel";
    titel.style.color = "";

    // gör en regexp av sokord först

    let ord = new RegExp(sokOrd, "gi");

    // loop igenom alla data som är match
    data.forEach((medel) => {
      // ta medel.namn och ändra färg på character/ord som matchar sokOrd
      let hittat = medel.namn.replace(
        ord,
        `<span style="color:red">${sokOrd}</span>`
      );
      // skapa celler med hämtat data som innehåll
      let nyRad = `
    
              <td>${hittat}</td>
              <td>${medel.energi}</td>
              <td>${medel.kolhydrater}</td>
              <td>${medel.protein}</td>
              <td>${medel.fett}</td>
    
            `;

      // skapa ny rad och append alla celler i den
      let tr = document.createElement("TR");
      tr.innerHTML = nyRad;

      // append den nyskapade rad i tBody
      tBody.appendChild(tr);
    });
  }
  // om längden av data är noll eller inga match
  // då ändra table label till ingen match och ge en röd färg till den
  else if (length === 0) {
    searchTable.style.display = "none";

    titel.innerHTML = "Ingen Match";
    titel.style.color = "red";
  }
}
