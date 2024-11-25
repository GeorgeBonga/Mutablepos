import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import  Ionicons  from "react-native-vector-icons/Ionicons"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
const SalesReport = () => {
  const [fromDate, setFromDate] = useState("Nov 1, 2024");
  const [toDate, setToDate] = useState("Nov 20, 2024");



  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
   
      <View style={styles.header}>
      <Header title="Sales Report"/>
      </View>

      {/* Date Pickers */}
      <View style={styles.dateContainer}>
        {/* From Date */}
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>From Date</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateText}>{fromDate}</Text>
            <Ionicons name="calendar-outline" size={20} color="black" />
          </View>
        </View>

        {/* To Date */}
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>To Date</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateText}>{toDate}</Text>
            <Ionicons name="calendar-outline" size={20} color="black" />
          </View>
        </View>
      </View>

      {/* Centered Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Please Add A Sale</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  dateBox: {
    flex: 1,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
  dateLabel: {
    fontSize: 12,
    color: "gray",
  },
  dateContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  dateText: {
    fontSize: 16,
  },
  messageContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default SalesReport;
