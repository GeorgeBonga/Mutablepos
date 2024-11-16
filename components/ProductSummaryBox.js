import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"; 
export const ProductSummaryBox = ({ title, value, percentage, color }) => {
  return (
    <View className="flex-1 items-center p-5 rounded-lg bg-blue-50 mx-2 shadow-sm">
      <Text className="text-sm text-gray-500">{title}</Text>
      <Text className="text-2xl font-extrabold text-black my-2">{value}</Text>
      <View className={`flex-row items-center rounded-full px-3 py-1 ${color}`}>
        <Ionicons name="arrow-up" size={14} color="#000000" />
        <Text className="text-sm ml-1 text-black">{percentage}</Text>
      </View>
    </View>
  );
};
