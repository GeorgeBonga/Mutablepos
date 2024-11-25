import React from "react";
import { View, Text,Alert, TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "react-native-vector-icons";
import { theme } from "../core/theme";
const HomeSummaryCard = ({ data }) => {
  return (
    <View className="bg-[#FF9C1D] p-4 rounded-lg shadow-md mb-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold text-black">Today's Summary</Text>
        <TouchableOpacity onPress={()=>{Alert.alert("Coming Soon")}} className="flex-row justify-center items-center space-x-1 ">
          <Text className="text-sm font-semibold text-black">See All</Text>
          <Feather color="black" name="chevron-right" size={16} />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between m-4">
        <View className="flex-column">
          <View>
            <Text className="text-black">Sales</Text>

            <Text className="text-lg font-semibold text-black">
            KES <View></View>
              {parseFloat(data.sales).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
          <View>
            <Text className="text-black">Income</Text>

            <Text className="text-lg font-semibold text-black">
            KES <View></View>
              {parseFloat(data.income).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        </View>
        <View className="flex-column ">
          <View>
            <Text className="text-black">Purchased</Text>

            <Text className="text-lg font-semibold text-black">
            KES <View></View>
              {parseFloat(data.purchased).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>

          <View>
            <Text className="text-black">Expense</Text>

            <Text className="text-lg font-semibold text-black">
              KES <View></View>
              {parseFloat(data.expense).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeSummaryCard;
