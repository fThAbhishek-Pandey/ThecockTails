import fetchAPI from "./src/fetchDrinks";
const url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
 const    app  =() =>{
        console.log("I am APP");
        presentDrinks(URL);
}
window.addEventListener('DOMContentLoaded',app);
