import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Settings = () => {
  const navigation = useNavigation();
  const navOptions = [
    {
      key: "newContact",
      text: "Emergency Contact",
      backgroundColor: "#EFEFEF",
      title: "Emergency Contact",
      image: require("../..//image/emergencycontact.png"),
      navigateTo: "NewContact",
    },
  ];

  const navigateToScreen = (screenName) => {
    // Use the navigation object to navigate to the specified screen
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      {navOptions.map((option) => (
        <TouchableOpacity
          key={option.key}
          style={[styles.option, { backgroundColor: option.backgroundColor }]}
          onPress={() => navigateToScreen(option.navigateTo)} // Use the navigateTo property
        >
          <Image source={option.image} style={styles.image} />
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align to the top
    alignItems: "center",
    paddingTop: 20, // Add padding at the top
    backgroundColor: "#DD571C",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "80%", // Set width
    padding: 20,
    borderRadius: 10, // Rounded corners
    marginBottom: 10,
    alignItems: "center", // Center content
    justifyContent: "center", // Center content
    backgroundColor: "#EFEFEF", // Background color
  },
  optionText: {
    fontSize: 18,
    marginTop: 10, // Space between image and text
  },
  image: {
    width: 180, // Example width
    height: 180, // Example height
    resizeMode: "contain", // Keep image aspect ratio
  },
});

export default Settings;
