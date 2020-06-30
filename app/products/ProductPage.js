import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { BASE_API } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#333',
    marginVertical: 10,
    fontSize: 34,
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  productImage: {
    width: '100%',
    height: 250,
    margin: 20,
		borderRadius: 20
  },
  description: {
    fontSize: 24
  }
});

const ProductPage = data => {
  const { item } = data.route.params;
  const product = useSelector(state => state.data);
  
  return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{`$ ${item.price}`}</Text>
            <Image style={styles.productImage} source={{uri: `${BASE_API}/images/${item.filename}`}}/>
            <Text style={[styles.text, styles.description]}>{item.description}</Text>
        </View>
      </ScrollView>
  );
};

export default ProductPage;