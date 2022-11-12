
let captura = document.querySelector("#botao");

captura.addEventListener("click", function (e) {
  e.preventDefault();

  let inputEmpresa = document.querySelector("#empresa");
  let dadosEmpresa = inputEmpresa.value;

  let inputCategoria = document.querySelector("#categoria");
  let dadosCategoria = inputCategoria.value;

  let inputData = document.querySelector("#data");
  let dadosData = inputData.value;

  let inputValor = document.querySelector("#valor");
  let dadosValor = inputValor.value;

const Receita= new CriandoReceita(dadosEmpresa, dadosCategoria, dadosData, dadosValor)

let resultado = document.querySelector("#resultado")
resultado.textContent = "Receita Cadastrada com sucesso!!!"
  console.log(Receita)
  //Imprimindo na tela
let resultadoEmpresa = document.querySelector("#resultadoEmpresa")
resultadoEmpresa.textContent = Receita.empresa

let resultadoRecebimento = document.querySelector("#resultadoRecebimento")
resultadoRecebimento.textContent = Receita.categoria

let resultadoData = document.querySelector("#resultadoData")
resultadoData.textContent = Receita.data

let resultadoValor = document.querySelector("#resultadoValor")
resultadoValor.textContent = `R$${Receita.valor}`

//Imprimindo o valor Total

let valortotal = document.querySelector("#resultado-total")
valortotal.textContent = `R$ ${Receita.valor}`

});


