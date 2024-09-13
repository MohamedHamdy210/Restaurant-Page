import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
const homeDiv = home();
const menuDiv = menu();
const contactDiv = contact();

const clear=()=>{
    content.innerHTML=``;
}

function divAdd(div=homeDiv){
    clear();
    content.appendChild(div);

}
divAdd();
const menuBBtn = document.getElementById("menuB");

homeBtn.addEventListener("click",()=>{divAdd()});
menuBtn.addEventListener("click",()=>{divAdd(menuDiv)});
menuBBtn.addEventListener("click",()=>{divAdd(menuDiv)});
contactBtn.addEventListener("click",()=>{divAdd(contactDiv)});

