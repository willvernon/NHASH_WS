//Login.js

function myFunction() {
    var inpObj = document.getElementById("idp");
    if (!inpObj.checkValidity()) {
        document.getElementById("wallet").innerHTML =
inpObj.validationMessage;
} else {
    document.getElementById("wallet").localName = "AB-homePage.html";
}
    }


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}