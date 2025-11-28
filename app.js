let gameSqe=[];
let userSqe=[];

let btns=["yellow" ,"purple","red","green",""]


let started =false;
let level=0;
 
 let h2=document.querySelector("h2");

  document.addEventListener("keypress", function() {
    if(started == false){
        console.log(" game is started");
        started =  true;
        levelUp();
    }
  }); 
  function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
      btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSqe=[];
    level++;
    h2.innerText=`Level  ${level}`  

    //random button chooes
    let randIdx=Math.floor(Math.random()*3);
    let randColour=btns[randIdx];
    let randBtn=document.querySelector(`.${randColour}`);
    gameSqe.push(randColour);
    console.log(gameSqe);
    // console.log(randColour);
    // console.log(randBtn);
    // console.log(randInx);
    gameflash(randBtn);
}

 function checkAns(idx){
    //  let idx=length-1;
//    console.log("current level :", level)}
    
    if( userSqe[idx] === gameSqe[idx]){
    if(userSqe.length == gameSqe.length) { 
        setTimeout(levelUp,1000);  
     }
    } else
        {
            h2.innerHTML=`game is over! your score was is <b>${level}</b> </br> press any key to start.`; 
            document.querySelector("body").style.background="red";
            setTimeout (function(){
                document.querySelector("body").style.background="white";

            },150)
            reset(); 
              }     
            
            
}
    
function btnPress() {
    console.log(this);
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSqe.push(userColor);

    checkAns(userSqe.length-1);

 
}
let allBtns= document.querySelectorAll(".btn");
    for(btn of allBtns)  {
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSqe=[];
    userSqe=[];
    level=0;
}