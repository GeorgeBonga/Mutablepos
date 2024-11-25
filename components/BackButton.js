import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function BackButton({  }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30 ,
    left: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
})
