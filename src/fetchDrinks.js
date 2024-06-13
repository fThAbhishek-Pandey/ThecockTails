import { showLoading } from "./toggleLoading.js";

const fetchAPI = async (url)=>{
    console.log("hello I am fetch API");
    showLoading();
    const fetchResponce = await fetch(url);
    console.log("fetchResponce : ",fetchResponce);
    const fetchData = await fetchResponce.json();
    console.log("fetchData : ",fetchData);
    // const { idDrink, strDrink,strDrinkThumb } = fetchData;
    // console.log("idDrink : ",idDrink,"strDrink : ",strDrink,"strDrinkThumb : ",strDrinkThumb);
    // return { idDrink, strDrink,strDrinkThumb };
    return fetchData;
}

export default fetchAPI;