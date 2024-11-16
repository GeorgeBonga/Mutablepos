import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReportsCard from '../components/ReportsCard';
import Header from '../components/Header';
import DashboardHeader from '../components/DashboardHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
const Reports = () => {
  const navigation = useNavigation();
  const features = [
    { id: "1", name: "Sales", icon: "cart-outline", color: "bg-blue-100" },
    {
      id: "2",
      name: "Purchase",
      icon: "wallet-outline",
      color: "bg-green-100",
    },
    { id: "3", name: "Parties", icon: "people-outline", color: "bg-red-100" },
    { id: "4", name: "Products", icon: "cube-outline", color: "bg-pink-100" },
    {
      id: "5",
      name: "Sales list",
      icon: "receipt-outline",
      color: "bg-indigo-100",
    },
    {
      id: "6",
      name: "Purchase list",
      icon: "clipboard-outline",
      color: "bg-purple-100",
    },
    {
      id: "7",
      name: "Dues List",
      icon: "calendar-outline",
      color: "bg-teal-100",
    },
    {
      id: "8",
      name: "Loss/Profit",
      icon: "analytics-outline",
      color: "bg-yellow-100",
    },
    { id: "9", name: "Income", icon: "cash-outline", color: "bg-cyan-100" },
    { id: "10", name: "Expense", icon: "card-outline", color: "bg-rose-100" },
    { id: "11", name: "Stock", icon: "layers-outline", color: "bg-orange-100" },
    {
      id: "12",
      name: "Reports",
      icon: "stats-chart-outline",
      color: "bg-gray-100",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-50 p-4">
        <DashboardHeader title="Reports"/>
    
      <ReportsCard features={features} />
    </View>
    </SafeAreaView>
  );
};

export default Reports;
