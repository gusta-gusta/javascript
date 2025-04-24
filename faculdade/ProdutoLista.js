import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import GestorDados from './dados/GestorDados';
import ProdutoItem from './ProdutoItem';
import { styles } from './CommonStyles';
import { useIsFocused } from '@react-navigation/native';

export default function ProdutoLista({ navigation }) {
  const gestor = new GestorDados();
  const [produtos, setProdutos] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    gestor.obterTodos().then(setProdutos);
  }, [isFocused]);

  const excluirProduto = async (codigo) => {
    await gestor.remover(codigo);
    const lista = await gestor.obterTodos();
    setProdutos(lista);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('NovoProd')}>
        <Text style={styles.buttonTextBig}>Novo Produto</Text>
      </TouchableOpacity>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <ProdutoItem
            produto={item}
            onDelete={() => excluirProduto(item.codigo)}
            onEdit={() => navigation.navigate('NovoProd', { produto: item })}
          />
        )}
      />
    </View>
  );
}
