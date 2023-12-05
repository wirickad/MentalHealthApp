import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Emergency = () => {
  const navigation = useNavigation(); // Get the navigation object
  const navOptions = [
    {
      key: "forMe",
      text: "For Me",
      backgroundColor: "#EFEFEF",
      image: require("../image/sister.png"),
      navigateTo: "ForMe",
    },
    {
      key: "forCompanion",
      text: "For My Companion",
      backgroundColor: "#EFEFEF",
      image: require("../image/elders.png"),
      navigateTo: "ForMyCompanion",
    },
    // Example option removed as per your request
  ];

  const navigateToScreen = (screenName) => {
    // Use the navigation object to navigate to the specified screen
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Get Help</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align to the top
    alignItems: "center",
    paddingTop: 20, // Add padding at the top
    backgroundColor: "#BFE27F",
  },
  header: {
    fontSize: 24,
    fontFamily: "Helvetica",
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
  },
  optionText: {
    fontSize: 18,
    fontFamily: "Helvetica",
    marginTop: 10, // Space between image and text
  },
  image: {
    width: 180, // Example width
    height: 180, // Example height
    resizeMode: "contain", // Keep image aspect ratio
  },
});

export default Emergency;
