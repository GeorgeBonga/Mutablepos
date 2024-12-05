import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// Screens
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import Settings from "../screens/Settings";
import SalesHistory from "../screens/SalesHistory";
import SalesReport from "../screens/SalesReport ";
import ScanProducts from "../screens/ScanProducts";
import ExpenseReport from "../screens/ExpenseReport";
import Products from "../screens/Products";
import Home from "../screens/Home";
import DashBoardScreen from "../screens/DashBoardScreen";
import Reports from "../screens/Reports";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { ThemeContext } from "../theme/ThemeContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function MainTabNavigator() {
  const  theme  = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          {elevation:0, backgroundColor: theme.colors.secondary },
        ],
        tabBarIcon: ({ focused }) => {
          let iconName;
          const iconColor = focused ? theme.colors.color : theme.colors.color;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "DashBoardScreen") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "Reports") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <View style={styles.iconContainer}>
              <Ionicons name={iconName} size={24} color={iconColor} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home"   component={Home} />
      <Tab.Screen name="DashBoardScreen"   component={DashBoardScreen} />
      <Tab.Screen
        name="ScanProducts"
        component={ScanProducts}
        options={{
          tabBarIcon: ({ focused }) => {
        
            return (
              <View
                style={{
                  ...styles.scanProductsIcon,
                  backgroundColor: theme.colors.secondary

                   
                }}
              >
                <MaterialCommunityIcons
                  name="barcode-scan"
                  size={36}
                  color={theme.colors.color}

                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Reports"   component={Reports} />
      <Tab.Screen name="Settings"    component={Settings} />
    </Tab.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  const [darkmode, setDarkmode] = useState(false);
  const  theme  = useContext(ThemeContext);

  useEffect(() => {
    const listener = EventRegister.addEventListener("changetheme", (data) => {
      setDarkmode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, []);

 

  return (
    <ThemeContext.Provider value={darkmode === true ? theme.dark : theme.light}>
      <NavigationContainer value={darkmode === true ? theme.dark : theme.light}>
        <Stack.Navigator
          initialRouteName="OnBoardingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ExpenseReport" component={ExpenseReport} />
          <Stack.Screen name="SalesReport" component={SalesReport} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 40,
    borderTopWidth: 0,
  },
  iconContainer: {
    alignItems: "center",
  },
  scanProductsIcon: {
    padding: 10,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    elevation:1,
    bottom: 10,
  },
});
