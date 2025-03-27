let gameSequence = [];  
let userSeq = [];  
let btns = ["yellow", "red", "purple", "green"];  
let started = false; 
let level = 0; 

document.addEventListener("keypress", function () { 
    if (!started) { 
        console.log("game started"); 
        started = true; 
        levelUp(); 
    }
});

let h2 = document.querySelector("h2"); 

function levelUp() { 
    userSeq = [];
    level++;  
    h2.innerText = "Level " + level;  

    let randomIndx = Math.floor(Math.random() * 4);  
    let randColor = btns[randomIndx];  
    let randbtn = document.querySelector(`.${randColor}`);  
    
    gameSequence.push(randColor); 
    gameFlash(randbtn);
}  

function gameFlash(btn) { 
    btn.classList.add("flash");  
    setTimeout(function () { 
        btn.classList.remove("flash"); 
    }, 250); 
} 

function userFlash(btn) { 
    btn.classList.add("flash");  
    setTimeout(function () { 
        btn.classList.remove("flash"); 
    }, 250); 
}

function checkAns(index) {

    if(userSeq[index] === gameSequence[index]){
        if(userSeq.length == gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br/> press any key to stat`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.color = "white";
        } , 150);
        reset();
    }
}

function btnPress() { 
    let btn = this; 
    userFlash(btn); 
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}  

let allBtns = document.querySelectorAll(".btn");  
for (let btn of allBtns) {  
    btn.addEventListener("click", btnPress);  
}

