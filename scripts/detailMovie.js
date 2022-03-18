import {cards} from "../../data/data.js";
import { showMovies } from "./modules/showCards.js";
let title = document.querySelector('h3');
let image = document.querySelector('img');
let details = document.querySelector('p');
let button = document. querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    let object1 = JSON.parse(localStorage.getItem('ObjectCard'));
    let {id, img, name, description} = object1;
    title.textCont = name;
    image.setAttribute('src', img);
    image.setAttribute('alt', name);
    details.textContent = description;

    showMovies(cards, object1)
})
