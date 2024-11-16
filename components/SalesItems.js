import React from 'react';
import { View, Text, Image } from 'react-native';

const SalesItems = ({ product }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View className={`flex-row items-center p-4 rounded-lg ${product.color}`}>
      {/* Product Image */}
      <Image
        source={{ uri: product.imageUrl }} // Use the imageUrl from the product data
        style={{ width: 56, height: 56, borderRadius: 8, marginRight: 12 }}
        resizeMode="cover"
      />

      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-gray-700">{product.name}</Text>
          <Text className="text-lg font-bold text-gray-700">${product.price}</Text>
        </View>
        <View className="flex-row">
          <Text className="text-sm text-green-500 mr-4">{product.available}</Text>
          <Text className="text-sm text-red-500">{product.sold}</Text>
        </View>
        <Text className="text-xs text-gray-500 mt-1">Date: {currentDate}</Text>
      </View>

      {product.lowStock && (
        <Text className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full mr-2">Low Stock</Text>
      )}
    </View>
  );
};

export default SalesItems;
