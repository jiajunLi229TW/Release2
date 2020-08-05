const selectedMovie = document.getElementById("selectedBook");

function checkout(buttonStatus) {
      const filmName = buttonStatus.nextSibling.innerHTML;
      selectedMovie.innerHTML = filmName;
};

function validate() {
const userNameValue = document.getElementById("userName").value;
const passWordValue = document.getElementById("passWord").value;
      if(userNameValue == "admin" && passWordValue == "admin" )
   {
       alert( "validation succeeded");
   }
   else
   {
       alert( "validation failed");
   }
}