let slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let btnLeft = document.querySelector('btn-left');
let btnRight = document.querySelector('btn-right')

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Mover(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];

}