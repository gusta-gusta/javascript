import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import GestorDados from './dados/GestorDados';
import ViaturaItem from './ViaturaItem';
import { styles } from './CommonStyles';
import { useIsFocused } from '@react-navigation/native';

export default function ViaturaLista({ navigation }) {
  const gestor = new GestorDados();
  const [registros, setRegistros] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    gestor.obterTodos().then(setRegistros);
  }, [isFocused]);

  const excluirRegistro = async (codigo) => {
    await gestor.remover(codigo);
    const lista = await gestor.obterTodos();
    setRegistros(lista);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NovoRegistro')}
        >
          <Text style={styles.buttonTextBig}>Novo Registro</Text>
        </TouchableOpacity>

        <FlatList
          data={registros}
          keyExtractor={(item) => item.codigo.toString()}
          renderItem={({ item }) => (
            <ViaturaItem
              registro={item}
              onDelete={() => excluirRegistro(item.codigo)}
              onEdit={() => navigation.navigate('NovoRegistro', { registro: item })}
            />
          )}
          contentContainerStyle={{ paddingBottom: 60 }} // espaço para o footer
        />
      </View>

      <View style={footerStyles.footer}>
        <Text style={footerStyles.footerText}>
          Desenvolvido por Gustavo Sales Rodrigues @2025
        </Text>
      </View>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#eee',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
