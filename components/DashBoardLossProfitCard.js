import React, { useContext } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../theme/ThemeContext';

const DashBoardLossProfitCard = ({ data }) =>{ 
  const theme =useContext(ThemeContext)

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.minorcolor,
      padding: 16,
      borderRadius: 8,
      shadowOpacity: 0.1,
      shadowRadius: 8,
      margin: 8,
      flex: 1,
      alignItems: 'center',
    },
    label: {
      fontSize: 14,
      color: theme.colors.color,
    },
    amount: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.color,
    },
  });
  
  
  return(
  <View style={styles.card}>
    <Ionicons name={data.icon} size={30} color={data.iconColor} />
    <Text style={styles.label}>{data.label}</Text>
    <Text style={styles.amount}>KES {data.amount.toLocaleString()}</Text>
  </View>
)};


export default DashBoardLossProfitCard;
