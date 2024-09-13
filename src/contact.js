import cairo from './assets/cairo.jpg'
function contact(){
    const containerDiv= document.createElement('div');
    const name= document.createElement('h1');
    const info =document.createElement('div');
    const loc =document.createElement('img');
    const address =document.createElement('h3');
    const phone =document.createElement('h3');
    name.innerText="Meet Us";
    loc.src=cairo;
    address.innerText="Address: Cairo, Egypt"
    phone.innerText="Phone Number: +(20)0123456789"
    info.classList.add("info");
    containerDiv.classList.add("con")
    containerDiv.appendChild(name);
    info.appendChild(loc);
    info.appendChild(address);
    info.appendChild(phone);
    containerDiv.appendChild(info);

    return containerDiv;

}
export {contact}