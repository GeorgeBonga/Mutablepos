import React,{useContext} from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { ThemeContext } from '../theme/ThemeContext'


export default function Background({ children }) {
  const  theme = useContext(ThemeContext)

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.colors.background,
      
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}


