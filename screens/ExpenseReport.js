import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import Header from "../components/Header";
import { ThemeContext } from "../theme/ThemeContext";
const ExpenseReport = () => {
  const theme = useContext(ThemeContext)


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      
    },
    header: {
      
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
      backgroundColor: theme.colors.minorcolor,
      paddingVertical: 8,
      margin:8,
      borderRadius: 8,
      marginBottom: 16,
    },
    tableText: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.colors.color,
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
      color: theme.colors.color,
    },
    footer: {
      flexDirection: "row",
      backgroundColor: theme.colors.minorcolor, 
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom:10,
      margin:8,
      justifyContent: "space-between",
      borderRadius: 8,
    },
    footerText: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.color,
    },
    footerAmount: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.color,
    },
  });
  


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Header title="Expense" />
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


export default ExpenseReport;
