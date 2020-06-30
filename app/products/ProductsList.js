import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, VirtualizedList, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, search } from './redux/actions';
import Spinner from 'react-native-loading-spinner-overlay';
import { BASE_API } from '../config';

const styles = StyleSheet.create({
	searchInput: {
		backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 15,
		margin: 15,
		marginBottom: 5,
		padding: 10,
		fontSize: 20
	},
	productContainer: {
		alignItems: 'center'
	},
  product: {
    width: '100%',
		padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
		borderStyle: 'solid',
		borderRadius: 20,
    alignItems: 'center'
	},
	productDetails: {
		fontSize: 25,
		color: '#333',
		fontWeight: 'bold'
	},
  productImage: {
		margin: 15,
    width: '100%',
		height: 150,
		borderRadius: 5
  },
  loadingSpinner: {
    color: '#fff'
  }
});

let timeoutId;
const debaounce = (cb) => {
  if(timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    cb();
    timeoutId = null;
  }, 300);
}
  
const ProductsList = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const shouldFetchMoreProducts = useSelector(state => state.hasMore);
  const isLoading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, []);
  
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder='Search product...'
        onChangeText={ inputText => { 
          setPage(1); 
          setText(inputText);
          debaounce(() => dispatch(search(inputText)));
          }
        }
      />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => { navigation.navigate('ProductPage', { item }) }}
            activeOpacity={0.75}
            style={styles.productContainer}
            key={item.id} >
            <View style={styles.product}>
              <Text style={styles.productDetails}>{item.title}</Text>
              <Image style={styles.productImage} source={{uri: `${BASE_API}/images/${item.filename}`}}/>
							<Text style={styles.productDetails}>{`$ ${item.price}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={data => data.length}
        getItem={(data, index) => data[index]}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
            if(shouldFetchMoreProducts) {
              const newPage = page + 1;
              setPage(newPage);
              dispatch(fetchProducts(newPage, text));
            }
          }
        }
      />
      <Spinner 
        visible={isLoading}
        textContent={'Loading...'} 
        textStyle={styles.loadingSpinner}
      />
    </View>
  );
};

export default ProductsList;