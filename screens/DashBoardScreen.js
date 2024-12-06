import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import DashboardSummaryCard from "../components/DashboardSummaryCard";
import DashBoardQuickOverviewCard from "../components/DashBoardQuickOverviewCard";
import DashBoardLossProfitCard from "../components/DashBoardLossProfitCard";
import DashBoardData from "../utils/DashBoardData";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { ThemeContext } from "../theme/ThemeContext";

const DashBoardScreen = () => {
  const randomUser =
    DashBoardData[Math.floor(Math.random() * DashBoardData.length)];
    const theme = useContext(ThemeContext)


    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor:theme.colors.background,
      },
      scrollView: {
        flex: 1,
        backgroundColor:theme.colors.background,
      },
      sectionContainer: {
        paddingHorizontal: 6, 
        paddingVertical: 8, 
      },
      sectionTitle: {
        fontSize: 18, 
        fontWeight: "600", 
        color: theme.colors.color, 
        marginBottom: 8, 
      },
      flexRowWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
      halfWidth: {
        width: "46%", 
        margin:4,
       
      },
    });
    

  return (
    <SafeAreaView style={styles.safeArea}>
    <Header title="Dashboard" />
    <ScrollView style={styles.scrollView}>
      <DashboardSummaryCard />

      <View style={styles.sectionContainer}>
        <View style={styles.flexRowWrap}>
          {randomUser.totalOverview.map((item) => (
            <DashBoardQuickOverviewCard key={`total-${item.id}`} data={item} />
          ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Quick Overview</Text>
        <View style={[styles.flexRowWrap]}>
          {randomUser.quickOverview.map((item) => (
            <View key={`quick-${item.id}`} style={styles.halfWidth}>
              <DashBoardQuickOverviewCard data={item} />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Loss/Profit</Text>
        <View style={styles.flexRowWrap}>
          {randomUser.lossProfit.map((item) => (
            <DashBoardLossProfitCard key={`loss-profit-${item.id}`} data={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};


export default DashBoardScreen;