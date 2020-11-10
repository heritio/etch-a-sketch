
//Innitialize variables for container and button for changing grid
let container = document.getElementById("container");
let changeGrid = document.getElementById("changegrid");
makeDiv();
let gridAmount;

//Eventlistener for clearing canvas and asking for amount of squares
changeGrid.addEventListener("click", () => {
   clearDIvs(".gridborder");
   gridAmount = +prompt("How many squares?");
   makeDiv(gridAmount);
   changecolor();
   
});

function clearDIvs(classname){
  //remove divs with apropriate classname
  var elementsForRemoval = document.querySelectorAll(classname);
  for(let k = 0; k < elementsForRemoval.length; k++){
      elementsForRemoval[k].remove();
  }
}


//this makes a div with the help of loop.
function makeDiv(gridAmount = 16){
for(let i = 0; i <= (((gridAmount * gridAmount) - 1) || 100); i++){
    let div = document.createElement("div");
   div.classList.add("gridborder");
   container.append(div);
}
}

//This is eventlistener for changing color
function changecolor(){
   let gridDivs = document.querySelectorAll(".gridborder");
gridDivs.forEach(div => div.addEventListener("mouseover", e => {
    e.target.classList.add("changecolor");
}))
}

changecolor();

