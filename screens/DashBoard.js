import React from "react";
import { View, Text, ScrollView } from "react-native";
import DashboardSummaryCard from "../components/DashboardSummaryCard";
import DashBoardQuickOverviewCard from "../components/DashBoardQuickOverviewCard";
import DashBoardLossProfitCard from "../components/DashBoardLossProfitCard";
import DashBoardData from "../utils/DashBoardData";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
const Dashboard = () => {
  const randomUser =
    DashBoardData[Math.floor(Math.random() * DashBoardData.length)];
  return (
    <SafeAreaView className="flex-1 mt-4 bg-white">
     
      
        {/* Header Section */}
        <Header title="Dashboard"/>
        <ScrollView className="flex-1 bg-gray-100 ">

        {/* Sales & Purchase Overview */}
        {/* <DashboardSummaryCard data={randomUser.salesOverview} /> */}
      <DashboardSummaryCard/>
       

        {/* Quick Overview */}
        <View className="px-4 py-4 ">
          <View className="flex-row flex-wrap justify-between">
            {randomUser.totalOverview.map((item) => (
              <DashBoardQuickOverviewCard key={item.id} data={item} />
            ))}
          </View>
        </View>
       
        {/* Quick Overview */}
        <View className="px-4 py-4">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            Quick Overview
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {randomUser.quickOverview.map((item) => (
              <View key={item.id} className="w-1/2 ">
                <DashBoardQuickOverviewCard data={item} />
              </View>
            ))}
          </View>
        </View>

        {/* Loss/Profit Section */}
        <View className="px-4 py-4">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            Loss/Profit
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {randomUser.lossProfit.map((item) => (
              <DashBoardLossProfitCard key={item.id} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
