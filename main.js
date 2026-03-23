const details = document.getElementById("detailsSection");
const shareBtn = document.getElementById("shareBtn");
const closeBtn = document.getElementById("mobileCloseBtn");

function isMobile() {
  return window.innerWidth <= 680;
}

shareBtn.addEventListener("click", () => {
  if (isMobile()) {
    details.classList.toggle("mobile-share-active");
  } else {
    details.classList.toggle("share-active");
  }
});

closeBtn.addEventListener("click", () => {
  details.classList.remove("mobile-share-active");
});