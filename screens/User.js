import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const User = () => {
  const navOptions = [
    {
      key: 'myProfile',
      title: 'My Profile',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/profile.png'), 
      // onPress: () => {/* Handle navigation or action */}
    },
    {
      key: 'myContacts',
      title: 'My Contacts',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/contacts.png'), 
      // onPress: () => {/* Handle navigation or action */}
    },
    {
      key: 'messages',
      title: 'Messages',
      image: require('/Users/kizy/Desktop/Project/MentalHealthApp/image/messages.png'), 
      // onPress: () => {/* Handle navigation or action */}
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User</Text>
      {navOptions.map(option => (
        <TouchableOpacity
          key={option.key}
          style={styles.option}
          onPress={() => console.log(`Pressed: ${option.title}`)} // Replace with actual navigation or action
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
    backgroundColor: '#797a7e', // light yellow background
  },
  text: {
    fontSize: 20,
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

export default User;
