import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000', // General text color
    primary: '#1E88E5', // Blue for primary actions
    secondary: '#414757', // Dark gray for secondary actions
    salesCard: '#4CAF50', // Green for Sales
    revenueCard: '#1E88E5', // Blue for Revenue
    inventoryCard: '#FFC107', // Amber for Inventory
    expensesCard: '#F44336', // Red for Expenses
    profitCard: '#8E24AA', // Purple for Profit
    error: '#f13a59', // Error color
    background: '#F5F5F5', // Light Gray for overall app background
    accentBackground: '#FFFFFF', // White for containers and panels
  },
}
