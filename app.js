import  presentDrinks from "./src/presentDrinks.js";
import searchData from "./src/searchForm.js";
const url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
window.addEventListener('DOMContentLoaded',() =>{
        console.log("I am APP");
        presentDrinks(url);
        searchData();
});
