import React, { useState } from "react";
import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";
import { CartesianChart, BarGroup } from "victory-native";

const { width } = Dimensions.get("window");

const DATA = [
  { x: "Monday", y: 12000, z: 8000 },
  { x: "Tuesday", y: 18000, z: 12000 },
  { x: "Wednesday", y: 25000, z: 16000 },
  { x: "Thursday", y: 30000, z: 20000 },
  { x: "Friday", y: 50000, z: 35000 },
  { x: "Saturday", y: 65000, z: 50000 },
  { x: "Sunday", y: 55000, z: 40000 },
];

const labels = DATA.map((item) => item.x);

const DashboardSummaryCard = () => {
  const [selectedDay, setSelectedDay] = useState(DATA[0]); // Default to Monday

  const handleBarPress = (index) => {
    const selectedItem = DATA[index];
    setSelectedDay(selectedItem);
  };

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
        {selectedDay.x}
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
          <Text style={{ color: "#1F2937" }}>Sales: KES {selectedDay.y}</Text>
        </View>

        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#EF4444",
            borderRadius: 5,
            marginRight: 4,
          }}
        />
        <Text style={{ color: "#1F2937" }}>Purchase: KES {selectedDay.z}</Text>
      </View>

      <View style={{ height: 200 }}>
        {/* Bar Chart */}
        <CartesianChart
          data={DATA}
          xKey="x"
          yKeys={["y", "z"]}
          domainPadding={{ left: 35, right: 20 }}
        >
          {({ points, chartBounds }) => (
            <BarGroup
              chartBounds={chartBounds}
              betweenGroupPadding={0.4}
              withinGroupPadding={0.1}
             
              roundedCorners={{
                topLeft: 10,
                topRight: 10,
              }}
            >
              <BarGroup.Bar points={points.y} color="#34D399" />
              <BarGroup.Bar points={points.z} color="#EF4444" />
            </BarGroup>
          )}
        </CartesianChart>

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
          {DATA.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handleBarPress(index)}
            >
              <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>

      {/* X-axis Labels */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
         
        }}
      >
        {labels.map((label, index) => (
          <Text
            key={index}
            style={{
              textAlign: "center",
              color: "#4B5563",
              width: `${100 / labels.length}%`, // Make the width evenly distributed
              fontSize: 12, // Adjust font size as needed
            }}
          >
            {label.substring(0, 3)} {/* Display only the first 3 letters */}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default DashboardSummaryCard;
