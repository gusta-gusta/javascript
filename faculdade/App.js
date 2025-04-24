import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProdutoLista from './ProdutoLista';
import ProdutoForm from './ProdutoForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaProd">
        <Stack.Screen name="ListaProd" component={ProdutoLista} options={{ title: 'Produtos' }} />
        <Stack.Screen name="NovoProd" component={ProdutoForm} options={{ title: 'Cadastro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
