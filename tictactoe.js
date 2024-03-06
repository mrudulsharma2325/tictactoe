let boxes=document.querySelectorAll(".box");

let rst=document.querySelector(".reset");
let winmsg=document.getElementById("win");
let newgmbt=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".winmsg");

let turno=true;
let winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//4
const disablebox=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
//6
const enablebox=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

//3
const showwinner= (winner) =>{
    winmsg.innerText=`winner is ${winner}`;
   msgcontainer.classList.remove("hide")
   disablebox();


}
//2
const checkwiner=()=>{
    for(let pattern of winpattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=0 && pos2!=0 && pos3!=0)
        {
            if(pos1===pos2 && pos2==pos3)
            {
               showwinner(pos1);

                

               
            }
        }
       
    }

};




//1
for(let i=0;i<9;i++)
{
    boxes[i].addEventListener("click",()=>{
        
        if(turno===true)
       {boxes[i].innerHTML="<em>x</em>";
        turno=false;}

        else{

            boxes[i].innerHTML="<em>o</em>";
            turno=true;
        }
        boxes[i].disabled=true;
        checkwiner ();
        
       


    });
    
}
//5
const reset = () =>{
    turno=true;
    enablebox();
    msgcontainer.classList.add("hide");


}
rst.addEventListener("click",reset);
newgmbt.addEventListener("click",reset);