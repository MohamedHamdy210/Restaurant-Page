import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const homeDiv = home();
const menuDiv = menu();

const clear=()=>{
    content.innerHTML=``;
}

function divAdd(div=homeDiv){
    clear();
    content.appendChild(div);
    console.log(10);
}
console.log(20);

homeBtn.addEventListener("click",()=>{divAdd()});
menuBtn.addEventListener("click",()=>{divAdd(menuDiv)});
console.log(3);
