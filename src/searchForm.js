import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const form = get('.search-form');
const input = get('.inp');
function search (e){
    console.log("I am in search function");
    e.preventDefault() ;
    console.log(input);
    const value = input.value;
    console.log("search value : ",value);

    if(!value){
        return;
    }
   
    presentDrinks(`${baseURL}${value}`);
}
function searchData (){
    form.addEventListener('keyup',search);
}

export default searchData;
