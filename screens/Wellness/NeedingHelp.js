// NeedingHelp.js
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Alert,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const NeedingHelp = () => {
  const navigation = useNavigation();
  const navOptions = [
    {
      key: "generalConcerns",
      title: "General Concerns",
      // image: require("../../image/dailychecking.png"),
      navigateTo: "General Concerns",
    },
    {
      key: "physicalConcerns",
      title: "Physical Concerns",
      // image: require("../../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "Physical Concerns",
    },
    {
      key: "emotionalConcerns",
      title: "Emotional Concerns",
      // image: require("../../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "Emotional Concerns",
    },
    {
      key: "socialConcerns",
      title: "Social Concerns",
      // image: require("../../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "Social Concerns",
    },
    {
      key: "intellectualConcerns",
      title: "Intellectual Concerns",
      // image: require("../../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "Intellectual Concerns",
    },
    {
      key: "spiritualConcerns",
      title: "Spiritual Concerns",
      // image: require("../../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "Spiritual Concerns",
    },
    {
      key: "moreSeriousConcerns",
      title: "More Serious Concerns",
      // image: require("../../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "More Serious Concerns",
    },
  ];

  const navigateToScreen = (screenName) => {
    // Use the navigation object to navigate to the specified screen
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Needing Help?</Text>
        {navOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.option}
            onPress={() => navigateToScreen(option.navigateTo)} // Use the navigateTo property
          >
            <Text style={styles.optionText}>{option.title}</Text>
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
    backgroundColor: "rgb(255, 215, 70)", // light blue background
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "Helvetica", // Set text font to Helvetica
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
    backgroundColor: "#EFEFEF",
  },
  optionText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 10, // Space between image and text
  },
  // Add more styles as needed
});

export default NeedingHelp;
