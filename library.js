const selectedMovie = document.getElementById("selectedBook");
const LoginArea = document.getElementById("loginContainer");
const selectionArea = document.getElementById("select");
const informationButton = document.getElementById("informationCheck");
const informationCard = document.getElementById("card");

function checkout(buttonStatus) {
  const filmName = buttonStatus.nextSibling.innerHTML;
  selectedMovie.innerHTML = filmName;
}

function validate() {
  const userNameValue = document.getElementById("userName").value;
  const passWordValue = document.getElementById("passWord").value;

  if (userNameValue == "1" && passWordValue == "1") {
    alert("validation succeeded");
    LoginArea.style.display = "none";
    selectionArea.style.display = "flex";
    informationButton.style.display = "flex";
  } else {
    alert("validation failed");
  }
}

function checkInformation() {
  if ((informationButton.clicked = true)) {
    informationCard.style.display = "block";
    informationButton.style.display = "none";
  } 
}
