import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomModal from '../../components/CustomModal';

const ForMe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [navigateToMessageSent, setNavigateToMessageSent] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      // Reset modalVisible when component unmounts
      setModalVisible(false);
    };
  }, []);

  useEffect(() => {
    if (!modalVisible && navigateToMessageSent) {
      // Navigate after the modal is closed
      navigation.navigate('MessageSentScreen');
      setNavigateToMessageSent(false); // Reset the navigation trigger
    }
  }, [modalVisible, navigateToMessageSent, navigation]);

  const options = [
    {
      key: "feelingBlue",
      title: "Reach Out When You're Feeling Blue",
      image: require("../../image/blue.png"),
      onPress: () => setModalVisible(true),
    },
    {
      key: "TalkToTherapist",
      title: "Talk to a Therapist",
      image: require("../../image/therapist.png"),
      onPress: () => navigateToScreen("TalkToTherapist"),
    },
  ];

  const navigateToScreen = (screenName) => {
    setModalVisible(false); // Close the modal
    setNavigateToMessageSent(true); // Set the navigation trigger
    // The navigation logic will be handled in the useEffect
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>For Me</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.key}
          style={styles.option}
          onPress={option.onPress}
        >
          <Image source={option.image} style={styles.image} />
          <Text style={styles.optionText}>{option.title}</Text>
        </TouchableOpacity>
      ))}

      <CustomModal
        visible={modalVisible}
        onYesPress={() => {
          setModalVisible(false); // Close the modal
          setNavigateToMessageSent(true); // Set the navigation trigger
        }}
        onNoPress={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#759CD3",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
  },
  optionText: {
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
});

export default ForMe;