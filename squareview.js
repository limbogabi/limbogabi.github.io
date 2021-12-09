
let counter = 0;
let alreadySquare = [];
let startTime = 0;
let endTime;
let numOfSquares = 5;
window.addEventListener('load', event => {
  startTime = performance.now();
  alreadySquare.push(randomSquare());
  console.log(alreadySquare[alreadySquare.length-1]);
  let succesCounter = document.getElementById("counter");
  succesCounter.innerHTML = counter;
});
function startGame(){alert("hello")};

function randomSquare(){
  let squareLetter = ["A", "B", "C", "D", "E", "F", "G", "H"]
  let h1 = document.getElementById('square');
  let num = Math.floor(Math.random() *8) + 1;
  let letter = Math.floor(Math.random() *8);
  h1.innerHTML = squareLetter[letter] + num;
  return h1.innerHTML;

}

function whitePressed(){
  if(alreadySquare.length === numOfSquares){
    endTime = performance.now();
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
    let res = document.getElementById("result");
    res.innerHTML =`Great: You did ${counter} out of ${numOfSquares} in ${Math.round((endTime - startTime)/60)} sec`
    let buttonBlack = document.getElementById("black");
    buttonBlack.onclick = "";
    let buttonWhite = document.getElementById("white");
    buttonWhite.onclick = "";
    return;
  }
  let square = document.getElementById('square');
  square = square.innerHTML;
  let isColorCorrect = checkSquareColor(square, "white");
  if(isColorCorrect){
    counter++;
    let succesCounter = document.getElementById("counter");
  succesCounter.innerHTML = counter;
  }
  
  let nextSquare = randomSquare();
  while (squareIsNotAlready(nextSquare) && alreadySquare.length < numOfSquares) {
    nextSquare = randomSquare();
  }
  alreadySquare.push(nextSquare);
  console.log(alreadySquare[alreadySquare.length-1]);
}
function blackPressed(){
  if(alreadySquare.length === numOfSquares){
    endTime = performance.now();
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
    let res = document.getElementById("result");
    res.innerHTML =`Great: You did ${counter} out of ${numOfSquares} in ${Math.round((endTime - startTime)/60)} sec`
    let buttonBlack = document.getElementById("black");
    buttonBlack.onclick = "";
    let buttonWhite = document.getElementById("white");
    buttonWhite.onclick = "";
    return;
  }
  let square = document.getElementById('square');
  square = square.innerHTML;
  let isColorCorrect = checkSquareColor(square, "black");
  if(isColorCorrect){
    counter++;
    let succesCounter = document.getElementById("counter");
  succesCounter.innerHTML = counter;
  }
  
  let nextSquare = randomSquare();
  while (squareIsNotAlready(nextSquare) && alreadySquare.length < numOfSquares) {
    nextSquare = randomSquare();
  }
  alreadySquare.push(nextSquare);
  console.log(alreadySquare[alreadySquare.length-1]);
}

function checkSquareColor(square, color){

  let letter = square.charAt(0);
  let number = square.charAt(1);
  
  let squares = {
    "squareA":{
      A1 : "black",
      A2 : "white",
      A3 : "black",
      A4 : "white",
      A5 : "black",
      A6 : "white",
      A7 : "black",
      A8 : "white",
    },
    "squareB":{
      B1 : "white",
      B2 : "black",
      B3 : "white",
      B4 : "black",
      B5 : "white",
      B6 : "black",
      B7 : "white",
      B8 : "black",
    },
    "squareC":{
      C1 : "black",
      C2 : "white",
      C3 : "black",
      C4 : "white",
      C5 : "black",
      C6 : "white",
      C7 : "black",
      C8 : "white",
    },
    "squareD":{
      D1 : "white",
      D2 : "black",
      D3 : "white",
      D4 : "black",
      D5 : "white",
      D6 : "black",
      D7 : "white",
      D8 : "black",
    },
    "squareE":{
      E1 : "black",
      E2 : "white",
      E3 : "black",
      E4 : "white",
      E5 : "black",
      E6 : "white",
      E7 : "black",
      E8 : "white",
    },
    "squareF":{
      F1 : "white",
      F2 : "black",
      F3 : "white",
      F4 : "black",
      F5 : "white",
      F6 : "black",
      F7 : "white",
      F8 : "black",
    },
    "squareG":{
      G1 : "black",
      G2 : "white",
      G3 : "black",
      G4 : "white",
      G5 : "black",
      G6 : "white",
      G7 : "black",
      G8 : "white",
    },
    "squareH":{
      H1 : "white",
      H2 : "black",
      H3 : "white",
      H4 : "black",
      H5 : "white",
      H6 : "black",
      H7 : "white",
      H8 : "black",
    },    
  }

  if(squares["square" + letter][square] === color){
    return true;
  }else{
    return false;
  }
}

function squareIsNotAlready(square){
  for(let i=0;i<=alreadySquare.length;i++){
    if(alreadySquare[i] === square){
      return true;
    }
  }
  return false;
}
