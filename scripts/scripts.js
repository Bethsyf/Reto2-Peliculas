let formulario = document.querySelector(formulario)

formulario.addEventListener('submit', (e) => {
    let nombre = document.querySelector('input').value;
    e.preventDefault();
consolelog(nombre);
    
})