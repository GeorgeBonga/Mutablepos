import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const DashBoardQuickOverviewCard = ({ data }) => (
  <View className="flex-row bg-white p-4 rounded-lg m-2 flex-1 items-center">
    <Ionicons name={data.icon} size={30} color={data.iconColor} />
    <View className="flex-column bg-white rounded-lg items-center ml-4">
      <Text className="text-sm text-gray-700">{data.label}</Text>
      <Text className="text-lg font-semibold text-gray-800">KES {data.amount.toLocaleString()}</Text>
    </View>
  </View>
);

export default DashBoardQuickOverviewCard;
