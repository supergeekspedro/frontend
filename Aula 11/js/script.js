function alterarTitulo() {
    var entrada = document.querySelector("input")
    var titulo = document.querySelector("h1")

    var textoEntrada = entrada.value

    entrada.value = ""

    titulo.innerHTML = textoEntrada
}