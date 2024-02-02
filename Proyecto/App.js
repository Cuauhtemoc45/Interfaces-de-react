import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LoginForm from './screens/login';
import Principal from './screens/principal';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='login' component={LoginForm} />
        <Drawer.Screen
          name='principal'
          component={Principal}
          initialParams={{ hidden: true }} // Pass a parameter to hide the screen initially
          options={({ route }) => ({
            drawerLabel: route.params && route.params.hidden ? () => null : 'Principal',
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
