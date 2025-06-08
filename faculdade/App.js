import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViaturaLista from './ViaturaLista';
import ViaturaForm from './ViaturaForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaRegistro">
        <Stack.Screen name="ListaRegistro" component={ViaturaLista} options={{ title: 'Registros de Viaturas' }} />
        <Stack.Screen name="NovoRegistro" component={ViaturaForm} options={{ title: 'Novo Registro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
