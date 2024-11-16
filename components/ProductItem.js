import React from 'react';
import { View, Text } from 'react-native';
import Ionicons  from 'react-native-vector-icons';

export const ProductItem = ({ product }) => {
  // Get current date in the format: MM/DD/YYYY
  const currentDate = new Date().toLocaleDateString();

  return (
    <View className={`flex-row items-center p-4 rounded-lg  ${product.color}`}>
      {/* Product Image Placeholder (optional) */}
      {/* <View className="w-12 h-12 rounded-full bg-gray-200 mr-4"></View> */}

      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-700">{product.name}</Text>
        <View className="flex-row ">
          <Text className="text-sm text-green-500 mr-4">{product.available}</Text>
          <Text className="text-sm text-red-500">{product.sold}</Text>
        </View>
        {/* Display the current date */}
        <Text className="text-xs text-gray-500 mt-1">Date Added: {currentDate}</Text>
      </View>

      {product.lowStock && (
        <Text className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full mr-2">Low Stock</Text>
      )}

      <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
    </View>
  );
};
