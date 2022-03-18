export const showMovies = (data, container) => {
    
    data.forEach(element => {
        let divCont = document.createElement('div');
        let imgMovie = document.createElement('img');
        let titleMovie = document.createElement('h1');
        let detailMovie = document.createElement('p')
        titleMovie.textContent(element.name);
        imgMovie.setAttribute('src', element.img);
        imgMovie.setAttribute('alt', element.name);
        detailMovie.textContent(element.description);

        divCont.appendChild(titleMovie);
        divCont.appendChild(imgMovie);
        divCont.appendChild(detailMovie)

        container.appendChild(divCont)
    })
}



// import {cards} from "../../data/data.js";

// let title = document.querySelector('h1');
// let image = document.querySelector('img');
// let details = document.querySelector('p');
// let button = document. querySelector('button');

// document.addEventListener('DomContentLoaded', () => {
//     let object1 = JSON.parse(localStorage.getItem('ObjectCard'));
//     let {id, name, description} = object1;
//     title.textCont = name;
//     image.setAttribute('src', img);
//     image.setAttribute('alt', name);
//     details.textContent = description;
// })
