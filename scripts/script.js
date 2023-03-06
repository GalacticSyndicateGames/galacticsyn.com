const moreBtn = document.querySelector(".show-btn");

moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#moreTextbox").classList.toggle("closed");
});
