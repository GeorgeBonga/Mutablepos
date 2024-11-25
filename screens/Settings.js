import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Antdesign from "react-native-vector-icons/AntDesign";
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import {Switch,useTheme} from "react-native-paper"
export default function Settings() {
  const [isPrintingEnabled, setIsPrintingEnabled] = React.useState(false);

  
  const navigation = useNavigation();
  const paperTheme = useTheme();


  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-4 mt-4  border-gray-200">
      <HomeHeader />
       
      </View>

      {/* Menu Items */}
      <View className="mt-4">
    

        {/* Printing Option */}
        {/* <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-100 rounded-full justify-center items-center">
                <Text className="text-white ">🌙</Text> 
            </View>
            <Text className="ml-4 text-base text-gray-800">Dark Mode</Text>
          </View>
          <Switch value={paperTheme.dark}/>
        </View> */}

        {/* Subscription */}
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-100 rounded-full justify-center items-center">
              <Text className="text-orange-500">🎁</Text>
            </View>
            <Text className="ml-4 text-base text-gray-800">Subscription</Text>
          </View>
        </TouchableOpacity>

        {/* Dashboard */}
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-purple-100 rounded-full justify-center items-center">
              <Text className="text-purple-500">📊</Text>
            </View>
            <Text className="ml-4 text-base text-gray-800">Dashboard</Text>
          </View>
        </TouchableOpacity>

        {/* User Role */}
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-blue-100 rounded-full justify-center items-center">
              <Text className="text-blue-500">👥</Text>
            </View>
            <Text className="ml-4 text-base text-gray-800">User Role</Text>
          </View>
        </TouchableOpacity>

        {/* Currency */}
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-green-100 rounded-full justify-center items-center">
              <Text className="text-green-500">$</Text>
            </View>
            <Text className="ml-4 text-base text-gray-800">Currency</Text>
          </View>
          <Text className="text-gray-500 text-lg">KES</Text>
        </TouchableOpacity>

        {/* Barcode Generator */}
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-100 rounded-full justify-center items-center">
              <Text className="text-orange-500">🏷️</Text>
            </View>
            <Text className="ml-4 text-base text-gray-800">Barcode Generator</Text>
          </View>
        </TouchableOpacity>

        {/* Select Your Language */}
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-purple-100 rounded-full justify-center items-center">
              <Text className="text-purple-500">🌐</Text>
            </View>
            <Text className="ml-4 text-base text-gray-800">Select Your Language</Text>
          </View>
        </TouchableOpacity>

        {/* Log Out */}
        <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")} className="flex-row items-center justify-between px-4 py-3">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-orange-100 rounded-full justify-center items-center">
              <Antdesign name="logout"/>
            </View>
            <Text className="ml-4 text-base text-gray-800">Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text className="text-center text-gray-500 text-sm my-4">MutableTechPos V-1.0</Text>
    </SafeAreaView>
  );
}
