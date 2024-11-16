import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

function DashboardHeader  ({ dateOptions,title, selectedDate, setSelectedDate, open, setOpen }) { 
  const navigation = useNavigation();
  return(
  <View className="flex-row items-center px-4 py-4  ">
    <TouchableOpacity onPress={()=>navigation.goBack()} >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Text className="flex-row justify-center items-center ml-10 text-xl font-bold">{title}</Text>
    
  </View>
  )
};



export default DashboardHeader