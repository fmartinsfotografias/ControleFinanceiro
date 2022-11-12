function CriandoReceita(empresa, categoria, data, valor) {
  this.empresa = empresa;
  this.categoria = categoria;
  this.data = data;
  this.valor = valor;
}

function Despesa(empresa, categoria, data, valor, formaDePagamento) {
  CriandoReceita.call(this, empresa, categoria, data, valor);
  this.formaDePagamento = formaDePagamento
}

