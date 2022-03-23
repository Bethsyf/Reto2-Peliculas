let titleMovie = document.querySelector('h3');
// let image = document.querySelector('img');
// let details = document.querySelector('p');
// let button = document. querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
    let OBJECT_CARD1 = JSON.parse(localStorage.getItem('ObjectCard'));
    let [name, img, description ] =  OBJECT_CARD1;
    titleMovie.textContent = name;
    // image.setAttribute('src', img);
    // image.setAttribute('alt', name);
    // details.textContent = description    
})


