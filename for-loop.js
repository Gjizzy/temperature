console.log("testing the for loop"):

// FOR LOOP
// start point
// interval
// condition to stop
// interval


/*for(let i=0; i<4; i++){
    //document.write(My for is working")
    console.log("My for is working, value=-+1)
}
//Activity 3
for(let i-1; i<4; i++){
    //document.write("My for is working"
    console.log("value = "+i);
}

/*for(let i=1; i<=10; i++){
    //document.write("My for is working")
console.log("value = "+1);
}*
//Activity 4
for(let i=2; i)<21; i+=2){}
    //document.write("My for is working")
console.log("value - "+1);
}

//Mini challenge
/*const numTwo = 2;
let result =0;

//loop i to 10
for(let i=0;"<=10;i++){
result = numTwo * 1;

function multuTable(){
  const num = 2;
  document.writeIn('<h2>Table of ${num}</h2>")
  //start =1 , stop <11 , interval 1 by 1
  for(let i=1; i<11 ; i++){

  console.log('${num} x ${i} = ${num*i}');
  }
}
function multiTable(){
let num = prompt("Enter the num: ");
document.writeIn('<h2>Table of ${num}</h2>')
//start =1 , stop <11 , interval 1 by 1
    for(let i=1; i<11 ; i++){
 document.writeln(`<p> ${num} x ${i} = ${num*i} </p>`);
   }
}
//WHILE LOOP
//start, stop, increment
console.log("----- WHILE -----")
let i=0; // start point
while(i<=4){ // stop condition
    console.log(i);
    i++; // increment/interval
}

//DO-WHILE
//start, stop,increment
console.log("-----Do WHILE----");

let j=10;//start point


do{

console.log(j);
    
j++; // increment


}while(j<=4);//stop condition

// while function
function startCountDown(){
let seconds = 10;
let results="";

while(seconds>0){
    result += '<p> Launching in .... ${seconds} </p>';
    console.log(result);
    seconds--;
}

document.getElementById("output").inneHTML=result;
}
//do-while function
function passPrompt(){
    let correctPass = "1234";
    let userInput;
    let results="Simulating password input";

    do{
        userInput = prompt("Enter the password: ");
        result += "<p> User input was: " + userInput + "</p>";
    }while(userInput !== correctPass)

        result+= "<p>Welcome to the system</p>";
        document.getElementById("output").innerHTML=results;
}

//loop function
function showProducts(){
    let products = ["laptop","display","camera","speaker"];// array
    for(let i=0;i<4;i++){
       let result ="";

       for(let i=0;i<products.length;i++){
        result += `<li class="test"> ${products[i]} </li>`; Add commentMore actions
    }
    document.getElementById("output").innerHTML=result; 
}
