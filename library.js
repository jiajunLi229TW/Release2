const selectedMovie = document.getElementById("selectedBook");
function checkout(buttonStatus) {
      const filmName = buttonStatus.nextSibling.innerHTML;
      selectedMovie.innerHTML = filmName;
};