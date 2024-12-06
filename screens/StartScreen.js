import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import BodyText from "../components/Onboarding/BodyText";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import BackButton from "../components/BackButton";
import { ThemeContext } from "../theme/ThemeContext";

export default function StartScreen({ navigation }) {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
   
   
    },
    welcomeText: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.colors.color,
      marginBottom: 16,
    },
  });
  
  return (
    <SafeAreaView style={styles.container}>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <BodyText style={styles.welcomeText}>
          Welcome to Mutable Tech POS
        </BodyText>
        <Paragraph>
          The easiest way to start with your amazing application.
        </Paragraph>
        <Button
          mode="contained"
          label="Log in"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <Button
          mode="outlined"
          label="Sign up"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </Background>
    </SafeAreaView>
  );
}

