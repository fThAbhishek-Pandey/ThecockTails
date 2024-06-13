import getElements from "./getElement.js";
const loading = getElements(".loading");
console.log(loading);
function showLoading(){
    console.log("helow I am showLOading");
        console.log(loading);
        console.log(loading.classList)
        loading.classList.remove("hide-loading");

}
function hideLoading(){
    console.log("hellow I am hideloading btn ");
    console.log(loading.classList);
    loading.classList.add("hide-loading");
}
export {showLoading,hideLoading};