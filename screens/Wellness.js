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

const Wellness = () => {
  const navigation = useNavigation(); // Get the navigation object
  const navOptions = [
    {
      key: "dailyCheckIn",
      title: "Daily Check-In",
      image: require("../image/dailychecking.png"),
      navigateTo: "DailyCheckIn",
    },
    {
      key: "adjustingToMissionaryLife",
      title: "Adjusting to Missionary Life",
      image: require("../image/adjustmiss.png"), // Replace with your image path
      navigateTo: "AdjustingLife",
    },
    {
      key: "needingHelp",
      title: "Needing Help",
      image: require("../image/help.png"), // Replace with your image path
      // onPress: () => {/* Handle navigation or action */}
    },
  ];
  const navigateToScreen = (screenName) => {
    // Use the navigation object to navigate to the specified screen
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Missionary Wellness</Text>
        {navOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.option}
            onPress={() => navigateToScreen(option.navigateTo)} // Use the navigateTo property
          >
            <Image source={option.image} style={styles.image} />
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
    backgroundColor: "#5cacd4", // light blue background
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
    fontSize: 18,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 10, // Space between image and text
  },
  image: {
    width: 180, // Example width
    height: 180, // Example height
    resizeMode: "contain", // Keep image aspect ratio
  },
  // Add more styles as needed
});

export default Wellness;
