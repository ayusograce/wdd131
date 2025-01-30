//  arrays.js
//Activity 1 - Map
const steps = ["one", "two", "three"];
function listTemplate(step) 
{
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

//Activity 2 - Map
const grades = ['A', 'B', 'C'];
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === 'A')
    {
        points = 4;
    }
    else if (grade === 'B')
    {
        points = 3;
    }
    return points;
}


//Activity 3 - Reduce
const gpaPoints = grades.map(convertGradeToPoints);

const pointsTotal = gpaPoints.reduce(function(total, item)
{
    return total + item;
});

const gpa = pointsTotal/gpaPoints.length;


//Activity 4 - Filter 
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const smallerFruits = fruits.filter((fruit) => fruit.length < 6);

//Activity 5 - indexOf
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);

