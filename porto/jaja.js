let player1score=0;
let player2score=0;
let boxes=document.querySelectorAll(".box");
let res=document.querySelector(".reset");
let myscore=document.querySelector(".my");
let hiscore=document.querySelector(".his");
let mes=document.querySelector(".msg");
let player1turn=true;
let count =0;
let wincond=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let gameover=false;
boxes.forEach((mat) => {
    mat.addEventListener("click",()=>{
        if(gameover){return 

        }
        console.log("dabba click");
        if(player1turn){
            mat.innerText="X";
            mat.style.color="white";
            player1turn=false;
        }else{
            mat.innerText="O";
            mat.style.color="red";
            player1turn=true;
            
        }
        count++;
        mat.disabled=true;
       let winner= checkwinner();
        if(count==9 && !winner){
            draw();
        }
    })
    
});

function checkwinner(){

    for(val of wincond){
        console.log(val);
        let val1=boxes[val[0]];
         let val2=boxes[val[1]];
          let val3=boxes[val[2]];
if((val1.innerText!=""&&val2.innerText!="" )&&(val2.innerText!=""&&val3.innerText!="" )){
    if((val1.innerText==val2.innerText)&&(val2.innerText==val3.innerText)){
        val1.style.backgroundColor="green";
        val2.style.backgroundColor="green";
        val3.style.backgroundColor="green";
        console.log("winner is ",val1.innerText);
        if(val1.innerText=="X"){
            player1score++;
            myscore.innerText=player1score

        }else if(val1.innerText=="O"){
            player2score++;
            hiscore.innerText=player2score


        }
        
        showwin(val1.innerText);
        gameover=true;
        return true;
    }
}
    
}}
function showwin(jetnewala){
    mes.innerText=`winner is ${jetnewala}`;
    mes.style.backgroundColor="green";
    
    
}

res.addEventListener("click", resetGame);


function resetGame(){
   
    boxes.forEach((box) =>{
     box.style.backgroundColor="black";
    });
   

    mes.innerText=`player1 turn`;
     player1turn=true;
      gameover = false;
     

    enableBoxes();

}
 function draw(){
    player1turn=true;
    mes.innerText=`GAME DRAW`;
    mes.style.backgroundColor="gray";
    
    enableBoxes();


 }
 const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}; 
