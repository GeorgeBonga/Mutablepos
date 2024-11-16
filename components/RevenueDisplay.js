import React from "react";
import { View, Text } from "react-native";

const RevenueDisplay = ({ revenue, percentageChange }) => {
  return (
    <View style={{ alignItems: "start", marginVertical: 5, marginLeft: 5 }}>
      <Text style={{ fontSize: 24 }}>Revenue</Text> 
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>${revenue}</Text>
        <View style={{ backgroundColor: "#90EE90", margin: 10, padding: 5, borderRadius: 10 }}>
          <Text style={{ color: "green", fontWeight: "bold" }}>{percentageChange}</Text>
        </View>
      </View>
    </View>
  );
};


export default RevenueDisplay;
