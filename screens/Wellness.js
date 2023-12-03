// Wellness.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainArea from "../components/MainArea";

const Wellness = () => {
  const navOptions = [
    "Daily Check-In",
    "Adjusting to Missionary Life",
    "Needing Help",
    "Example",
  ];

  return (
    <View style={styles.container}>
      <MainArea links={navOptions} />
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

export default Wellness;
