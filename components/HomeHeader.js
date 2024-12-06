import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserData from '../utils/UserData';
import { ThemeContext } from '../theme/ThemeContext';

const HomeHeader = () => {
  const theme = useContext(ThemeContext);
  const randomUser = UserData[Math.floor(Math.random() * UserData.length)];
  const screenWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    userContainer: {
      flexDirection: 'column',
      alignItems: 'start',
      marginLeft:10,
      backgroundColor: theme.colors.background,
    },
    userImage: {
      width: screenWidth * 0.18, 
      height: screenWidth * 0.18, 
      borderRadius: (screenWidth * 0.18) / 2, 
      marginRight: 12,
      marginLeft: 8,
      resizeMode: 'cover', 
    },
    welcomeText: {
      color: theme.colors.color,
      fontSize: 16,
    },
    userName: {
      color: theme.colors.color,
      fontSize: 20,
      fontWeight: "bold",
    },
    priority: {
      color: "#FFD700", 
      marginTop: 4,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <View style={styles.userContainer}>
      <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.userName}>{randomUser.name}</Text>
        <Text style={styles.priority}>Priority</Text>
      </View>

      <Image source={randomUser.image} style={styles.userImage} />
  
    </View>
  );
};

export default HomeHeader;

