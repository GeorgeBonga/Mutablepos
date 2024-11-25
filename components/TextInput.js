import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

export default function TextInput({ errorText, description, secureTextEntry, ...props }) {
  const [secureText, setSecureText] = useState(secureTextEntry); // Default based on prop

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        secureTextEntry={secureText} // Dynamically controls text visibility
        right={
          secureTextEntry && (
            <Input.Icon
              icon={secureText ? 'eye-off' : 'eye'} // Toggle icons
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
