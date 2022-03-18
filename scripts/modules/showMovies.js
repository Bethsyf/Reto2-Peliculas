export const showMovies = (data, container) => {
    
    data.forEach(element => {
        let divCont = document.createElement('div');
        let imgMovie = document.createElement('img');
        let titleMovie = document.createElement('h1');
        imgMovie.setAttribute('src', element.img);
        imgMovie.setAttribute('alt', element.name);
        titleMovie.textContent(element.name);

        divCont.appendChild(titleMovie);
        divCont.appendChild(imgMovie);

        container.appendChild(divCont)
    })
}