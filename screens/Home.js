import React from "react";
import { View, Text, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import HomeSummaryCard from "../components/HomeSummaryCard";
import HomePlanCard from "../components/HomePlanCard";
import HomeFeatureGrid from "../components/HomeFeatureGrid";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const summaryData = {
    sales: 45000,
    purchased: 55000.234,
    income: 50000,
    expense: 1000,
  };

  const features = [
    { id: "1", name: "Sales", icon: "cart-outline",   color: "bg-gray-100", },
    {
      id: "2",
      name: "Purchase",
      icon: "wallet-outline",
      color: "bg-gray-100",
    },
    { id: "3", name: "Parties", icon: "people-outline", color: "bg-gray-100" },
    { id: "4", name: "Products", icon: "cube-outline",   color: "bg-gray-100", },
    {
      id: "5",
      name: "Sales list",
      icon: "receipt-outline",
      color: "bg-gray-100",
    },
    {
      id: "6",
      name: "Purchase list",
      icon: "clipboard-outline",
      color: "bg-gray-100",
    },
    {
      id: "7",
      name: "Dues List",
      icon: "calendar-outline",
      color: "bg-gray-100",
    },
    {
      id: "8",
      name: "Loss/Profit",
      icon: "analytics-outline",
      color: "bg-gray-100",
    },
    { id: "9", name: "Income", icon: "cash-outline", color: "bg-gray-100" },
    { id: "10", name: "Expense", icon: "card-outline",   color: "bg-gray-100",},
    { id: "11", name: "Stock", icon: "layers-outline",   color: "bg-gray-100", },
    {
      id: "12",
      name: "Reports",
      icon: "stats-chart-outline",
      color: "bg-gray-100",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <HomeHeader />
      <ScrollView className="flex-1 bg-white mt-2" 
       showsVerticalScrollIndicator={false}
    >
      <HomeSummaryCard data={summaryData} />
      <Text className="text-2xl font-bold text-gray-800 mb-4">
          Our Awesome Features
        </Text>
      
        <HomeFeatureGrid features={features} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
