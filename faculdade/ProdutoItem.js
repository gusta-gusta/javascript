import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CommonStyles';

export default function ProdutoItem({ produto, onDelete, onEdit }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textItem}>{produto.codigo} - {produto.nome}</Text>
      <Text style={styles.textItem}>Qtd: {produto.quantidade}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
