import React, { useState } from "react";
import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

const { width } = Dimensions.get("window");

const DashboardSummaryCard = () => {
  const data = [
    { day: "Monday", sales: 10000, purchase: 50000 },
    { day: "Tuesday", sales: 50000, purchase: 30000 },
    { day: "Wednesday", sales: 200000, purchase: 15000 },
    { day: "Thursday", sales: 30000, purchase: 20000 },
    { day: "Friday", sales: 25000, purchase: 15000 },
    { day: "Saturday", sales: 200000, purchase: 10000 },
    { day: "Sunday", sales: 15000, purchase: 5000 },
  ];

  const salesData = data.map((item) => item.sales);
  const purchaseData = data.map((item) => item.purchase);
  const labels = data.map((item) => item.day);

  const [selectedDay, setSelectedDay] = useState(data[0]); // Default to Monday

  const handleBarPress = (index) => {
    const selectedItem = data[index];
    setSelectedDay(selectedItem);
  };  // Find the max value in the sales and purchase data and round it to the nearest thousand or million
  const maxValue = Math.max(...salesData, ...purchaseData);

  const roundedMaxValue = maxValue >= 1000000 
    ? Math.ceil(maxValue / 1000000) * 1000000 // Round up to the nearest million
    : Math.ceil(maxValue / 1000) * 1000; // Round up to the nearest thousand


  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        margin: 8,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#1F2937",
          marginBottom: 8,
        }}
      >
       Weekly Overview
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1F2937" }}>
        {selectedDay.day}
      </Text>
      {/* Legend with Embedded Data */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#34D399",
              borderRadius: 5,
              marginRight: 4,
            }}
          />
          <Text style={{ color: "#1F2937" }}>Sales :${selectedDay.sales}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#EF4444",
              borderRadius: 5,
              marginRight: 4,
            }}
          />
          <Text style={{ color: "#1F2937" }} >
            Purchase : ${selectedDay.purchase}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", height: 220 }}>
         {/* Y-Axis */}
         <YAxis
          data={[0, roundedMaxValue]} // Use the rounded max value
          contentInset={{ top: 8, bottom: 15 }}
          svg={{ fontSize: 12, fill: "#4B5563" }}
          numberOfTicks={5}
          formatLabel={(value) => {
            // Check if the value is greater than or equal to a million
            if (value >= 1000000) {
              return `${(value / 1000000).toFixed(0)}M`; // Format as "1.0M"
            }
            // Check if the value is greater than or equal to a thousand
            if (value >= 1000) {
              return `${(value / 1000).toFixed(0)}k`; // Format as "1.0k"
            }
            // For values less than 1000, display the value as is
            return `${value}`;
          }}
        />

        {/* Bar Chart */}
        <View style={{ flex: 1, marginLeft: 8 }}>
          <BarChart
            style={{ flex: 1 }}
            data={[
              {
                data: salesData,
                svg: { fill: "#34D399" },
              },
              {
                data: purchaseData,
                svg: { fill: "#EF4444" },
              },
            ]}
            spacingInner={0.4}
            contentInset={{ top: 10, bottom: 10 }}
            yMin={0}
            yAccessor={({ item }) => item}
            xScale={scale.scaleBand}
          >
            <Grid direction={Grid.Direction.HORIZONTAL} />
          </BarChart>

          {/* Overlay with Touchable for Bar Click */}
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              flexDirection: "row",
            }}
          >
            {data.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleBarPress(index)}
              >
                <View style={{ flex: 1 }} />
              </TouchableWithoutFeedback>
            ))}
          </View>

          {/* X-axis Labels below Bar Chart */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: -10, // Space between bars and labels
            }}
          >
            {labels.map((label, index) => (
              <Text
                key={index}
                style={{
                  textAlign: "center",
                  color: "#4B5563",
                  width: (width / labels.length) * 0.5, // Make it responsive
                  fontSize: 10, // Adjust font size as needed
                }}
              >
                {label.substring(0, 3)} {/* Display only the first 3 letters */}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardSummaryCard;
