
// Current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&#169<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;

// Last modified date
const date = document.querySelector("#lastModified");
const lastModified = document.lastModified;
date.textContent = `Last modification: ${lastModified}`;

//The button and navigation
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});