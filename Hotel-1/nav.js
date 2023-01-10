const navContainer = document.querySelector(".nav-container");
const navToggler = document.querySelector(".mobile-nav");

navToggler.addEventListener("click", () =>{
   const visibility = navContainer.getAttribute("data-visible");
   
   if (visibility === "false"){
      navContainer.setAttribute("data-visible", true);
      navToggler.setAttribute("aria-expanded", true);
   }  else if (visibility === "true") {
      navContainer.setAttribute("data-visible", false);
      navToggler.setAttribute("aria-expanded", false);
   }
});
