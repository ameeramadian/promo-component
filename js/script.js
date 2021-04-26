// Switch Layout Buttons 
const firstLayoutBtn = document.querySelector(".btnFirstLayout");
const secondLayoutBtn = document.querySelector(".btnSecondLayout");
const thirdLayoutBtn = document.querySelector(".btnThirdLayout");

//elements for styling
const themeDiv = document.querySelector(".theme")
const promoImageDiv = document.querySelector(".promo__image")
const promoDiv = document.querySelector(".promo")
const promoButton = document.querySelector(".promo__button")

//////////////////////////////////////////////////////////////// Layout  Stylings ////////////////////////////////////////////////////////////////

function setLayoutButtonActive(activeLayout){
    switch (activeLayout) {
         case 2 : { 
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.add("active");
            thirdLayoutBtn.classList.remove("active");
            break;
         }
         case 3 : {
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.remove("active");
            thirdLayoutBtn.classList.add("active");
            break;
         }
         default: {
            firstLayoutBtn.classList.add("active");
            secondLayoutBtn.classList.remove("active");
            thirdLayoutBtn.classList.remove("active");
            break;
         }
    }
}

function clearClassList(element){
    if(element === themeDiv){
        let themeClass = themeDiv.className.match(/(^|\s)theme-\S+/g) || []
        themeDiv.className = themeDiv.className.replace(themeClass, "")
    }else{
        [...element.classList].filter(
            c=>{
                return c.startsWith("col-")
           }
        ).forEach(e => {
            element.classList.remove(e)
          }) 
    }   
}

function addThemeClass(theme){
    themeDiv.classList.add(`theme--${theme}`)
}

function addStyleClasses(activeLayout){
    clearClassList(themeDiv)
    clearClassList(promoDiv)
    clearClassList(promoImageDiv)

    switch (activeLayout) {
        case 2 : { 
            addThemeClass("y"); 
            promoDiv.classList.add("col-sm-12" , "col-md-8")
            promoImageDiv.classList.add("col-sm-12","col-md-4");       
           break;
        }
        case 3 : {
            addThemeClass("z");
            promoDiv.classList.add("col-sm-12", "col-md-8", "col-lg-5")
            promoImageDiv.classList.add("col-sm-12", "col-md-4", "col-lg-12")

           break;
        }
        default: {
            addThemeClass("x");
            promoDiv.classList.add("col-12");
            promoImageDiv.classList.add("col-12"); 
           break;
        }
   }
}

function showButton(){
    promoButton.style.display = "inline";
}

function hideButton(){
    promoButton.style.display = "none";
}

setLayoutButtonActive(1);
addStyleClasses(1);

//////////////////////////////////////////////////////////// x Layout /////////////////////////////////////////////////////////////////////

firstLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(1);
    addStyleClasses(1);
    showButton();
 });

//////////////////////////////////////////////////////////// y Layout /////////////////////////////////////////////////////////////////////


secondLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(2);
    addStyleClasses(2);
    hideButton();
 });

//////////////////////////////////////////////////////////// z Layout /////////////////////////////////////////////////////////////////////

thirdLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(3);
    addStyleClasses(3);
    showButton();
});