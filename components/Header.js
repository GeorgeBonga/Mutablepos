import React, { useContext } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../theme/ThemeContext';

function Header({ title }) { 
  const navigation = useNavigation();
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 16,
      marginBottom:2,
      backgroundColor:theme.colors.secondary
    },
    title: {
      marginLeft: 40,
      fontSize: 20,
      fontWeight: 'bold',
      color:theme.colors.color
    }
  });
  
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={theme.colors.color} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};


export default Header;
