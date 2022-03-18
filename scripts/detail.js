import {cards} from "../data/data.js";

let title = document.querySelector('h1');
let image = document.querySelector('img');
let details = document.querySelector('p');
let button = document. querySelector('button');

document.addEventListener('DomContentLoaded', () => {
    let object1 = JSON.parse(localStorage.getItem('ObjectCard'));
    let {id, name, description} = object1;
    title.textCont = name;
    image.setAttribute('src', img);
    image.setAttribute('alt', name);
    details.textContent = description;
})