import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MessageSentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message Sent</Text>
      <Text style={styles.message}>
        Your loved ones have been notified and will reach out to you soon.
      </Text>
      <Button title="Back to Home" onPress={() => navigation.navigate("Wellness")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default MessageSentScreen;
