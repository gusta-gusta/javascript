import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@produtos';

export default class GestorDados {
  async obterTodos() {
    const json = await AsyncStorage.getItem(KEY);
    return json ? JSON.parse(json) : [];
  }

  async adicionar(produto) {
    const lista = await this.obterTodos();
    produto.codigo = Date.now(); // simples id
    lista.push(produto);
    await AsyncStorage.setItem(KEY, JSON.stringify(lista));
  }

  async remover(codigo) {
    let lista = await this.obterTodos();
    lista = lista.filter(p => p.codigo !== codigo);
    await AsyncStorage.setItem(KEY, JSON.stringify(lista));
  }

  async atualizar(produtoAtualizado) {
    const lista = await this.obterTodos();
    const novaLista = lista.map(p => p.codigo === produtoAtualizado.codigo ? produtoAtualizado : p);
    await AsyncStorage.setItem(KEY, JSON.stringify(novaLista));
  }
}
