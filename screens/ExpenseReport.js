import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import Header from "../components/Header";
const ExpenseReport = () => {


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Header title="Expense" Report/>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.tableText, styles.column1]}>Expense For</Text>
        <Text style={[styles.tableText, styles.column2]}>Date</Text>
        <Text style={[styles.tableText, styles.column3]}>Amount</Text>
      </View>

      {/* No Data Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.noDataText}>No Data Available</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Total Expense</Text>
        <Text style={styles.footerAmount}>KES 0</Text>
      </View>
    </View>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f8f5", // Light green background
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  tableText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  column1: {
    flex: 2,
    textAlign: "left",
    paddingLeft: 8,
  },
  column2: {
    flex: 1,
    textAlign: "center",
  },
  column3: {
    flex: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#f0f8f5", // Light green background
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    borderRadius: 8,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default ExpenseReport;
