import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { ThemeContext } from '../theme/ThemeContext';

export default function TextInput({ errorText, description, secureTextEntry, ...props }) {
  const theme = useContext(ThemeContext); // Access the theme context
  const [secureText, setSecureText] = useState(secureTextEntry); // Toggle for password visibility

  const styles = StyleSheet.create({
    container: {

      width: '100%',
      marginVertical: 12,
    },
    input: {
      backgroundColor: theme.colors.background, // Background color from theme
    
    },
    description: {
      fontSize: 13,
      color: theme.colors.color, // Description text color from theme
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      color: theme.colors.error, // Error text color from theme
      paddingTop: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholderTextColor={theme.colors.color} // Placeholder text color
        selectionColor={theme.colors.color} // Highlight color for selected text
        underlineColor="transparent" // Removes the underline
        mode="outlined"
        textColor ={theme.colors.color}
        secureTextEntry={secureText} // Toggles text visibility
        outlineColor={theme.colors.color} // Default outline color
        activeOutlineColor={theme.colors.color} // Focused outline color
        right={
          secureTextEntry && (
            <Input.Icon
              icon={secureText ? 'eye-off' : 'eye'}
              color={theme.colors.color} // Icon color
              onPress={() => setSecureText(!secureText)} // Toggle visibility
            />
          )
        }
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}
