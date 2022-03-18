export const showMovies = (data, container) => {
    container.innerHTML = "";
    data.forEach(element => {
        container.innerHTML += `<h3>${element.name}<h3/>`
        container.innerHTML += `<img class="cardMovie" src=${element.img} alt=${element.name} />`
    });
}
