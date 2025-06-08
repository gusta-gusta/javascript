import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import GestorDados from './dados/GestorDados';
import { styles } from './CommonStyles';

export default function ViaturaForm({ navigation, route }) {
  const gestor = new GestorDados();

  const [codigo, setCodigo] = useState(null);
  const [retiradoPor, setRetiradoPor] = useState('');
  const [viatura, setViatura] = useState('');
  const [placa, setPlaca] = useState('');
  const [kmInicio, setKmInicio] = useState('');
  const [kmFim, setKmFim] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [autorizadoPor, setAutorizadoPor] = useState('');

  useEffect(() => {
    if (route.params?.registro) {
      const r = route.params.registro;
      setCodigo(r.codigo);
      setRetiradoPor(r.retiradoPor);
      setViatura(r.viatura);
      setPlaca(r.placa);
      setKmInicio(r.kmInicio.toString());
      setKmFim(r.kmFim.toString());
      setData(r.data);
      setHora(r.hora);
      setAutorizadoPor(r.autorizadoPor);
    }
  }, [route.params]);

  const salvar = async () => {
    const registro = {
      retiradoPor,
      viatura,
      placa,
      kmInicio: parseInt(kmInicio) || 0,
      kmFim: parseInt(kmFim) || 0,
      data,
      hora,
      autorizadoPor,
      ...(codigo && { codigo })
    };

    if (codigo) {
      await gestor.atualizar(registro);
    } else {
      await gestor.adicionar(registro);
    }

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.input} placeholder="Retirado por" value={retiradoPor} onChangeText={setRetiradoPor} />
      <TextInput style={styles.input} placeholder="Viatura" value={viatura} onChangeText={setViatura} />
      <TextInput style={styles.input} placeholder="Placa" value={placa} onChangeText={setPlaca} />
      <TextInput style={styles.input} placeholder="KM Inicial" value={kmInicio} onChangeText={setKmInicio} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="KM Final" value={kmFim} onChangeText={setKmFim} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Data (DD/MM/AAAA)" value={data} onChangeText={setData} />
      <TextInput style={styles.input} placeholder="Hora (HH:MM)" value={hora} onChangeText={setHora} />
      <TextInput style={styles.input} placeholder="Autorizado por" value={autorizadoPor} onChangeText={setAutorizadoPor} />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonTextBig}>Salvar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
