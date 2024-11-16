import React from 'react';
import { FlatList, View, Text } from 'react-native';
import  SalesItems  from './SalesItems';

export const SalesProductList = ({ products }) => {
  return (
    <View className="flex-1 mb-10 ">
      {/* Check if Sales are available */}
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <SalesItems product={item} />}
          keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Add bottom padding
        />
      ) : (
        <Text className="text-center text-lg text-gray-500 mt-5">No Sales available</Text>
      )}
    </View>
  );
};

export default SalesProductList