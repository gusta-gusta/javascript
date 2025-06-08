import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CommonStyles';

export default function ViaturaItem({ registro, onDelete, onEdit }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textItem}>#{registro.codigo} - {registro.viatura} ({registro.placa})</Text>
      <Text style={styles.textItem}>Retirado por: {registro.retiradoPor}</Text>
      <Text style={styles.textItem}>KM Início: {registro.kmInicio} | KM Fim: {registro.kmFim}</Text>
      <Text style={styles.textItem}>Data: {registro.data} - Hora: {registro.hora}</Text>
      <Text style={styles.textItem}>Autorizado por: {registro.autorizadoPor}</Text>

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
