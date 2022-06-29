/*

- Minha versão.

const click = document.querySelector('#calcular');

click.addEventListener("click", () => {

    console.log("Fui clicado!");

})

*/

// Reposta do Instrutor.

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {

    resultado.innerHTML = "Fui clicado"
    
})