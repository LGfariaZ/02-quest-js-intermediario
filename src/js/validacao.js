const campos = document.querySelectorAll(".campo");
const avisos = document.querySelectorAll(".aviso");
const botaoEnviar = document.getElementById("botao-enviar");

campos.forEach(function (campo, indice) {
    campo.addEventListener("change", () => {
        if (campo.value != "") {
            campo.classList.add("preenchido");
            avisos[indice].classList.remove("aviso-ativo");
        } else {
            campo.classList.remove("preenchido");
        }
    })
})

botaoEnviar.addEventListener("click", () => {
    campos.forEach(function (campo, indice) {
        if (campo.value == "") {
            campo.classList.add("nao-preenchido");
            avisos[indice].classList.add("aviso-ativo");
        }
    });
})

