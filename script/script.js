function nav_open() {
    document.getElementById("navBarBox2").style.display = "block";
}

function nav_close() {
    document.getElementById("navBarBox2").style.display = "none";
}
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  setTimeout(function(){
    loader.style.display = "none";
  }, 10000);
});