import React, { useState,useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import BodyText from "../components/Onboarding/BodyText";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { ThemeContext } from "../theme/ThemeContext";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { SafeAreaView } from "react-native-safe-area-context";
import ReactNativeModal from "react-native-modal";
import  Feather  from "react-native-vector-icons/Feather";

export default function RegisterScreen({ navigation }) {
  const theme =useContext(ThemeContext)
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const toggleModal = () => setModalVisible(!isModalVisible);

  const onSignUpPressed = () => {
 
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (nameError || emailError || passwordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    toggleModal(); 
  };

  const onVerifyPressed = () => {
    setIsVerifying(true); 
    setError(""); 

    setTimeout(() => {
      if (verificationCode === "1234") {
        setIsVerified(true); 
        setIsVerifying(false); 
        console.log("Verification code entered:", verificationCode);
        setModalVisible(false); 
      } else {
        // Failure case
        setIsVerifying(false); 
        setError("Invalid code, please try again."); 
      }
    }, 3000); 
  };

  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        navigation.navigate("MainTabNavigator");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVerified, navigation]);

  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      marginTop: 4,
      
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
      justifyContent: "center",
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.colors.primary,
      marginTop: 10,
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
  


  return (
    <SafeAreaView
    
      style={{ flex:1, backgroundColor: theme.colors.surface }}
    >
      <KeyboardAvoidingView
        behavior={"padding"}
        contentContainerStyle={styles.container}
        keyboardVerticalOffset={150}
        style={{ flex: 2 }}
      >
        <Background>
          <BackButton />
          <Logo />
          <BodyText>Create Account</BodyText>
          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />
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
          <Button
            mode="contained"
            label="Sign Up"
            onPress={onSignUpPressed}
            style={{ marginTop: 24 }}
          />
          <View style={styles.row}>
            <Text style={{color: theme.colors.color}}>or continue with :</Text>
          </View>
          <Button
            mode="outlined"
            image={require("../assets/google.png")} 
            label="Google"
            imageStyle={{ width: 25, height: 25 }}
            onPress={onSignUpPressed}
          />

          <View style={styles.row}>
            <Text style={{color: theme.colors.color}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </Background>
      </KeyboardAvoidingView>

      {/* Verification Modal */}
      <ReactNativeModal
        isVisible={isModalVisible && navigation.isFocused()}
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
            <Button
              mode="contained"
              label=" Verify Email"
              onPress={onVerifyPressed}
            />
          )}
        </View>
      </ReactNativeModal>

      {/* Success Modal */}
      <ReactNativeModal
        isVisible={isVerified && navigation.isFocused()} 
        onBackdropPress={() => setIsVerified(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <View style={styles.modalContainer}>
          <View style={styles.successIcon}>
            <Feather name="check" size={40} color="white" />
          </View>
          <Text style={styles.successText}>Email Verified Successfully!</Text>
       
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              animating={true}
              size="large"
              color={theme.colors.primary}
            />
            <Text style={styles.verifyingText}>Redirecting...</Text>
          </View>
        </View>
        
      </ReactNativeModal>
    </SafeAreaView>
  );
}

