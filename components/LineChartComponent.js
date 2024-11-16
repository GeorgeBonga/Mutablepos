// import React, { useState } from "react";
// import { View, Text, StyleSheet, Animated, Easing } from "react-native";
// import { LineChart } from "react-native-chart-kit";
// import { Dimensions } from "react-native";

// const screenWidth = Dimensions.get("window").width;

// const LineChartComponent = () => {
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     value: 0,
//     label: "",
//     x: 0,
//     y: 0,
//   });

//   const tooltipOpacity = React.useRef(new Animated.Value(0)).current;
//   const tooltipScale = React.useRef(new Animated.Value(0.8)).current;

//   const data = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         data: [2500, 2800, 2300, 2900, 2673, 3500, 2000],
//         color: () => "#000000",
//       },
//     ],
//   };

//   const showTooltip = (dataPoint) => {
//     const { index, value, x, y } = dataPoint;

//     setTooltip({
//       visible: true,
//       value: value,
//       label: data.labels[index], // Set the label based on the clicked data point
//       x: x,
//       y: y,
//     });

//     // Reset animation values before starting
//     tooltipOpacity.setValue(0);
//     tooltipScale.setValue(0.8);

//     // Animate the tooltip visibility and scale
//     Animated.parallel([
//       Animated.timing(tooltipOpacity, {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: true,
//         easing: Easing.ease,
//       }),
//       Animated.spring(tooltipScale, {
//         toValue: 1,
//         friction: 4,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   return (
//     <View style={{ alignItems: "center", justifyContent: "center", margin: 10 }}>
//       <LineChart
//         data={data}
//         width={screenWidth - 5}
//         height={420}
//         yAxisLabel="$"
//         chartConfig={{
//           backgroundColor: "#fff",
//           backgroundGradientFrom: "#fff",
//           backgroundGradientTo: "#fff",
//           decimalPlaces: 0,
//           color: (opacity = 0) => `rgba(225, 225, 225, ${opacity})`,
//           labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 10,
//           },
//           propsForDots: {
//             r: "5",
//           },
//           propsForBackgroundLines: {
//             strokeWidth: 0,
//           },
//         }}
//         bezier
//         style={{ borderRadius: 10 }}
//         onDataPointClick={(data) => showTooltip(data)}
//       />

//       {tooltip.visible && (
//         <Animated.View
//           style={[
//             styles.tooltip,
//             {
//               top: tooltip.y - 30, // Adjust for the tooltip's position
//               left: tooltip.x - 25, // Adjust horizontally
//               opacity: tooltipOpacity,
//               transform: [{ scale: tooltipScale }],
//             },
//           ]}
//         >
//           <Text style={styles.tooltipText}>
//             {tooltip.label}: ${tooltip.value}
//           </Text>
//         </Animated.View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tooltip: {
//     position: "absolute",
//     backgroundColor: "#000000",
//     padding: 6,
//     borderRadius: 4,
//   },
//   tooltipText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

// export default LineChartComponent;


import { View, Text } from 'react-native'
import React from 'react'

const LineChartComponent = () => {
  return (
    <View>
      <Text>LineChartComponent</Text>
    </View>
  )
}

export default LineChartComponent