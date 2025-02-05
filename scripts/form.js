
// Current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&#169<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;

// Last modified date
const date = document.querySelector("#lastModified");
const lastModified = document.lastModified;
date.textContent = `Last modification: ${lastModified}`;

//List of products
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

//Function to populate the options of products
function createOptions(products){
    const select = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option")
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

createOptions(products);

// //Tracking the number of reviews
// document.addEventListener("DOMContentLoaded", () => {
//   const reviewsDisplay = document.querySelector(".counter");

//   if (!reviewsDisplay) return;

//   let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

//   if (numReviews === 0){
//     reviewsDisplay.textContent = `This is your first review. Thank you!`;
//   }
//   else{
//     reviewsDisplay.textContent = `Number of Reviews: ${numReviews}`;
//   }

//   numReviews++;

//   localStorage.setItem("numReviews-ls", numReviews);
// });