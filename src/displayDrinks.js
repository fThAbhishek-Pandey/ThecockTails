import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const  displayDrinks = ({drinks})=>{
       console.log("I am display drink function ");
        const section = getElement(".section-center");
        console.log("section : ",section);
        const title = getElement(".title");
        console.log("titlt : ",title);
        if(!drinks){
            hideLoading();
            title.textContent = "Drinks is not available from your search ";
            section.innerHTML = null;
        }
        const newDrinks = drinks.map((drink)=>{
            const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
            return `
             <a href="drink.html" target="_blank">
               <article class="cocktail" data-id="${id}">
                 <img src="${image}" alt="${name}" />
                 <h3>${name}</h3>
              </article>
             </a>`
        }).join(' ');
        console.log("newDrinks : ",newDrinks);
        title.textContent ='';
        section.innerHTML = newDrinks;
        hideLoading();
        return section;
}
export default displayDrinks;