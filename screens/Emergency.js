import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Emergency = () => {
  const navigation = useNavigation(); // Get the navigation object
  const navOptions = [
    {
      key: 'forMe',
      text: "For Me",
      backgroundColor: "#EFEFEF", 
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/sister.png'),
      navigateTo: 'ForMe'
    },
    {
      key: 'forCompanion',
      text: "For My Companion",
      backgroundColor: "#EFEFEF", 
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/elders.png'), 
      navigateTo: 'ForMyCompanion'
    },
    // Example option removed as per your request
  ];

  const navigateToScreen = (screenName) => {
    // Use the navigation object to navigate to the specified screen
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get Help</Text>
      {navOptions.map(option => (
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
    paddingTop: 50, // Add padding at the top
    backgroundColor: '#70C1B3',
  },
  header: {
    fontSize: 24,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: '80%', // Set width
    padding: 20,
    borderRadius: 10, // Rounded corners
    marginBottom: 10,
    alignItems: 'center', // Center content
    justifyContent: 'center', // Center content
    
  },
  optionText: {
    fontSize: 18,
    fontFamily: "Helvetica",
    marginTop: 10, // Space between image and text
  },
  image: {
    width: 100, // Example width
    height: 100, // Example height
    resizeMode: 'contain', // Keep image aspect ratio
  },
});

export default Emergency;