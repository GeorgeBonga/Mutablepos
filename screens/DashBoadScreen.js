import React, { useState } from "react";
import { View, Text, StatusBar,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashBoardCard from "../components/DashBoardCard";
import TimeRangeSelector from "../components/TimeRangeSelector";
import RevenueDisplay from "../components/RevenueDisplay";
import LineChartComponent from "../components/LineChartComponent";
import UserData from "../utils/UserData";
import { theme } from "../core/theme";
const DashBoadScreen = () => {
  const randomUser = UserData[Math.floor(Math.random() * UserData.length)];
  const [selectedRange, setSelectedRange] = useState("1M");
  const [revenueData, setRevenueData] = useState({
    revenue: 12000,
    sales: 3000,
    percentageChange: "+5%",
  });

  const revenueRanges = {
    "1D": { revenue: 1000,sales:3000, percentageChange: "+2%" },
    "1W": { revenue: 5000,sales:500,  percentageChange: "+3%" },
    "1M": { revenue: 12000,sales:200,  percentageChange: "+5%" },
    "3M": { revenue: 35000,sales:13000,  percentageChange: "+7%" },
    "6M": { revenue: 65000,sales:30,  percentageChange: "+10%" },
    "1Y": { revenue: 130000,sales:23000,  percentageChange: "+15%" },
  };

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    setRevenueData(revenueRanges[range]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="justify-center bg-white p-5 mt-5">
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View className="flex-row items-center px-4">
      {/* Display user image inside a rounded view */}
      <View className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
        <Image
          source={ randomUser.image } // The source of the image
          style={{ width: 48, height: 48 }} // Ensure the image fits in the circle
        />
      </View>

      {/* Display the logged-in user's name */}
      <Text className="text-black font-bold text-xl">{randomUser.name}</Text>
    </View>

        <View className="flex-row items-center justify-between my-4 ">
          <DashBoardCard
            title="Revenue"
            value={`$${revenueData.revenue}`}
            color={theme.colors.revenueCard}
            iconName="pie-chart"
          />
          <DashBoardCard
            title="Sales"
            value={`$${revenueData.sales}`}
            color={theme.colors.salesCard}
            iconName="stats-chart"
          />
        </View>

        <TimeRangeSelector
          selectedRange={selectedRange}
          onRangeChange={handleRangeChange}
        />
        <RevenueDisplay
          revenue={revenueData.revenue}
          percentageChange={revenueData.percentageChange}
        />
        <LineChartComponent />
      </View>
    </SafeAreaView>
  );
};

export default DashBoadScreen;
