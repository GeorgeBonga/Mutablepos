import React from 'react';
import { View, Text,Alert, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';

const HomePlanCard = () => {
  return (
    <TouchableOpacity  onPress={() => {Alert.alert("Comming Soon")}} className="bg-gray-100 p-4 rounded-lg flex-row items-center mb-4 shadow-sm">
      <MaterialIcons name="error-outline" size={20} color="black" />
      <Text className="ml-3 text-gray-800">Free Plan (Left 7 days)</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="gray" className="ml-auto" />
    </TouchableOpacity>
  );
};


export default HomePlanCard