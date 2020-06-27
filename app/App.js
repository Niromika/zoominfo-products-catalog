import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import ProductsList from './products/ProductsList';

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/products/');
      const body = await res.json();
      console.log(body);
    }
    console.log('res');
    fetchData();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ProductsList />
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  
});

export default App;
