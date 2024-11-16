import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import UserData from '../utils/UserData';

const HomeHeader = () => {
    const randomUser = UserData[Math.floor(Math.random() * UserData.length)];
  return (
    <View className="flex-row items-center justify-between mb-4">
    <View className="flex-row items-center">
      <Image
        source={randomUser.image} // Placeholder image URL
        className="w-12 h-12 rounded-full mr-3"
      />
      <Text className="text-lg font-semibold text-gray-800">{randomUser.name}</Text>
    </View>
    <Ionicons name="notifications-outline" size={24} color="black" />
  </View>
  )
}

export default HomeHeader