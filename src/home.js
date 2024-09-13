 function home(){
    const containerDiv= document.createElement('div');
    const name= document.createElement('h1');
    const sign =document.createElement('h3');
    const menu =document.createElement('button');
    name.innerText="Meet Meat";
    sign.innerText="Meet Your Fancy Dinner";
    menu.innerText="Menu"
    menu.setAttribute("id","menu");
    containerDiv.setAttribute("id","homeCon")
    containerDiv.appendChild(name);
    containerDiv.appendChild(sign);
    containerDiv.appendChild(menu);

    return containerDiv;

}
export {home}