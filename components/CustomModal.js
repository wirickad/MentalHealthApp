import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomModal = ({ visible, onYesPress, onNoPress }) => {
  const navigation = useNavigation();

  const handleYesPress = () => {
    onYesPress();
    navigation.navigate('MessageSentScreen');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onNoPress}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Do you want to let your loved ones know you are struggling?</Text>
          
          <TouchableOpacity style={styles.button} onPress={handleYesPress}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onNoPress}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white', // Adjust background color for better visibility
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black', // Adjust text color for better visibility
    fontSize: 18, // Adjust font size as needed
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3', // Choose a button color that stands out
    width: 100, // Adjust width as needed
    marginTop: 10, // Add some margin at the top
  },
  buttonText: {
    color: 'white', // Text color that contrasts with the button color
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomModal;