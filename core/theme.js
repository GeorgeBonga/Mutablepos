import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light:{
      theme:"light",
      color:"#121212",
      minorcolor:"#3331",
      background:"#ffffff",
      majorcolor: "#373A40",
  },
  dark:{
      theme:"dark",
      color:"#ffffff",
      minorcolor:"#3336",
      background:"#121212",
      majorcolor: "#f7f7fb",
      // #3333
  },

    // Background Colors
    background: '#FF9c1d', // Soft orange tint for overall app background
    backgroundColor: '#FF9c1d', // Light orange for background
    backgroundHighlightColor: '#FF9c1d', // Deep orange for highlights
    accentBackground: '#FFFFFF', // White for containers and panels

    // Text Colors
    text: '#000000', // General text color
    textColor: '#000000', // Dark gray for text
    textHighlightColor: '#FFFFFF', // White for highlighted texta

    // Primary and Secondary Colors
    primary: '#FF9c1d', // Vibrant orange for primary actions
    secondary: '#FFFF9c1dB74D', // Soft orange for secondary actions

    // Card Colors
    salesCard: '#FF9c1d', // Bright orange-red for Sales
    revenueCard: '#FF9c1d', // Golden orange for Revenue
    inventoryCard: '#FF9c1d', // Yellow-orange for Inventory
    expensesCard: '#FF9c1d', // Red-orange for Expenses
    profitCard: '#FF9c1d', // Rich orange for Profit

    // Miscellaneous Colors
    error: '#FF5252', // Bright red for Errors
  },
};

