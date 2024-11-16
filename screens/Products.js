import React from "react";
import { View, Text } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import ProductHeader from "../components/ProductHeader";
import { ProductSummaryBox } from "../components/ProductSummaryBox";
import { ProductList } from "../components/ProductList";

const productData = [
  { id: "1", name: "Scans", available: 267, sold: 149, color: "bg-white" },
  { id: "2", name: "Prints", available: 124, sold: 87, color: "bg-white" },
  {
    id: "3",
    name: "Folder",
    available: 88,
    sold: 27,
    color: "bg-red-100",
    lowStock: true,
  },
  {
    id: "4",
    name: "Online Transactions",
    available: 450,
    sold: 234,
    color: "bg-white",
  },
  {
    id: "5",
    name: "Available",
    available: 88,
    sold: 27,
    color: "bg-green-100",
  },
  { id: "6", name: "Scans", available: 267, sold: 149, color: "bg-white" },
  { id: "7", name: "Prints", available: 124, sold: 87, color: "bg-white" },
  { id: "8", name: "Scans", available: 267, sold: 149, color: "bg-white" },
  { id: "9", name: "Prints", available: 124, sold: 87, color: "bg-white" },
];

const Products = () => {
  return (
    <View className="flex-1 p-6 bg-white">
      <ProductHeader />
      <View className="flex-row justify-between mb-6">
        <ProductSummaryBox
          title="Total Products"
          value="12008"
          percentage="+8.00%"
          color="bg-green-100"
        />
        <ProductSummaryBox
          title="In-hand Products"
          value="2,350"
          percentage="+2.34%"
          color="bg-blue-100"
        />
      </View>
      <View className="flex-row  items-center justify-between m-4">
        <Text className="text-xl font-semibold mb-4 text-gray-800">
          Product Overview
        </Text>
        <FontAwesome6 name="sliders" size={28} color="black" />
      </View>

      <ProductList products={productData} />
    </View>
  );
};

export default Products;
