import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import  Ionicons  from "react-native-vector-icons/Ionicons"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { ThemeContext } from "../theme/ThemeContext";


const SalesReport  = () => {
  const [fromDate, setFromDate] = useState("Nov 1, 2024");
  const [toDate, setToDate] = useState("Nov 20, 2024");
  const theme =useContext(ThemeContext)



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
     
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
      color: theme.colors.color,
    },
    dateContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },
    dateText: {
      fontSize: 16,
      color: theme.colors.color,
    },
    messageContainer: {
      alignItems: "center",
      marginTop: 16,
    },
    message: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.colors.color,
    },
  });
  


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
  
      <Header title="Sales Report"/>
      

      {/* Date Pickers */}
      <View style={styles.dateContainer}>
        {/* From Date */}
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>From Date</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateText}>{fromDate}</Text>
            <Ionicons name="calendar-outline" size={20} color={theme.colors.color} />
          </View>
        </View>

        {/* To Date */}
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>To Date</Text>
          <View style={styles.dateContent}>
            <Text style={styles.dateText}>{toDate}</Text>
            <Ionicons name="calendar-outline" size={20} color={theme.colors.color} />
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



export default SalesReport 


