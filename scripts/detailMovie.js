let title = document.querySelector('h3');
let image = document.querySelector('img');
let details = document.querySelector('p');
let button = document. querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    let OBJECT_CARD = JSON.parse(localStorage.getItem('ObjectCard'));
    let {img, name, description } =  OBJECT_CARD;
    title.textCont = name;
    image.setAttribute('src', img);
    image.setAttribute('alt', name);
    details.textContent = description;    
})


