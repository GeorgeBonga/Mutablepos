import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Switch,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Antdesign from "react-native-vector-icons/AntDesign";
import { EventRegister } from "react-native-event-listeners";
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../theme/ThemeContext";

export default function Settings() {
  const navigation = useNavigation();

  const theme = useContext(ThemeContext);
  const [darkmode, setDarkmode] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      borderBottomWidth: 1,
      borderColor: theme.colors.background,
    },
    menuItems: {
      marginTop: 16,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    borderBottom: {
      borderBottomWidth: 1,
      borderColor: "#E5E7EB",
    },
    menuItemContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconWrapper: {
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    darkModeIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    darkModeIconText: {
      color: theme.colors.color,
    },
    subscriptionIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    subscriptionIconText: {
      color: theme.colors.color,
    },
    dashboardIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    dashboardIconText: {
      color: theme.colors.color,
    },
    userRoleIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    userRoleIconText: {
      color: theme.colors.color,
    },
    currencyIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    currencyIconText: {
      color: theme.colors.color,
    },
    barcodeIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    barcodeIconText: {
      color: theme.colors.color,
    },
    languageIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    languageIconText: {
      color: theme.colors.color,
    },
    logoutIcon: {
      backgroundColor: theme.colors.minorcolor,
    },
    menuItemText: {
      marginLeft: 16,
      fontSize: 16,
      color: theme.colors.color,
    },
    menuItemSubText: {
      fontSize: 16,
      color: theme.colors.color,
    },
    footerText: {
      textAlign: "center",
      color: theme.colors.color,
      fontSize: 12,
      marginVertical: 16,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HomeHeader />
      </View>
      <View style={styles.menuItems}>
        <View style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.darkModeIcon]}>
              <Text style={styles.darkModeIconText}>🌙</Text>
            </View>
            <Text style={styles.menuItemText}>Dark Mode</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
  
            <Switch
              trackColor={{ false: "#B0BEC5", true: "#3e3e3e" }} 
              thumbColor={darkmode ? "#4B77B6" : "#E0E0E0"} 
              ios_backgroundColor="#3e3e3e" 
              onValueChange={(value) => {
                setDarkmode(value);
                EventRegister.emit("changetheme", value); 
              }}
              value={darkmode}
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.subscriptionIcon]}>
              <Text style={styles.subscriptionIconText}>🎁</Text>
            </View>
            <Text style={styles.menuItemText}>Subscription</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.dashboardIcon]}>
              <Text style={styles.dashboardIconText}>📊</Text>
            </View>
            <Text style={styles.menuItemText}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.userRoleIcon]}>
              <Text style={styles.userRoleIconText}>👥</Text>
            </View>
            <Text style={styles.menuItemText}>User Role</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.currencyIcon]}>
              <Text style={styles.currencyIconText}>$</Text>
            </View>
            <Text style={styles.menuItemText}>Currency</Text>
          </View>
          <Text style={styles.menuItemSubText}>KES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.barcodeIcon]}>
              <Text style={styles.barcodeIconText}>🏷️</Text>
            </View>
            <Text style={styles.menuItemText}>Barcode Generator</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.languageIcon]}>
              <Text style={styles.languageIconText}>🌐</Text>
            </View>
            <Text style={styles.menuItemText}>Select Your Language</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.menuItem}
        >
          <View style={styles.menuItemContent}>
            <View style={[styles.iconWrapper, styles.logoutIcon]}>
              <Antdesign name="logout" color={theme.colors.color} size={16} />
            </View>
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>MutableTechPos V-1.0</Text>
    </SafeAreaView>
  );
}
