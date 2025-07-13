const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = [];
/* Declaring the alternative text for each image file */

const altText = [
    {name: "images/pic0.jpg", alt: "not an elegantn solution"},
    {name: "images/pic1.jpg", alt: "Close up of an eyeball"},
    {name: "images/pic2.jpg", alt: "Smooth rocks"},
    {name: "images/pic3.jpg", alt: "Wilting violets"},
    {name: "images/pic4.jpg", alt: "Egyption hieroglyphs"},
    {name: "images/pic5.jpg", alt: "A moth"},
];
/* Looping through images */
for (let i = 1; i < 6; i++){
    const newImage = document.createElement('img');
    newImage.src="images/pic"+i+".jpg";
    imgArray[i] = newImage.src;
    thumbBar.appendChild(newImage);


newImage.addEventListener("click", function(){
    newImage.setAttribute('alt', altText[i].alt);  
    displayedImage.setAttribute('src', altText[i].name); 
    displayedImage.setAttribute('alt', altText[i].alt); 
})


/* Wiring up the Darken/Lighten button */
darkButton = document.getElementById("dark");
darkButton.addEventListener("click", function(){
    displayedImage.style.filter="brightness(50%)";
});
};


