import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

const AccountSettings = () => {
  const initialAccount = { username: '', email: '', password: '', confirmPassword: '' };
  const [account, setAccount] = useState(initialAccount);

  const handleInputChange = (field, value) => {
    setAccount({ ...account, [field]: value });
  };

  const saveAccountSettings = () => {
    // Here you will later add the logic to save the account settings to the database
    Alert.alert("Account Settings Saved", "Your account settings have been saved.");
    console.log('Account settings to be saved:', account);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Account Settings</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('username', value)}
        value={account.username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('email', value)}
        value={account.email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('password', value)}
        value={account.password}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('confirmPassword', value)}
        value={account.confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <Button
        title="Save Account Settings"
        onPress={saveAccountSettings}
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

export default AccountSettings;