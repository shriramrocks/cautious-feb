let myImage = document.querySelector('img');

myImage.onclick = function (){
    let mySrc = myImage.getAttribute ('src');
    if (mySrc === 'images/shriram-photo.jpg'){
        myImage.setAttribute ('src', "images/shriram-photo-2.jpg");
    } else {
        myImage.setAttribute ('src', "images/shriram-photo.jpg")
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



if(!localStorage.getItem('name')){
    setUserName ();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Shriram is cool,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

function setUserName (){
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
    }
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'Shriram is cool,' + myName;
}