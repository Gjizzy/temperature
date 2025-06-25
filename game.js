let positionleft = 350;
let character = document.getElementById("character");

   function moveLeft(){
    if(positionLeft>0){
    positionLeft = positionLeft-5;
    console.style.left=positionLeft +"px";
    character.style.background="red";
}
console.log(positionLeft);
}

function moveRight() {
    //setInterval()
}
