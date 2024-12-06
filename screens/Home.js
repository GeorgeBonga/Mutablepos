import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import HomeSummaryCard from "../components/HomeSummaryCard";
import HomeFeatureGrid from "../components/HomeFeatureGrid";
import { ThemeContext } from "../theme/ThemeContext";
import HomeActionButtons from "../components/HomeActionButtons";
import HomeTransaction from "../components/HomeTransaction";
const Home = () => {
  const theme = useContext(ThemeContext)
  const summaryData = {
    sales: 45000,
    purchased: 55000.234,
    income: 50000,
    expense: 1000,
  };

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor:theme.colors.background,
   

    },
    scrollView: {
      flex: 1,
      backgroundColor:theme.colors.background,
      padding:10,
      paddingTop:5
    },
    featuresTitle: {
      fontSize: 20, // Equivalent to `text-2xl`
      fontWeight: "bold", // Equivalent to `font-bold`
      color: theme.colors.color, // Equivalent to `text-gray-800`
      marginBottom: 16, // Equivalent to `mb-4`
    },
  });

  const features = [
    { id: "1", name: "Sales", icon: "cart-outline" },
    { id: "2", name: "Purchase", icon: "wallet-outline" },
    { id: "3", name: "Parties", icon: "people-outline" },
    { id: "4", name: "Products", icon: "cube-outline" },
    { id: "5", name: "Sales list", icon: "receipt-outline" },
    { id: "6", name: "Purchase list", icon: "clipboard-outline" },
    { id: "7", name: "Dues List", icon: "calendar-outline" },
    { id: "8", name: "Loss/Profit", icon: "analytics-outline" },
    { id: "9", name: "Income", icon: "cash-outline" },
    { id: "10", name: "Expense", icon: "card-outline" },
    { id: "11", name: "Stock", icon: "layers-outline" },
    { id: "12", name: "Reports", icon: "stats-chart-outline" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <HomeHeader />
     
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
      >
        <HomeSummaryCard data={summaryData} />
        <HomeActionButtons/>
        <HomeTransaction/>
        {/* <Text style={styles.featuresTitle}>Our Awesome Features</Text>
        <HomeFeatureGrid features={features} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};



export default Home;
