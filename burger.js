var hamburger = document.querySelector('.hamburger');
var nav_bar = document.querySelector('.nav-bar')

hamburger.onclick = function() {
    hamburger.classList.toggle("is-active")
    nav_bar.classList.toggle("display-none")
    
  }