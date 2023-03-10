window.addEventListener("load",init)

function init(){
var kozot = document.querySelector("section img");
var articleELem=document.querySelector("article");
const imglista=["kepek/elso.jpg","kepek/masodik.jpg","kepek/harmadik.jpg","kepek/negyedik.jpg","kepek/otodik.jpg"];
    articleElhelyez(imglista,articleELem,kozot);
}
function articleElhelyez(tomb,articleELem,kozot){
     kozot.src="kepek/elso.jpg";
    console.log(articleELem);
    for (let index = 1; index < tomb.length; index++) {
       articleELem.innerHTML+=`<div><img src="${tomb[index]}" alt="${"kep 1"}"></div>`;
       

        
    }

    var kiskepek=document.querySelectorAll("article div img "); 
    for (let index = 0; index < kiskepek.length; index++) {
      
        kiskepek[index].addEventListener("click",function(){
            kepesemeny(index,imglista)
        }
        )
        
    }
    
    /*kiskepek.style.width="200px";
    */
    
}
function kepesemeny(index,imglista){
    console.log(event.target)
    const NAGYKEP=document.querySelectorAll("section div img")
    console.log(NAGYKEP)
    NAGYKEk[0].src=imglista[index];

}

    