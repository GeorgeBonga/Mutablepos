import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Background from "./Background";

const TimeRangeSelector = ({ selectedRange, onRangeChange }) => {
  const ranges = ["1D", "1W", "1M", "3M", "6M", "1Y"];

  return (
    
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 5 }}>
      {ranges.map((range) => (
        <TouchableOpacity key={range} onPress={() => onRangeChange(range)} style={{ marginHorizontal: 5 }}>
          <Text
            style={{
              color: range === selectedRange ? "#4A90E2" : "#000",
              fontWeight: range === selectedRange ? "bold" : "normal",
              paddingHorizontal: 8,
              paddingVertical: 4,
              backgroundColor: range === selectedRange ? "#e0f7ff" : "#fff",
              borderRadius: 5,
            }}
          >
            {range}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    
  );
};

export default TimeRangeSelector;
