import Barbecue from './assets/barbecue.jpg';
import Brisket from './assets/Brisket.jpg' 
import Burnt from './assets/BurntEnds.jpg' 
import Ribeye from './assets/Ribeye.jpg' 
import tenderloin from './assets/tenderloin.jpg' 




function menu(){
    const containerDiv= document.createElement('div');
    const name= document.createElement('h1');
    const mContent =document.createElement('div');
    const order =document.createElement('button');
    const dishes=[{
        src:Barbecue,
        name:"Barbecue"

    },
    {
        src:Brisket,
        name:"Brisket"
    },
    {
        src:Burnt,
        name:"Burnt Ends"
    },
    {
        src:Ribeye,
        name:"Ribeye"
    },
    {
        src:tenderloin,
        name:"Tenderloin"
    }

]
    name.innerText="Meat Menu";
    mContent.classList.add("menu")
    order.innerText="Order"
    for(const dish of dishes){
        mContent.innerHTML+=`<div class="card">
            <img src="${dish.src}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <button>Order</button>
        </div>`
    }
    containerDiv.classList.add("con")
    containerDiv.appendChild(name);
    containerDiv.appendChild(mContent);
    

    return containerDiv;

}
export {menu}