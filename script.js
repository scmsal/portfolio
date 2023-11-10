

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("Menu");
    if (x.className === "menu") {
      x.className += "responsive";
    } else {
      x.className = "menu";
    }
  }

/* Makes email address appear on click */
function showEmail() {
var text = document.getElementById("email");
if  (text.style.display=="none"){
    text.style.display = "inline";
}
else {
    text.style.display="none";
}

}
