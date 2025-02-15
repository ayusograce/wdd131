// Current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&#169<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;

//The button and navigation (phone version)
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

// NUMBER OF VISITS IN THE MESSAGE PAGE
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `1`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);