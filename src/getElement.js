function getElements(selection){
    console.log("I am get Elements ");
    const element = document.querySelector(selection);
    if(element) {
        return element;
    }
    else {
        throw new Error (`Please check the element ${selection}`);
    }
}
export default getElements;