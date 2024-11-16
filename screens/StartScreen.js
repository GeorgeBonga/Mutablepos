import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import BackButton from "../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StartScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />

        <Header className="text-lg font-semibold text-gray-600 mb-4">
          Log in to Mutable Tech POS
        </Header>
        <Paragraph>
          The easiest way to start with your amazing application.
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Sign Up
        </Button>
      </Background>
    </SafeAreaView>
  );
}
