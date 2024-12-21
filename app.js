let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uScore=document.querySelector("#u-score");
const cScore=document.getElementById("comp-score");
document.body.style.backgroundColor="pink";

const compChoice=()=>{
    const arr=["rock","paper","scissors"];
    const randInx=Math.floor(Math.random()*3);
    return arr[randInx];
}

const drawGame=()=>
{
    console.log("game draw!");
    msg.innerText="Game draw!";
    msg.style.backgroundColor="#081b31";
}

const showWiiner=(userWin,userChoice,a)=>{

    if(userWin){
        userScore++;
        uScore.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! ${userChoice} beats ${a}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        cScore.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`you lose! ${userChoice} beats ${a}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userChoice)=>{
        console.log("user choice is:",userChoice);
        const a=compChoice();
        console.log("comp choice is:",a);
        if(userChoice==a)
        {
            drawGame();
        }
        else{
            let userWin=true;
            if(userChoice=="rock"){
                userWin=a=="paper"?false:true;
            }
            else if(userChoice=="paper"){
                //rock,sisor
                userWin=a=="scissors"?false:true;
            }
            else{
                userWin=a=="rock"?false:true;
            }
            showWiiner(userWin,userChoice,a);
        }

};


choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    })
})