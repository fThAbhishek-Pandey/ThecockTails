import displayDrinks from "./displayDrinks";
import setDrink from "./setDrink";
import fetchDrinks from "./fetchDrinks";
import fetchAPI from "./fetchDrinks";
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