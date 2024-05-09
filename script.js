const btnShare = document.querySelector(".share-button");
const imgShare = document.querySelector(".share-img");
const shareDiv = document.querySelector(".share");
const footerDiv = document.querySelector(".content-footer");

btnShare.addEventListener("click", function () {
  shareDiv.classList.toggle("hidden");
});

btnShare.addEventListener("mouseover", function () {
  imgShare.src = "images/icon-share-hover.svg";
});

btnShare.addEventListener("mouseout", function () {
  imgShare.src = "images/icon-share.svg";
});
