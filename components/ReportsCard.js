import React from "react";
import { View, Text, Alert, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const ReportsCard = ({ features }) => {
  const navigation = useNavigation()
  return (
    <View className="flex-wrap flex-row justify-between">
      {features.map((feature) => {
        const scale = useSharedValue(1);

        // Animation styles
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scale.value }],
        }));

        const handlePressIn = () => {
          scale.value = 0.95; // Shrink slightly when pressed
        };

        const handlePressOut = () => {
          scale.value = withSpring(1); // Return to normal size with a bounce
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
              style={[{ marginBottom: 24 }, animatedStyle]}
              className={`${feature.color} w-24 h-24 rounded-lg items-center justify-center shadow-md`}
            >
              <Ionicons name={feature.icon} size={30} color="black" />
              <Text className="mt-2 text-sm font-medium text-gray-700">
                {feature.name}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ReportsCard;
