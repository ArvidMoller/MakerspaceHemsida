// Declare variables for texts
const prusa = document.querySelector("#prusa");
const bambu = document.querySelector("#bambu");
const formlabs = document.querySelector("#formlabs");

// Declare varables for buttons
const prusaCard = document.querySelector("#prusaCard");
const bambuCard = document.querySelector("#bambuCard");
const formlabsCard = document.querySelector("#formlabsCard");

prusa.style.display = "none";
bambu.style.display = "none";
formlabs.style.display = "none";

prusaCard.addEventListener("click", ()=>{
    if (prusa.style.display == "none"){
        prusa.style.display = "block";
        bambu.style.display = "none";
        formlabs.style.display = "none";
    } else{
        prusa.style.display = "none";
        bambu.style.display = "none";
        formlabs.style.display = "none";
    }    
})

bambuCard.addEventListener("click", ()=>{
    if (bambu.style.display == "none"){
        prusa.style.display = "none";
        bambu.style.display = "block";
        formlabs.style.display = "none";
    } else{
        prusa.style.display = "none";
        bambu.style.display = "none";
        formlabs.style.display = "none";
    }    
})

formlabsCard.addEventListener("click", ()=>{
    if (formlabs.style.display == "none"){
        prusa.style.display = "none";
        bambu.style.display = "none";
        formlabs.style.display = "block";
    } else{
        prusa.style.display = "none";
        bambu.style.display = "none";
        formlabs.style.display = "none";
    }    
})