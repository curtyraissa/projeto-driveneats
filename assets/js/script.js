function getPrato(prato) {
  const selecionado = document.querySelector("#pratos .green-box")
  if (selecionado !== null) {
    selecionado.classList.remove("green-box")
  }
  prato.classList.add("green-box")
  activeButton()
}


function getBebida(bebida) {
  const selecionado = document.querySelector("#bebidas .green-box")
  if (selecionado !== null) {
    selecionado.classList.remove("green-box")
  }
  bebida.classList.add("green-box")
  activeButton()
}


function getSobremesa(sobremesa) {
  const selecionado = document.querySelector("#sobremesas .green-box")
  if (selecionado !== null) {
    selecionado.classList.remove("green-box")
  }
  sobremesa.classList.add("green-box")
  activeButton()
}

function activeButton() {
  let quantidade = document.getElementsByClassName("green-box").length
  if (quantidade === 3) {
    document.querySelector("button").classList.add("botao-enviar")
    document.querySelector("button p").classList.add("fechar-pedido")
    document.querySelector("button p").innerHTML = "Fechar pedido"
    document.querySelector("button").removeAttribute("disabled")
  }
}

function enviarPedido() {
  const prato = document.querySelector("#pratos .green-box h4").innerHTML;
  const bebida = document.querySelector("#bebidas .green-box h4").innerHTML;
  const sobremesa = document.querySelector(
    "#sobremesas .green-box h4"
  ).innerHTML;

  const precoPrato = document.querySelector("#pratos .green-box .preco").innerHTML;
  const precoBebida = document.querySelector("#bebidas .green-box .preco").innerHTML;
  const precoSobremesa = document.querySelector(
    "#sobremesas .green-box .preco"
  ).innerHTML;

  const precoPratoNumber = valores(precoPrato);
  const precoBebidaNumber = valores(precoBebida);
  const precoSobremesaNumber = valores(precoSobremesa);
  const valorTotal = precoPratoNumber + precoBebidaNumber + precoSobremesaNumber;

  const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa}\nTotal: R$ ${valorTotal.toFixed(2)}`

  const wApp = "https://wa.me/5521993466695?text=" + encodeURI(mensagem);
  window.open(wApp);
}

function valores(string) {
  let numero = string.replace(/[^0-9]/g, "");
  return parseInt(numero) / 100;
}