let slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let btnLeft = document.querySelector('#btn-left');
let btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 5000);

let image1 = document.createElement('img');
image1.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
document.querySelector('#img1').appendChild(image1);
let tituloImage1 = document.createElement('h3');
tituloImage1.textContent = 'Abominable';
document.querySelector('#img1').appendChild(tituloImage1);

let image2 = document.createElement('img');
image2.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
document.querySelector('#img2').appendChild(image2);

let image3 = document.createElement('img');
image3.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
document.querySelector('#img3').appendChild(image3);

let image4 = document.createElement('img');
image4.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
document.querySelector('#img4').appendChild(image4);

let image5 = document.createElement('img');
image5.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
document.querySelector('#img5').appendChild(image5);

let image6 = document.createElement('img');
image6.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
document.querySelector('#img6').appendChild(image6);
