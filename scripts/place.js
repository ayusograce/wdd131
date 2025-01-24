// Current year
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `&#169<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;

// Last modified date
const date = document.querySelector("#lastModified");
const lastModified = document.lastModified;
date.textContent = `Last modification: ${lastModified}`;

//WIND CHILL FACTOR
const temperature = 29;
const windSpeed = 16;

function calculateWindChill(temperature, windSpeed) {
    let solution;
     if (temperature <= 10 && windSpeed > 4.8)
     {
        solution = 13.12 + 0.62 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        solution = solution.toFixed(2);
     }
     else{
        solution = "N/A";
     }
     return solution;
}

//DISPLAY RESULTS
document.addEventListener("DOMContentLoaded", () => {
    const windValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windValue;
});