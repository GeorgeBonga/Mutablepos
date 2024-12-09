import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import Header from "../components/Header";
import { ThemeContext } from "../theme/ThemeContext";
const ExpenseReport = () => {
  const theme = useContext(ThemeContext)


  


  return (
    <View style={[styles.container,{ backgroundColor: theme.colors.background}]}>
   
      <View style={styles.header}>
        <Header title="Expense" />
      </View>


      <View style={[styles.tableHeader,{ backgroundColor: theme.colors.minorcolor}]}>
        <Text style={[styles.tableText, styles.column1,{ color: theme.colors.color,}]}>Expense For</Text>
        <Text style={[styles.tableText, styles.column2,{ color: theme.colors.color,}]}>Date</Text>
        <Text style={[styles.tableText, styles.column3,{ color: theme.colors.color,}]}>Amount</Text>
      </View>

  
      <View style={styles.messageContainer}>
        <Text style={[styles.noDataText,{  color: theme.colors.color}]}>No Data Available</Text>
      </View>


      <View style={[styles.footer,{   backgroundColor: theme.colors.minorcolor}]}>
        <Text style={[styles.footerText,{ color: theme.colors.color}]}>Total Expense</Text>
        <Text style={[styles.footerAmount,{color: theme.colors.color}]}>KES 0</Text>
      </View>
    </View>
  );
};


export default ExpenseReport;



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
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
   
    paddingVertical: 8,
    margin:8,
    borderRadius: 8,
    marginBottom: 16,
  },
  tableText: {
    fontSize: 14,
    fontWeight: "bold",
   
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
  
  },
  footer: {
    flexDirection: "row",
 
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
   
  },
  footerAmount: {
    fontSize: 16,
    fontWeight: "bold",
   
  },
});