import React from "react";
import { View, Text, Alert, TouchableWithoutFeedback } from "react-native";
import { Feather, Ionicons } from "react-native-vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const HomeFeatureGrid = ({ features }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-wrap flex-row justify-between ">
      {features.map((feature) => {
        const scale = useSharedValue(1);

        // Animation styles
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scale.value }],
        }));

        const handlePressIn = () => {
          scale.value = 0.95; 
        };

        const handlePressOut = () => {
          scale.value = withSpring(1); 
        };

        const handlePress = () => {
          // Generate a random number between 0 and 2
          const randomChoice = Math.floor(Math.random() * 3);
        
          if (randomChoice === 0) {
            // Navigate to SalesReport
            navigation.navigate("SalesReport");
          } else if (randomChoice === 1) {
            // Navigate to ExpenseReport
            navigation.navigate("ExpenseReport");
          } else {
            // Show an alert
            Alert.alert(feature.name, "Component is coming soon");
          }
        };
        return (
          <TouchableWithoutFeedback
            key={feature.id}
            onPress={handlePress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View
              style={[animatedStyle]}
              className={`${feature.color} w-[48%] p-4 mb-4  rounded-2xl shadow-md`}
            >
              <View className="flex-row justify-between items-center">
                <Ionicons name={feature.icon} size={28} color="#4A5568" />
                <View className="flex-row justify-center items-center space-x-1">
                  <Text className="text-base font-semibold text-gray-800">
                    10
                  </Text>
                  <Feather color="#4A5568" name="chevron-right" size={18} />
                </View>
              </View>
              <Text className="mt-3 text-sm font-medium text-gray-600">
                {feature.name}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default HomeFeatureGrid;
