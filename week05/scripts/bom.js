
//declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    //checks if the imput is not empty
    if (input.value.trim() !== '') { 
        //call the function that outputs the submitted chapter
        displayList(input.value);
        //add the chapter to the array
        chaptersArray.push(input.value);
        //update the localStorage with the new array
        setChapterList();
        //clear the input
        input.value = '';
        //set the focus back to the input
        input.focus();
     }
})

function displayList(item){
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavoriteBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.lenght -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


