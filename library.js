const selectedMovie = document.getElementById("selectedBook");
const LoginArea = document.getElementById("loginContainer");

function checkout(buttonStatus) {
      const filmName = buttonStatus.nextSibling.innerHTML;
      selectedMovie.innerHTML = filmName;
};

function validate() {
const userNameValue = document.getElementById("userName").value;
const passWordValue = document.getElementById("passWord").value;
const selectionArea = document.getElementById("select");
      if(userNameValue == "1" && passWordValue == "1" )
   {
       alert( "validation succeeded");
       LoginArea.style.display = "none";
       selectionArea.style.display = "flex";
   }
   else
   {
       alert( "validation failed");
   }
}