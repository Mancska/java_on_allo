window.addEventListener("load", init);

function init() {
  var kozot = document.querySelector("section img");
  var articleELem = document.querySelector("article");
  const imgLista = [
    "kepek/elso.jpg",
    "kepek/masodik.jpg",
    "kepek/harmadik.jpg",
    "kepek/negyedik.jpg",
    "kepek/otodik.jpg",
  ];
  articleElhelyez(imgLista, articleELem, kozot);
}

function articleElhelyez(tomb, articleELem, kozot) {
  kozot.src = "kepek/elso.jpg";
  console.log(articleELem);
  for (let index = 1; index < tomb.length; index++) {
    articleELem.innerHTML += `<div><img src="${
      tomb[index]
    }" alt="${"kep 1"}"></div>`;
  }

  var kisKepek = document.querySelectorAll("article div img ");
  for (let index = 0; index < kisKepek.length; index++) {
    kisKepek[index].addEventListener("click", function () {
      kepesemeny(index, tomb);
    });
  }

  /*kisKepek.style.width="200px";
   */
}

function kepesemeny(index, imglista) {
  console.log(event.target.src);
  let asd = event.target.src;
  const NAGYKEP = document.querySelectorAll("section div img");
  console.log(NAGYKEP);
  NAGYKEP[0].src = asd;
}
