import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ProductSummaryBox = ({ title, value, percentage, color }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={[styles.percentageBox, { backgroundColor: color }]}>
        <Ionicons name="arrow-up" size={14} color="#000000" />
        <Text style={styles.percentage}>{percentage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ebf8ff',
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 12,
    color: '#6b7280',
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    marginVertical: 8,
  },
  percentageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  percentage: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 4,
  },
});

export default ProductSummaryBox;
