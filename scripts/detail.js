let h5 =  document.querySelector('h5');
let image = document.querySelector('img');
let info = document.querySelector('p');
let boton = document.querySelector('#return');

const getLocalStorage = () => {

    let descrip = JSON.parse(localStorage.getItem('VerMas'));
    const {name, img, desc} = descrip;
    console.log(descrip)
    console.log(name)
    h5.textContent = name
    img.setAttribute('src', image);
    info.textContent = desc
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

    boton.addEventListener('click', () => {
    window.location.href = 'index.html';
})





// let tituloP = document.querySelector('h1');
// let imagen = document.querySelector('img');
// let details = document.querySelector('p');


// document.addEventListener('DOMContentLoaded', () => {
//     let OBJECT_CARD = JSON.stringify(localStorage.getItem('ObjectCard'));
//     let { id, img, name, description } =  OBJECT_CARD;
//     tituloP.textContent = name;
//     imagen.setAttribute('src', img);
//     imagen.setAttribute('alt', name);
//     details.textContent = description;    
// })

// import { cards } from "../../data/personajes.js";

// const movies = cards;

