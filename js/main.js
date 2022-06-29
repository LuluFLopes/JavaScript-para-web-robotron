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