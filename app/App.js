import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsList from './products/ProductsList';
import ProductPage from './products/ProductPage'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductsList" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}>
        <Stack.Screen name="ProductsList" component={ProductsList} options={{ title: 'Grocery Store' }}/>
        <Stack.Screen name="ProductPage" component={ProductPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
