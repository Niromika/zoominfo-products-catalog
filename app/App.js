import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsList from './products/ProductsList';
import ProductPage from './products/ProductPage'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductsList"
        screenOptions={{ 
            cardStyle: { backgroundColor: '#F8F8F8' }, 
            headerTintColor: '#F5F5F5', 
            headerStyle: { backgroundColor: 'orange' },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 24, letterSpacing: 1 }}}>
        <Stack.Screen name="ProductsList" component={ProductsList} options={{ title: 'Grocery Store' }}/>
        <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Selected Product' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
