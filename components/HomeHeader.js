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
      padding: 6,
      backgroundColor: theme.colors.secondary,
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.secondary,
    },
    userImage: {
      width: screenWidth * 0.12, 
      height: screenWidth * 0.12, 
      borderRadius: (screenWidth * 0.12) / 2, // Make it circular
      marginRight: 12,
      marginLeft: 8,
      resizeMode: 'cover', 
    },
    userName: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.color,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <View style={styles.userContainer}>
        <Image source={randomUser.image} style={styles.userImage} />
        <Text style={styles.userName}>{randomUser.name}</Text>
      </View>
      <Ionicons
        style={{ marginRight: 36 }}
        name="notifications-outline"
        size={24}
        color={theme.colors.color}
      />
    </View>
  );
};

export default HomeHeader;
