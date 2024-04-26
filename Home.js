const searchIcon = document.getElementById("search-icon");
const searchNav = document.getElementsByClassName("search-nav")[0];

searchIcon.addEventListener("click", function () {
  searchNav.style.display = "block";
});
