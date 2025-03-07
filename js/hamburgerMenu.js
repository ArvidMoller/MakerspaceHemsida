const button = document.querySelector("#hamburgerButton");
const menu = document.querySelector("#mobileNav");
menu.style.display = "none";

button.addEventListener("click", ()=>{
  if (menu.style.display == "none"){
    menu.style.display = "flex";
  } else{
    menu.style.display = "none";
  }
})