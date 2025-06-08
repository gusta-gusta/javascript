import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@registros_viatura';

export default class GestorDados {
  async obterTodos() {
    const json = await AsyncStorage.getItem(KEY);
    return json ? JSON.parse(json) : [];
  }

  async adicionar(registro) {
    const lista = await this.obterTodos();
    registro.codigo = Date.now(); // gera um ID único simples
    lista.push(registro);
    await AsyncStorage.setItem(KEY, JSON.stringify(lista));
  }

  async remover(codigo) {
    let lista = await this.obterTodos();
    lista = lista.filter(r => r.codigo !== codigo);
    await AsyncStorage.setItem(KEY, JSON.stringify(lista));
  }

  async atualizar(registroAtualizado) {
    const lista = await this.obterTodos();
    const novaLista = lista.map(r => r.codigo === registroAtualizado.codigo ? registroAtualizado : r);
    await AsyncStorage.setItem(KEY, JSON.stringify(novaLista));
  }
}
