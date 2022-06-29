const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");


somar.addEventListener("click", (evento) => {

    braco.value = parseInt(braco.value) + 1;

});

subtrair.addEventListener("click", (evento) => {

        braco.value = parseInt(braco.value) - 1;

});


/*
const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", (evento) => {

    console.log(evento);

});

// Função nomeada.
function dizOi(nome) {
    console.log("Oi " + nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi("Pedro");
*/
