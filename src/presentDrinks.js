import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
import fetchAPI from "./fetchDrinks.js";
const showDrinks = async (url)=>{
        console.log("I am in show Drinks : ",url);
        // fetch Drinks
        const data = await fetchAPI(url);
        // display drinks
        const section = await displayDrinks(data);
        if(section){
            setDrink(section);
        }
}
export default showDrinks;