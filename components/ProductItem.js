import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ProductItem = ({ product }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={[styles.container, { backgroundColor: product.color }]}>
      <View style={styles.content}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.available}>{product.available}</Text>
          <Text style={styles.sold}>{product.sold}</Text>
        </View>
        <Text style={styles.dateText}>Date Added: {currentDate}</Text>
      </View>

      {product.lowStock && (
        <Text style={styles.lowStockText}>Low Stock</Text>
      )}

      <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  statusContainer: {
    flexDirection: 'row',
  },
  available: {
    fontSize: 14,
    color: '#10B981',
    marginRight: 8,
  },
  sold: {
    fontSize: 14,
    color: '#EF4444',
  },
  dateText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  lowStockText: {
    backgroundColor: '#FEE2E2',
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    marginRight: 8,
  },
});

export default ProductItem;
