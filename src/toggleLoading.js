import getElements from "./getElement";
const loading = getElements(".loading");
function showLoading(){
    console.log("helow I am showLOading");
        loading.classlist.remove("hide-loading");

}
function hideLoading(){
    console.log("hellow I am hideloading btn ");
    loading.classlist.add("hide-loading");
}
export {showLoading,hideLoading};