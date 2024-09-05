import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './views/login';
import telaPrincipal from './views/telaPrincipal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login/Cadastro" component={login} />
        <Stack.Screen name="Cronômetro pomodoro" component={telaPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
