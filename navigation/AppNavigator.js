import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";

// Screens
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import DashBoadScreen from "../screens/DashBoadScreen";
import Settings from "../screens/Settings";
import SalesHistory from "../screens/SalesHistory";
import ScanProducts from "../screens/ScanProducts";
import Products from "../screens/Products";
import { theme } from "../core/theme";
import Home from "../screens/Home";
import Dashboard from "../screens/DashBoard";
import Reports from "../screens/Reports";
import OnBoardingScreen from "../screens/OnBoardingScreen";
// Stack and Tab Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: "absolute bottom-0 h-16 bg-white border-t-0",
        tabBarIcon: ({ focused }) => {
          let iconName;
          let textColor = focused ? "text-blue-500" : "text-gray-500";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Dashboard") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "Reports") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <View className="flex items-center">
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? "#1d4ed8" : "#6b7280"}
              />
              <Text className={`text-xs ${textColor}`}>{route.name}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="ScanProducts"
        component={ScanProducts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="absolute bottom-4 items-center  justify-center">
             
        
                <MaterialIcons name="qr-code-scanner" size={50} color={theme.colors.primary} />
             
            </View>
          ),
        }}
      />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainTabNavigator"
          screenOptions={{
            headerShown: false,
          }}
        >
         <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} /> 
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
       
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}