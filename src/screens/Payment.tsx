import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const handlePayment = () => {
    // Handle payment logic
    console.log("Processing payment...");
  };

  const handleScanSuccess = (e) => {
    setScannedData(e.data);
    setScanning(false);
    console.log("QR Code scanned data:", e.data);
    // You can also handle the scanned data as per your needs
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Payment Details</Text>
      {scanning ? (
        <QRCodeScanner
          onRead={handleScanSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              Scan the QR code to pay
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.button} onPress={() => setScanning(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          }
        />
      ) : (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.qrButton]} onPress={() => setScanning(true)}>
            <Text style={styles.buttonText}>Pay with QR Code</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#35C759",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  qrButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
});

export default PaymentScreen;
