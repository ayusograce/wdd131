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

  
// The form of the contact page
const messages = ["Order a cake", "Order a cakebox", "Order Cookies", "Order other type of dessert", "Price question", "General question", "Other type of message"];

//Function to populate the options of products
function createOptions(possibleMessages){
  const select = document.getElementById("message");
  if (!select) {
    console.error("The element <select> couldn't be found");
    return;
  }

  possibleMessages.forEach(message => {
      const otherMessage = document.createElement("option");
      otherMessage.value = message;
      otherMessage.textContent = message;
      select.appendChild(otherMessage);
  });
}

createOptions(messages);
