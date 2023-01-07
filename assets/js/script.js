function getPrato(prato) {
    const selecionado = document.querySelector("#pratos .green-box")
    if(selecionado !== null){
        selecionado.classList.remove("green-box")
    }
    prato.classList.add("green-box")
}


function getBebida(bebida) {
    const selecionado = document.querySelector("#bebidas .green-box")
    if(selecionado !== null){
        selecionado.classList.remove("green-box")
    }
    bebida.classList.add("green-box")
}


function getSobremesa(sobremesa) {
    const selecionado =  document.querySelector("#sobremesas .green-box")
    if(selecionado !== null){
        selecionado.classList.remove("green-box")
    }
    sobremesa.classList.add("green-box")
}