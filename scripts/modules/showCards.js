export const showCards = (data, container) => {
    container.innerHTML = "";
    data.forEach(element => {
        container.innerHTML += `<img class="cardImg" src=${element.img} id=${element.id} />` 
    });
}
