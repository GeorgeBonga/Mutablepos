import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import UserData from "../utils/UserData";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
const Settings = ({ item }) => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const randomUser = UserData[Math.floor(Math.random() * UserData.length)];

  // Dummy user data including an image URL

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-5">
      {/* User Profile Section */}
      <View className="flex-row items-center mb-6">
        <Image
          source={randomUser.image}
          className="w-16 h-16 rounded-full mr-4"
        />
        <View>
          <Text className="text-xl font-semibold text-gray-800">
            {randomUser.name}
          </Text>
          <Text className="text-sm text-gray-500">{randomUser.email}</Text>
        </View>
      </View>

      {/* Settings Title Section */}
      <View className="mb-6">
        <Text className="text-3xl font-bold text-gray-800">Settings</Text>
      </View>

      {/* General Settings */}
      <View className="bg-white p-4 rounded-lg shadow-md mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-4">
          General
        </Text>

        {/* Notifications Toggle */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-700">Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={() => setNotifications(!notifications)}
            trackColor={{ false: "#ccc", true: "#34D399" }}
            thumbColor={notifications ? "#10B981" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Account Settings */}
      <View className="bg-white p-4 rounded-lg shadow-md mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-4">
          Account
        </Text>

        {/* Profile Section */}
        <TouchableOpacity className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-700">Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Change Password Section */}
        <TouchableOpacity className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-700">Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Logout Button */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Logout
        </Button>
      </View>

      {/* App Settings */}
      <View className="bg-white p-4 rounded-lg shadow-md">
        <Text className="text-lg font-semibold text-gray-800 mb-4">Extra</Text>

        {/* Privacy Policy Section */}
        <TouchableOpacity className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-700">Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-700">Download Data</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
