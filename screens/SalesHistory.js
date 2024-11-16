import React from "react";
import { View, Text } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import SalesProductList from "../components/SalesProductList";
import { ProductSummaryBox } from "../components/ProductSummaryBox";
const productData = [
  {
    id: "1",
    name: "Bananas",
    available: 234,
    sold: 50,
    price: 1.5,
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1603052875925-e3b035b5c17f"
  },
  {
    id: "2",
    name: "Prints",
    sold: 20,
    price: 15, // Price per item in dollars
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1592829467830-b86fa740287d" // Prints Image
  },
  {
    id: "3",
    name: "Nduma",
    available: 34,
    sold: 10,
    price: 5,
    color: "bg-red-100",
    lowStock: true,
    imageUrl: "https://images.unsplash.com/photo-1560813424-b8cce63256c4"
  },
  {
    id: "4",
    name: "Nails",
    available: 234,
    sold: 100,
    price: 3,
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1600744941565-b9b083299ca1" // Nails Image
  },
  {
    id: "5",
    name: "Meat",
    available: 24,
    sold: 5,
    price: 8, // Price per item in dollars
    color: "bg-green-100",
    imageUrl: "https://images.unsplash.com/photo-1603708546177-8ad8ed2c9a4e" // Meat Image
  },
  {
    id: "6",
    name: "Guavas",
    available: 234,
    sold: 30,
    price: 2, // Price per item in dollars
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1575358371530-ff4fa0e515eb" // Guava Image
  },
  {
    id: "7",
    name: "Pineapples",
    available: 234,
    sold: 80,
    price: 1.8, // Price per item in dollars
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1572347245185-30cdb6b41e68" // Pineapple Image
  },
  {
    id: "8",
    name: "Bread",
    available: 23,
    sold: 10,
    price: 2.5, // Price per item in dollars
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1612144490143-d9f0e8bbd824" // Bread Image
  },
  {
    id: "9",
    name: "Mango",
    available: 4,
    sold: 2,
    price: 3.2, // Price per item in dollars
    color: "bg-white",
    imageUrl: "https://images.unsplash.com/photo-1568151849-f5666e4db320" // Mango Image
  }
];



const SalesHistory = () => {
  return (
    <View className="flex-1 p-6 bg-white">
      <View className="mb-6">
        <Text className="text-3xl font-bold text-gray-800">Sales</Text>
      </View>

      <View className="flex-row justify-between mb-6">
        <ProductSummaryBox
          title="Products Sold"
          value="12008"
          percentage="+8.00%"
          color="bg-green-100"
        />
        <ProductSummaryBox
          title="Amount"
          value="KES2,350"
          percentage="+2.34%"
          color="bg-blue-100"
        />
      </View>
      <View className="flex-row  items-center justify-between m-4">
        <Text className="text-3xl font-semibold mb-4 text-gray-800">Sales</Text>
        <FontAwesome6 name="sliders" size={24} color="black" />
      </View>

      <SalesProductList products={productData} />
    </View>
  );
};

export default SalesHistory;
