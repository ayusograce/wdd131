// Current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&#169<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;

// // Last modified date
// const date = document.querySelector("#lastModified");
// const lastModified = document.lastModified;
// date.textContent = `Last modification: ${lastModified}`;

//The button and navigation
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// The carousel of images in the product page

const carousels = [
	{ id: "carousel1", images: ["images/product11.webp", "images/product12.webp", "images/product13.webp", "images/product14.webp"], index:0},
	{ id: "carousel2", images: ["images/product21.webp", "images/product22.webp", "images/product23.webp", "images/product24.webp"], index:0},
	{ id: "carousel3", images: ["images/product31.webp", "images/product32.webp", "images/product33.webp", "images/product34.webp"], index:0},
	{ id: "carousel4", images: ["images/product41.webp", "images/product42.webp", "images/product43.webp", "images/product44.webp"], index:0}
];

carousels.forEach((carousel) => {
	const carouselElement = document.getElementById(carousel.id);
	const imgElement = carouselElement.querySelector("#carousel-img");
	const prevButton = carouselElement.querySelector(".prev");
	const nextButton = carouselElement.querySelector(".next");

	prevButton.addEventListener("click", () => {
		carousel.index = (carousel.index - 1 + carousel.images.length) % carousel.images.length;
		imgElement.src = carousel.images[carousel.index];
	});

	nextButton.addEventListener("click", () => {
		carousel.index = (carousel.index + 1) % carousel.images.length;
		imgElement.src = carousel.images[carousel.index];
	});
});


// The form of the contact page
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
