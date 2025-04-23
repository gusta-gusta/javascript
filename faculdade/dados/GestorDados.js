export default class GestorDados {
    constructor() {
      this.lista = [
        { codigo: 1, nome: 'Produto A', quantidade: 10 },
        { codigo: 2, nome: 'Produto B', quantidade: 5 }
      ];
    }
  
    async obterTodos() {
      return this.lista;
    }
  
    async remover(codigo) {
      this.lista = this.lista.filter(p => p.codigo !== codigo);
    }
  }
  