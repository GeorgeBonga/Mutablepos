import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Dimensions,
  View,
  Button,
  StyleSheet,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import { Canvas, DiffRect, rrect, rect } from "@shopify/react-native-skia";
import Icon from "react-native-vector-icons/Ionicons";
import { Animated } from "react-native";

// Get window dimensions
const { width, height } = Dimensions.get("window");

// Overlay style and dimensions
const innerDimension = 300;
const outer = rrect(rect(0, 0, width, height), 0, 0);
const inner = rrect(
  rect(
    width / 2 - innerDimension / 2,
    height / 2 - innerDimension / 2,
    innerDimension,
    innerDimension
  ),
  50,
  50
);

export default function ScanProduct() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const qrLock = useRef(false);
  const [refreshing, setRefreshing] = useState(false); // for the refresh animation
  const spinValue = useRef(new Animated.Value(0)).current; // for the spin animation


  
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);

  // Handle barcode scan
  const handleBarcodeScanned = ({ type, data }) => {
    if (data && !qrLock.current) {
      qrLock.current = true;
      console.log("Scanned Data:", data); // Log the scanned data to the console
      setScanned(true);
      alert(`Scanned barcode with type ${type} and data: ${data}`);

      // Optionally, open the URL if it's a valid link
      setTimeout(async () => {
        await Linking.openURL(data);
      }, 500);
    }
  };

  const reloadCamera = () => {
    setRefreshing(true);
    setScanned(false); // Reset the scanned state to allow rescan

    // Start spinning animation for refresh effect
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Reset spin animation after it's done
    setTimeout(() => {
      spinValue.setValue(0); // Reset the spin to 0
      setRefreshing(false); // Stop refreshing
    }, 500);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      {/* {Platform.OS === "android" && <StatusBar hidden />} */}

      {/* Header Text */}
      <View style={styles.header}>
        <Text style={styles.title}>Scan Products</Text>
      </View>

      {/* Camera View */}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: [
            "qr", // QR Codes
            "pdf417", // PDF417 barcodes
            "upc", // UPC barcodes (Common for retail products)
            "ean13", // EAN-13 barcodes (Common for retail products)
            "ean8", // EAN-8 barcodes
            "code128", // Code128 barcodes
            "code39", // Code39 barcodes
            "itf14", // ITF14 barcodes (common for packaging)
          ],
        }}
      />

      {/* Overlay Canvas */}
      <Canvas
        style={
          Platform.OS === "android"
            ? { flex: 1 }
            : StyleSheet.absoluteFillObject
        }
      >
        <DiffRect inner={inner} outer={outer} color="black" opacity={0.5} />
      </Canvas>

      {/* Reload Icon Button */}

      {/* Button to scan again with rounded borders */}
      {scanned && (
        <View style={styles.reloadButton}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <TouchableOpacity onPress={reloadCamera}>
              <Icon
                name={refreshing ? "reload-circle" : "reload-circle-outline"}
                size={50}
                color="white"
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  reloadButton: {
    position: "absolute",
    bottom: 50,
    left: width / 2 - 25, // Center the reload button
    zIndex: 1, // Ensure the button is on top
    padding: 10,
  },
  scanAgainButton: {
    backgroundColor: "#0E7AFE",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 20,
    left: width / 2 - 100, // Center the button
    zIndex: 1, // Ensure the button is on top
  },
  scanAgainText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
