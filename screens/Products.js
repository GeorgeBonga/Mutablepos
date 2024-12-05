import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Using @expo/vector-icons
import ProductHeader from "../components/ProductHeader";
import { ProductSummaryBox } from "../components/ProductSummaryBox";
import { ProductList } from "../components/ProductList";

const productData = [
  { id: "1", name: "Scans", available: 267, sold: 149 },
  { id: "2", name: "Prints", available: 124, sold: 87 },
  {
    id: "3",
    name: "Folder",
    available: 88,
    sold: 27,
    lowStock: true,
  },
  {
    id: "4",
    name: "Online Transactions",
    available: 450,
    sold: 234,
  },
  { id: "5", name: "Available", available: 88, sold: 27 },
  { id: "6", name: "Scans", available: 267, sold: 149 },
  { id: "7", name: "Prints", available: 124, sold: 87 },
  { id: "8", name: "Scans", available: 267, sold: 149 },
  { id: "9", name: "Prints", available: 124, sold: 87 },
];

const Products = () => {
  return (
    <View style={styles.container}>
      <ProductHeader />
      <View style={styles.summaryContainer}>
        <ProductSummaryBox
          title="Total Products"
          value="12008"
          percentage="+8.00%"
          color="#D1FAE5" // Light green background
        />
        <ProductSummaryBox
          title="In-hand Products"
          value="2,350"
          percentage="+2.34%"
          color="#BFDBFE" // Light blue background
        />
      </View>
      <View style={styles.overviewHeader}>
        <Text style={styles.overviewText}>Product Overview</Text>
        <FontAwesome name="sliders" size={28} color="black" />
      </View>
      <ProductList products={productData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24, // Equivalent to `p-6`
    backgroundColor: "#FFFFFF", // White background
  },
  summaryContainer: {
    flexDirection: "row", // Equivalent to `flex-row`
    justifyContent: "space-between",
    marginBottom: 24, // Equivalent to `mb-6`
  },
  overviewHeader: {
    flexDirection: "row", // Equivalent to `flex-row`
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16, // Equivalent to `m-4`
  },
  overviewText: {
    fontSize: 18, // Equivalent to `text-xl`
    fontWeight: "600", // Equivalent to `font-semibold`
    color: "#1F2937", // Equivalent to `text-gray-800`
    marginBottom: 16, // Equivalent to `mb-4`
  },
});

export default Products;
