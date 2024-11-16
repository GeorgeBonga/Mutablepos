import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from 'react-native-vector-icons';

export default function ScanProduct() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData({ type, data });
  };

  const handleCancel = () => {
    setScanned(false);
    setScannedData(null);
  };

  const handleAddToDB = () => {
    if (scannedData) {
      setProducts((prevProducts) => [...prevProducts, scannedData]);
      setScanned(false);
      setScannedData(null);
      alert("Product added to the database!");
    }
  };

  if (hasPermission === null) {
    return <Text className="text-center mt-5 text-lg">Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text className="text-center mt-5 text-lg">No access to camera</Text>;
  }

  return (
    <View className="flex-1 bg-white justify-top items-center">
      {/* Back Button */}
      {/* <TouchableOpacity onPress={() => setScanned(false)} className="absolute top-5 left-5">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity> */}
      <Text className="text-lg font-bold mt-10">Scan Products</Text>

      {/* Scanner Frame with BarCodeScanner */}
      <View className="w-96 h-96 bg-blue-100 rounded-3xl justify-center items-center overflow-hidden relative mt-2">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: '100%', height: '100%' }}
        />

        {/* Border corners */}
        <View className="absolute w-10 h-10 border-t-2 border-l-2 border-gray-400 rounded-tl-3xl top-0 left-0" />
        <View className="absolute w-10 h-10 border-t-2 border-r-2 border-gray-400 rounded-tr-3xl top-0 right-0" />
        <View className="absolute w-10 h-10 border-b-2 border-l-2 border-gray-400 rounded-bl-3xl bottom-0 left-0" />
        <View className="absolute w-10 h-10 border-b-2 border-r-2 border-gray-400 rounded-br-3xl bottom-0 right-0" />
      </View>

      {/* Scanned Product Description */}
      <View className="mt-8 items-center px-5">
      
        {scannedData ? (
          <>
            <Text className="text-sm text-gray-500  text-center">
              Barcode Type: {scannedData.type}
            </Text>
            <Text className="text-sm text-gray-500 mt-1 text-center">
              Data: {scannedData.data}
            </Text>
          </>
        ) : (
          <Text className="text-sm text-gray-500  text-center">
          
          </Text>
        )}
      </View>

      {/* Action Buttons */}
      {scanned && (
        <View className="mt-8 flex-row space-x-4">
          <TouchableOpacity
            className="bg-gray-400 rounded py-3 px-6 m-2"
            onPress={handleCancel}
          >
            <Text className="text-white text-lg font-semibold">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 rounded py-3 px-6 m-2"
            onPress={handleAddToDB}
          >
            <Text className="text-white text-lg font-semibold">Add to DB</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Scrollable list of Products */}
      <View className="mt-8 px-5 w-full h-60">
        <Text className="text-lg font-semibold">Products in DB:</Text>
        <ScrollView className="mt-2">
          {products.length > 0 ? (
            products.map((product, index) => (
              <View key={index} className="mt-2">
                <Text className="text-sm text-gray-700">Barcode Type: {product.type}</Text>
                <Text className="text-sm text-gray-700">Data: {product.data}</Text>
              </View>
            ))
          ) : (
            <Text className="text-sm text-gray-500">No products added yet</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
