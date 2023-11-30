// More.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainArea from "../components/MainArea";

const More = () => {
  const navOptions = ["Settings", "Help"];
  const handlePressLink = (link) => {
    // Handle link press (you can navigate or perform other actions)
    console.log(`Pressed: ${link}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>More</Text>
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

export default More;
