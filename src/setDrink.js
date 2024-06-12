const setDrink = (section)=>{
     section.addEventListener('click',function(evt){
              const id = evt.target.parentElement.dataset.id;
              console.log("drink", id);
               // JSON.stringify JSON.parse
              localStorage.setItem('drink',id);
     });
}
export default setDrink ;