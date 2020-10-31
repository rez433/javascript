let searchTable = document.getElementById("search-table");
searchTable.style.display = "none";

let callBack = "getLivsmedel";
const sokBtn = document.querySelector(".form > button");

function fetchData() {
  let sokOrd = document.querySelector("#search-word").value;
  if (sokOrd !== "") {
    let url = `https://cors-anywhere.herokuapp.com/https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn=${sokOrd}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        display(data.livsmedel, sokOrd, data.livsmedel.length);
      });
  } else {
    alert("Please fill in input field first to search");
  }
}

function display(data, sokOrd, length) {
  const tBody = document.querySelector("#search-table > tbody");
  tBody.innerHTML = "";

  let titel = document.querySelector("body > div > div > form > div > label");

  if (length > 0) {
    searchTable.style.display = "block";
    titel.innerHTML = "Livsmedel";
    titel.style.color = "";
    let ord = new RegExp(sokOrd, "gi");

    data.forEach((medel) => {
      let hittat = medel.namn.replace(
        ord,
        `<span style="color:red">${sokOrd}</span>`
      );
      let nyRad = `
    
              <td>${hittat}</td>
              <td>${medel.energi}</td>
              <td>${medel.kolhydrater}</td>
              <td>${medel.protein}</td>
              <td>${medel.fett}</td>
    
            `;
      let tr = document.createElement("TR");
      tr.innerHTML = nyRad;
      tBody.appendChild(tr);
    });
  } else if (length === 0) {
    searchTable.style.display = "none";

    titel.innerHTML = "Ingen Match";
    titel.style.color = "red";
  }
}

sokBtn.addEventListener("click", fetchData);
