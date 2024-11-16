import React from 'react';
import { View, Text,Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const ReportsCard = ({ features }) => {
  return (
    <View className="flex-wrap flex-row justify-between">
      {features.map((feature) => (
        <TouchableOpacity
        onPress={() => {Alert.alert("Comming Soon")}}
          key={feature.id}
          className={`${feature.color} w-24 h-24 rounded-lg items-center justify-center mb-6 shadow-md`}
        >
          <Ionicons name={feature.icon} size={30} color="black" />
          <Text className="mt-2 text-sm font-medium text-gray-700">{feature.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default ReportsCard
