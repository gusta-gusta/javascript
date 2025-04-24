import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import GestorDados from './dados/GestorDados';
import { styles } from './CommonStyles';

export default function ProdutoForm({ navigation, route }) {
  const gestor = new GestorDados();
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigo, setCodigo] = useState(null);

  useEffect(() => {
    if (route.params?.produto) {
      const p = route.params.produto;
      setNome(p.nome);
      setQuantidade(p.quantidade.toString());
      setCodigo(p.codigo);
    }
  }, [route.params]);

  const salvar = async () => {
    const produto = {
      nome,
      quantidade: parseInt(quantidade),
      ...(codigo && { codigo })
    };

    if (codigo) {
      await gestor.atualizar(produto);
    } else {
      await gestor.adicionar(produto);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonTextBig}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
