import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ProductHeader = () => {
  const navigation =useNavigation();
  return (
    <View className="flex-row justify-between items-center mb-6">
      <Text className="text-3xl font-bold text-gray-800">Products</Text>
      <View className="flex-row items-center justify-between  p-4">
        <View className="mr-4">
          <TouchableOpacity onPress={()=>navigation.navigate("ScanProducts")}>
          <Ionicons name="scan" size={28} color="black" />
          </TouchableOpacity>
          
        </View>
        <View className="ml-4">
          <Ionicons name="search-outline" size={28} color="black" />
        </View>
      </View>
    </View>
  );
};

export default ProductHeader;
