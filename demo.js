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
  