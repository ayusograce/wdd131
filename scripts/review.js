
// Current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&#169<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;

// Last modified date
const date = document.querySelector("#lastModified");
const lastModified = document.lastModified;
date.textContent = `Last modification: ${lastModified}`;


// //Tracking the number of reviews
document.addEventListener("DOMContentLoaded", () => {
  const reviewsDisplay = document.querySelector(".counter");

  if (!reviewsDisplay) return;

  let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

  if (numReviews === 0){
    reviewsDisplay.textContent = `This is your first review. Thank you!`;
  }
  else{
    reviewsDisplay.textContent = `${numReviews}`;
  }

  numReviews++;

  localStorage.setItem("numReviews-ls", numReviews);
});