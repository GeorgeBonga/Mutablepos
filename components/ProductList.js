import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

export const ProductList = ({ products }) => {
  return (
    <View style={styles.container}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Text style={styles.noProductsText}>No products available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  noProductsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#6b7280',
    marginTop: 20,
  },
});

export default ProductList;
