let form = document.querySelector("form")

formulario.addEventListener('submit', (e) => {
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let observaciones = document.querySelector('#observaciones').value;
    e.preventDefault();

    localStorage.setItem ("nombre", nombre)
    localStorage.setItem ("apellido", apellido)
    localStorage.setItem ("telefono", telefono)
    localStorage.setItem ("direccion", direccion)
    localStorage.setItem ("observaciones", observaciones)
    form.reset();
    window.location.href = './Register.html';
})
