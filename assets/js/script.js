function getPrato(prato) {
    const selecionado = document.querySelector("#pratos .green-box")
    if(selecionado !== null){
        selecionado.classList.remove("green-box")
    }
    prato.classList.add("green-box")
    activeButton()
}


function getBebida(bebida) {
    const selecionado = document.querySelector("#bebidas .green-box")
    if(selecionado !== null){
        selecionado.classList.remove("green-box")
    }
    bebida.classList.add("green-box")
    activeButton()
}


function getSobremesa(sobremesa) {
    const selecionado =  document.querySelector("#sobremesas .green-box")
    if(selecionado !== null){
        selecionado.classList.remove("green-box")
    }
    sobremesa.classList.add("green-box")
    activeButton()
}

function activeButton(){
    let quantidade = document.getElementsByClassName("green-box").length
    if(quantidade === 3){
        document.querySelector("button").classList.add("botao-enviar")
        document.querySelector("button p").classList.add("fechar-pedido")
        document.querySelector("button p").innerHTML = "Fechar pedido"
        document.querySelector("button").removeAttribute("disabled")
    }
}