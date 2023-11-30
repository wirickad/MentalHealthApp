import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainArea from "../components/MainArea";

const Emergency = () => {
  const navOptions = ["For Me", "For My Companion", "Example"];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Help</Text>
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

export default Emergency;
