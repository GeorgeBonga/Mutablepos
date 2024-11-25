import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import BodyText from "../components/Onboarding/BodyText";
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

        <BodyText className="text-lg font-semibold text-gray-600 mb-4">
          Welcome to Mutable Tech POS
        </BodyText>
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
          mode="contained"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Sign Up
        </Button>
      </Background>
    </SafeAreaView>
  );
}
