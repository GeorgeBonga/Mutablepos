import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const DashBoardLossProfitCard = ({ data }) => (
  <View className="bg-white p-4 rounded-lg shadow-md m-2 flex-1 items-center">
    <Ionicons name={data.icon} size={30} color={data.iconColor} />
    <Text className="text-sm text-gray-700">{data.label}</Text>
    <Text className="text-lg font-semibold text-gray-800">${data.amount.toLocaleString()}</Text>
  </View>
);


export default DashBoardLossProfitCard;