import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import Button from "./Button";
const DashBoardCard = ({ title, value, color, iconName,mode }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 10,
        padding: 20,
        width: "40%",
        
      
    
      }}
   
    >
      <Ionicons name={iconName} size={24} color="#000000" style={{ marginBottom: 10 }} />
      <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold" }}>{value}</Text>
      <Text style={{ color: "#000000", fontSize: 14 }}>{title}</Text>
     
    </View>
  );
};

export default DashBoardCard;
