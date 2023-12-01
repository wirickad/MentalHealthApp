import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NeedingHelp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is where you go if you need help</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default NeedingHelp;
