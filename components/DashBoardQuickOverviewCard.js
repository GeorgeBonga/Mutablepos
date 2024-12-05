import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../theme/ThemeContext";
const DashBoardQuickOverviewCard = ({ data }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      backgroundColor: theme.colors.minorcolor,

      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 10,
      borderRadius: 8,
    },
    infoContainer: {
      alignItems: "center",
      marginLeft: 16,
    },
    label: {
      fontSize: 16,
      color: theme.colors.color,
    },
    amount: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.colors.color,
    },
  });

  return (
    <View style={styles.card}>
      <Ionicons name={data.icon} size={30} color={data.iconColor} />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={styles.amount}>KES {data.amount.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default DashBoardQuickOverviewCard;
