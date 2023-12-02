import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ForMe = ({ navigation }) => {
  const options = [
    {
      key: 'emergency',
      title: 'Emergency',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/warning.png'),
      // onPress: () => {/* Handle navigation or action */}
    },
    {
      key: 'feelingBlue',
      title: 'Feeling Blue',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/blue.png'),
      // onPress: () => {/* Handle navigation or action */}
    },
    {
      key: 'talkToTherapist',
      title: 'Talk to a Therapist',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/therapist.png'),
      // onPress: () => {/* Handle navigation or action */}
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>For Me</Text>
      {options.map(option => (
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
    paddingTop: 50, // Add padding at the top
    backgroundColor: '#759CD3',
  },
  header: {
    fontSize: 24,
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
    backgroundColor: '#EFEFEF', // Example background color
  },
  optionText: {
    fontSize: 18,
    marginTop: 10, // Space between image and text
  },
  image: {
    width: 100, // Example width
    height: 100, // Example height
    resizeMode: 'contain', // Keep image aspect ratio
  },
  // Add more styles as needed
});

export default ForMe;
