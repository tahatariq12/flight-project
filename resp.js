function addBorder(element) {
    // Apply border to the clicked element
    element.style.border = "1px solid white";
}
burger = document.querySelector('.burger')
navbar = document.querySelector('.main-navbar')
navitems = document.querySelector('.nav-items')

burger.addEventListener('click', ()=>{
   navitems.classList.toggle('v-items-resp');
   navitems.classList.toggle('v-items-resp');
   navbar.classList.toggle('h-navbar-resp');
})

document.addEventListener("DOMContentLoaded", function() {
    var toggleOn = document.getElementById("toggle-on");
    var toggleOff = document.getElementById("toggle-off");
    var tag = document.getElementById("tag");
  
    toggleOn.addEventListener("click", function() {
      tag.classList.remove("hidden");
    });
  
    toggleOff.addEventListener("click", function() {
      tag.classList.add("hidden");
    });
  });