import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import BodyText from "../components/Onboarding/BodyText";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { SafeAreaView } from "react-native-safe-area-context";
import ReactNativeModal from "react-native-modal";
import { Feather } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [isModalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const toggleModal = () => setModalVisible(!isModalVisible);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    toggleModal();
  };

  const onVerifyPressed = () => {
    setIsVerifying(true); // Start showing loader
    setError(""); // Clear any existing error message

    setTimeout(() => {
      if (verificationCode === "1234") {
        setModalVisible(false);
        setIsVerified(true); // Mark as verified
        setIsVerifying(false); // Stop loader
      } else {
        // Failure case
        setIsVerifying(false); // Stop loader
        setError("Invalid code, please try again."); // Show error message
      }
    }, 3000); // Simulated delay
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <Background>
        <BackButton />
        <Logo />
        <BodyText>Welcome back.</BodyText>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.replace("RegisterScreen")}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>

      {/* Verification Modal */}
      <ReactNativeModal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modalContainer}>
          <Feather name="lock" size={40} color={theme.colors.primary} />
          <Text style={styles.modalTitle}>Verification</Text>
          <Text style={styles.modalText}>
            We have sent a verification code to {email.value}.
          </Text>
          <TextInput
            label="Enter Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            style={styles.input}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          {isVerifying ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator
                animating={true}
                size="large"
                color={theme.colors.primary}
              />
              <Text style={styles.verifyingText}>Verifying...</Text>
            </View>
          ) : (
            <Button mode="contained" onPress={onVerifyPressed}>
              Verify Email
            </Button>
          )}
        </View>
      </ReactNativeModal>

      <ReactNativeModal
        isVisible={isVerified && navigation.isFocused()} // Ensure modal only shows on the current screen
        onBackdropPress={() => setIsVerified(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <View style={styles.modalContainer}>
          <View style={styles.successIcon}>
            <Feather name="check" size={40} color="white" />
          </View>
          <Text style={styles.successText}>Email Verified Successfully!</Text>
          <Button
            mode="contained"
            onPress={() => {
              setIsVerified(false);
              navigation.navigate("MainTabNavigator");
            }}
          >
            Continue
          </Button>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 5,
  },
  modalText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  verifyingText: {
    marginTop: 10,
    fontSize: 16,
    color: theme.colors.primary,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 14,
    marginTop: 10,
  },
  successIcon: {
    backgroundColor: "green",
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
});
