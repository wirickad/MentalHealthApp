import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

const NewContact = () => {
  const initialContact = { name: '', phone: '', email: '', relationship: '' };
  const [contact, setContact] = useState(initialContact);

  const handleInputChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  const saveContacts = () => {
    // Here you will later add the logic to save the contact to the database
    Alert.alert("Contact Saved", "Your emergency contact has been saved.");
    console.log('Contact to be saved:', contact);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>New Contact</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('name', value)}
        value={contact.name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('phone', value)}
        value={contact.phone}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('email', value)}
        value={contact.email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('relationship', value)}
        value={contact.relationship}
        placeholder="Relationship"
      />
      <Button
        title="Save Contact"
        onPress={saveContacts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
});

export default NewContact;
