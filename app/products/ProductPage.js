import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements'
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
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  productImage: {
    width: '100%',
    height: 250,
    margin: 30,
		borderRadius: 20
  },
});

const ProductPage = data => {
  const { item } = data.route.params;
  const product = useSelector(state => state.data);
  console.log('product: ', item)
  
  return (
    <View style={styles.container}>
      {/* <Icon raised name='ios-american-football'
  type='ionicon' size={62} /> */}
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{`$ ${item.price}`}</Text>
      <Image style={styles.productImage} source={{uri: `${BASE_API}/images/${item.filename}`}}/>
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
};

export default ProductPage;