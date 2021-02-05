var square = document.querySelectorAll(".square") ;
for(var i = 0; i< 6; i++){
  square[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  while(square[i].style.backgroundColor == "#252525"){
    square[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  }
}
var correct = Math.floor((Math.random() * 100) + 1)%6 ;
for(var i = 0; i< 6; i++){
  square[i].addEventListener('click', checkResult);
}
function checkResult() {
  if(square[correct] == this){
    document.getElementById("result").textContent = "Correct";
    document.getElementById("play1").textContent = "Play Again!";
    for(var i = 0; i< 6; i++){
      square[i].style.backgroundColor = square[correct].style.backgroundColor ;
    }
  }
  else{
    document.getElementById("result").textContent = "Try Again!";
    this.style.backgroundColor = "#252525" ;
  }
}
var rgb = document.getElementById("rgb") ;
rgb.textContent = square[correct].style.backgroundColor;

var reset = document.getElementById("play") ;
reset.addEventListener('click', reloade);
function reloade(){
  location.reload();
  // window.open("file:///C:/Users/Prathamesh%20Kakde/Desktop/Web%20Practive/colorgame%20project/colorgame.html");
  return true;
}
