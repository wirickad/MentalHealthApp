// User.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InnerNavMenu from "../components/InnerNavMenu";

const User = () => {
  const navOptions = ["My Profile", "My Contacts", "Messages"];
  const handlePressLink = (link) => {
    // Handle link press (you can navigate or perform other actions)
    console.log(`Pressed: ${link}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User</Text>
      <InnerNavMenu
        links={navOptions}
        onPressLink={handlePressLink}
      ></InnerNavMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default User;
