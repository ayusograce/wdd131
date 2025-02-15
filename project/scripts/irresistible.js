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