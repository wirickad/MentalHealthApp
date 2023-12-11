import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, FlatList } from 'react-native';

const AlertContacts = () => {
  const initialContact = { name: '', phone: '', email: '', relationship: '' };
  const [contact, setContact] = useState(initialContact);
  const [existingContacts, setExistingContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  const saveContact = () => {
    if (editingIndex !== null) {
      // Editing existing contact
      const updatedContacts = [...existingContacts];
      updatedContacts[editingIndex] = contact;
      setExistingContacts(updatedContacts);
      setEditingIndex(null);
    } else {
      // Adding new contact
      setExistingContacts([...existingContacts, contact]);
    }

    Alert.alert("Contact Saved", "Your contact information has been saved.");
    setContact(initialContact);
  };

  const editContact = (index) => {
    const contactToEdit = existingContacts[index];
    setContact(contactToEdit);
    setEditingIndex(index);
  };

  return (
    <View style={styles.container}>
      {existingContacts.length > 0 ? (
        <View style={styles.existingContactsContainer}>
          <Text style={styles.sectionTitle}>Existing Contacts</Text>
          <FlatList
            data={existingContacts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.existingContactItem}>
                <Text>Name: {item.name}</Text>
                <Text>Phone: {item.phone}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Relationship: {item.relationship}</Text>
                <Button title="Edit" onPress={() => editContact(index)} />
              </View>
            )}
          />
        </View>
      ) : (
        <Text style={styles.noContactsText}>No existing contacts</Text>
      )}

      <View style={styles.newContactContainer}>
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
          title={editingIndex !== null ? 'Save Changes' : 'Save Contact'}
          onPress={saveContact}
        />
      </View>
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
  existingContactsContainer: {
    marginBottom: 20,
    width: '100%',
  },
  existingContactItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noContactsText: {
    marginBottom: 20,
    fontSize: 16,
    color: '#777',
  },
  newContactContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default AlertContacts;