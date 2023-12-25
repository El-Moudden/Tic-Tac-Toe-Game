let boxes = document.getElementsByClassName("box") ;
let headerTurn = document.getElementById("headerxo");
let winnerr = document.getElementById("winner");
let winnerbtn = document.getElementById("winnerButton");
let containerxo = document.getElementById("container");
let resetBtn = document.getElementById("resetBtn")

// containerxo.style.opacity = "1";
// winnerbtn.style.opacity = "0";
// winnerr.style.opacity = "0";

containerxo.style.opacity = "1";
winnerbtn.style.display = "none";
winnerr.style.display = "none";


let turn = "x"
let gameOver = false

let gridBoxes = [
  1,2,3,
  4,5,6,
  7,8,9
]




for (let item of boxes ){

  item.addEventListener("click" , function(){
    let value = item.getAttribute("value");
    index= value-1

    if (gameOver){
      return
    }
    let box = document.querySelector(`.box[value="${value}"]`)

    if(gridBoxes[index] == "x" || gridBoxes[index] == "o"){
      return
    }
    box.innerHTML = turn
    box.style.fontSize = "100px"
    
    

    
    gridBoxes[index]=turn
    console.log(gridBoxes)
    winner();


    if (turn == "x"){
      headerTurn.textContent = "0 turn"
      box.style.color = "red"
      turn = "o"

    }else {
      headerTurn.textContent = "X turn"
      box.style.color = "green"
      turn = "x"

    }
    
  })

  function winner(){
    if (
      (gridBoxes[0]==gridBoxes[1] && gridBoxes[1]==gridBoxes[2] ) ||
      (gridBoxes[3]==gridBoxes[4] && gridBoxes[4]==gridBoxes[5] ) ||
      (gridBoxes[6]==gridBoxes[7] && gridBoxes[7]==gridBoxes[8] ) ||

      (gridBoxes[0]==gridBoxes[3] && gridBoxes[3]==gridBoxes[6] ) ||
      (gridBoxes[1]==gridBoxes[4] && gridBoxes[4]==gridBoxes[7] ) ||
      (gridBoxes[2]==gridBoxes[5] && gridBoxes[5]==gridBoxes[8] ) ||

      (gridBoxes[0]==gridBoxes[4] && gridBoxes[4]==gridBoxes[8] ) ||
      (gridBoxes[2]==gridBoxes[4] && gridBoxes[4]==gridBoxes[6] ) 
      ){
        let winnerXO = turn =="x"? "x":"o";
        winnerr.textContent =`${winnerXO} won`
        containerxo.style.display = "none";
        winnerbtn.style.display = "block";
        winnerr.style.display = "block";
        gameOver = true
        winnerbtn.textContent = "Try Again"
        
      }

      let draw = true
      for (let ind of gridBoxes) {
        if (ind != "x" && ind !="o" ){

          draw = false

        }
      }
      if(draw){

        winnerr.textContent =`draw`
        containerxo.style.display = "none"
        winnerbtn.textContent = "Try Again"
        winnerbtn.style.display = "block";
        winnerr.style.display = "block";
        gameOver = true
      }
  }



}

function reset(){

  for(let item of boxes){
    let value = item.getAttribute("value");
    let box = document.querySelector(`.box[value="${value}"]`)
    box.innerHTML = "" ;

    gridBoxes = [
      1,2,3,
      4,5,6,
      7,8,9
    ]




  }
}

resetBtn.addEventListener("click" , ()=>{
  reset();
})

winnerbtn.addEventListener("click" ,function(){
  containerxo.style.display = "flex";
  winnerbtn.style.display = "none";
  winnerr.style.display = "none";
  gameOver = false ;

  reset();
  
  
})




