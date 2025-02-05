amigos = []

function adicionarAmigo() {
    
    if (document.getElementById("amigo").value === "") {
        document.getElementById("error").innerHTML = "Você precisa digitar um nome!!!"
    } else {
        amigos.push(document.getElementById("amigo").value)
        document.getElementById("listaAmigos").innerHTML += `<li>${amigos.at(-1)}</l1>`
        
    }
}

function sortearAmigo() {
    if (amigos.length > 0 ) {
        numero = Math.floor((Math.random() * amigos.length) + 1) - 1
        sorteado = amigos.at(numero)
        document.getElementById("resultado").innerHTML = `<li> Seu amigo secreto é ${sorteado}</l1>`
    }
}