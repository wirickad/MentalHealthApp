import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Wellness = () => {
  const navOptions = [
    {
      key: 'dailyCheckIn',
      title: 'Daily Check-In',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/dailychecking.png'), // Replace with your image path
      // onPress: () => {/* Handle navigation or action */}
    },
    {
      key: 'adjustingToMissionaryLife',
      title: 'Adjusting to Missionary Life',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/adjustmiss.png'), // Replace with your image path
      // onPress: () => {/* Handle navigation or action */}
    },
    {
      key: 'needingHelp',
      title: 'Needing Help',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/help.png'), // Replace with your image path
      // onPress: () => {/* Handle navigation or action */}
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Missionary Wellness</Text>
      {navOptions.map(option => (
        <TouchableOpacity
          key={option.key}
          style={styles.option}
          onPress={option.onPress}
        >
          <Image source={option.image} style={styles.image} />
          <Text style={styles.optionText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
    backgroundColor: '#5cacd4', // light blue background
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "Helvetica", // Set text font to Helvetica
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    width: '80%', // Set width
    padding: 20,
    borderRadius: 10, // Rounded corners
    marginBottom: 10,
    alignItems: 'center', // Center content
    justifyContent: 'center', // Center content
    backgroundColor: '#EFEFEF', 
  },
  optionText: {
    fontSize: 18,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 10, // Space between image and text
  },
  image: {
    width: 100, // Example width
    height: 100, // Example height
    resizeMode: 'contain', // Keep image aspect ratio
  },
  // Add more styles as needed
});

export default Wellness;
