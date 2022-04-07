
import "./index.css";

const root=document.getElementById("root");

const img= document.createElement("img");
img.classList.add("editText");
img.src="https://img.icons8.com/nolan/2x/to-do.png";


const todoDiv=document.createElement("div");
todoDiv.setAttribute("id","todoDiv");
const inputDiv=document.createElement("div");
inputDiv.setAttribute("id","inputDiv");
const outputDiv=document.createElement("div");
outputDiv.setAttribute("id","outputDiv");

let form= document.createElement("form")
let label=document.createElement("label");

label.innerText="Work :";
let inputwork=document.createElement("input");
inputwork.setAttribute("type","text");
inputwork.setAttribute("id","work")
inputwork.setAttribute("placeholder","works");

let labeltime=document.createElement("label");

labeltime.innerText="Time :";
let inputtime=document.createElement("input");
inputtime.setAttribute("type","time");
inputtime.setAttribute("id","time");
inputtime.setAttribute("placeholder","time");

let labelpriority=document.createElement("label");
labelpriority.innerText="Priority :";
let inputp=document.createElement("select");
inputp.setAttribute("id","priority")
let option1=document.createElement("option");
option1.innerText="low";
let option2=document.createElement("option");
option2.innerText="Medium";
let option3=document.createElement("option");
option3.innerText="argent";





inputp.append(option1,option2,option3);

let submit=document.createElement("input");
submit.setAttribute("type","submit");
let br=document.createElement("br");

form.append(label,inputwork,labeltime,inputtime,labelpriority,inputp,br,submit);

inputDiv.append(form)

todoDiv.append(inputDiv,outputDiv);
root.append(img,todoDiv);
let count=0;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let work=document.getElementById("work").value;
    let time=document.getElementById("time").value;
    let priority=document.getElementById("priority").value;
    count++;

    let p1=document.createElement("p");
    p1.innerText=`${count} => work-: ${work}`;

    let p2=document.createElement("p");
    p2.innerText=`Time -: ${time}`;
 
    let p3=document.createElement("p");
    p3.innerText=`Priority -: ${priority}`;

    outputDiv.append(p1,p2,p3);
});