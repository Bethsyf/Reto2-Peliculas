import {cards} from "../data/data.js";
import {showMovies} from "./modules/showMovies.js";
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

let contMovies = document.getElementById('contMovies');
document.addEventListener('DOMContentLoaded', () => {
    showMovies(cards, contMovies)
})



document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cardMovie') ) {
        
        let idCard = e.target.id;
        let elemento = [];
        elemento = cards.find(item => item.id == idCard);
        localStorage.setItem('ObjectCard', JSON.stringify(elemento));
        window.location.href = '../pages/detail.html';
    }
})


// let image1 = document.createElement('img');
// image1.src = 'https://pics.filmaffinity.com/Un_amigo_abominable-320900881-large.jpg';
// document.querySelector('#img1').appendChild(image1);
// let tituloImage1 = document.createElement('h3');
// tituloImage1.textContent = ' Un Amigo Abominable';
// document.querySelector('#img1').appendChild(tituloImage1);

// let image2 = document.createElement('img');
// image2.src = 'https://es.web.img2.acsta.net/pictures/19/01/14/13/23/5258040.jpg';
// document.querySelector('#img2').appendChild(image2);
// let tituloImage2 = document.createElement('h3');
// tituloImage2.textContent = ' IO, sola en la tierra';
// document.querySelector('#img2').appendChild(tituloImage2);


// let image3 = document.createElement('img');
// image3.src = 'https://pics.filmaffinity.com/El_proyecto_Adam-718096348-large.jpg';
// document.querySelector('#img3').appendChild(image3);
// let tituloImage3 = document.createElement('h3');
// tituloImage3.textContent = 'El proyecto Adam';
// document.querySelector('#img3').appendChild(tituloImage3);

// let image4 = document.createElement('img');
// image4.src = 'https://m.media-amazon.com/images/I/51vSMi5ABJL.jpg';
// document.querySelector('#img4').appendChild(image4);
// let tituloImage4 = document.createElement('h3');
// tituloImage4.textContent = 'Fin de semana en Croacia';
// document.querySelector('#img4').appendChild(tituloImage4);

