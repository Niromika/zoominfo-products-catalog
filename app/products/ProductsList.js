import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { fetchProduts, fetchProduct } from './redux/actions';

const styles = StyleSheet.create({

});

const ProductsList = props => {
    const {hasMore, data, loading, totalCount} = props; // comming from mapStateToProsps
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // replace with redux action instead
    fetchProduct();

    // using internal state
    // const fetchData = async () => {
    //   const res = await fetch(`${BASE_API}/products/`);
    //   const body = await res.json();
    //   setProducts(body.data);
    // };
    //
    // fetchData();
  }, []);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <VirtualizedList
        data={data}
        initialNumToRender={10}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={async () => {
              const product = await fetchProduct(item.id);
              navigation.navigate('Product', {
                id: item.id,
              });
            }}
            activeOpacity={0.75}
            style={{flex: 1}}
            key={item.id}>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        getItemCount={data => data.length}
        getItem={(data, index) => data[index]}
        onEndReached={() => {
          // stop fetching data if there is nothing left
        //   if (hasMore) {
        //     fetchProducts();
        //   }
        }}
      />
      {/* {loading && <Loading />} */}
    </SafeAreaView>
  );
};

const mapStateToProps = (state, ownProps) => ({
data: state.products.data,
loading: state.products.loading,
hasMore: state.products.hasMore,
totalCount: state.products.totalCount
})

const mapDispatchToProps = {
//  search,
//  fetchProducts,
 fetchProduct,
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
