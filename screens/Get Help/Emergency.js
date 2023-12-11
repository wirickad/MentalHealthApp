// Emergency.js
import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
// import MainArea from "../../components/";
const Emergency = () => {
  const navOptions = ["For Me", "For My Companion", "Example"];
  // Include the provided snippet here
  const handleReturn = () => {
    // Your logic for handling the Return button press
    console.log("Return button pressed");
  };
  const handleCallButtonPress = () => {
    // Use Linking to open the phone dialer with the emergency number
    Linking.openURL("tel:911").catch((err) =>
      console.error(`Error opening phone dialer: ${err}`)
    );
  };
  return (
    <View style={styles.container}>
      <React.Fragment>
        <Text style={styles.title}>Get Help</Text>
        {/* <MainArea links={navOptions} /> */}
        <View>
          {/* Include the provided snippet here */}
          <Text style={[styles.text, styles.spacing]}>Need Help?</Text>
          <Text onPress={handleCallButtonPress} style={styles.boldText}>
            Call your Mission President
          </Text>
          {/* <View style={styles.twoColumn}> */}
          <Text style={[styles.text, styles.spacing]}>In an emergency?</Text>
          {/* Add a button for calling 911 */}
          <Button title="Call 911" onPress={handleCallButtonPress} />
          {/* </View> */}
        </View>
      </React.Fragment>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  spacing: {
    marginTop: 20,
    marginBottom: 20,
  },
  twoColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
});
export default Emergency;
// In the provided code, when the "Call 911" button is pressed,
// it will open the phone dialer with the number 911 pre-filled, allowing the user to confirm and make the call.
