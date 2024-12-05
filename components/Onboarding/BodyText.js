import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { ThemeContext } from '../../theme/ThemeContext'

export default function BodyText(props) {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create({
    header: {
      fontSize: 21,
      color: theme.colors.color,
      fontWeight: 'bold',
      paddingVertical: 8,
    },
  })
  return <Text style={styles.header} {...props} />
}



