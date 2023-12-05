import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Linking } from "react-native";

const AdjustingLife = () => {
  const handleViewResource = () => {
    const appScheme = "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life?lang=eng";

    // Check if the app is installed before trying to open it
    Linking.canOpenURL(appScheme).then((supported) => {
      if (supported) {
        Linking.openURL(appScheme);
      } else {
        console.warn(`App not installed: ${appScheme}`);
        // You can provide feedback to the user that the app is not installed
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adjusting to Missionary Life:</Text>
      <Text style={styles.subText}>
        Life as a missionary is not easy. The Church has provided 
        "Adjusting to Missionary Life" as a resource. What's included in the Gospel Library resource?
      </Text>

      <View style={styles.row}>
        <View style={styles.bulletPoints}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.subText}>Physical Resources</Text>
        </View>
        <View style={styles.bulletPoints}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.subText}>Emotional Resources</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.bulletPoints}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.subText}>Spiritual Resources</Text>
        </View>
        <View style={styles.bulletPoints}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.subText}>Intellectual Resources</Text>
        </View>
        <View style={styles.bulletPoints}>
          <Text style={styles.bullet}>{"\u2022"}</Text>
          <Text style={styles.subText}>Social Resources</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleViewResource} style={styles.button}>
        <Text style={styles.buttonText}>View the Resource</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16, // Adjust the padding as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8, // Add some space between title and subtext
  },
  subText: {
    fontSize: 16,
    color: "gray", // Adjust the color as needed
    textAlign: "center", // Center the text
    marginBottom: 16,
    maxWidth: 600, // Adjust the maximum width as needed
  },
  bulletPoints: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16, // Adjust the margin as needed
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: "black", // Adjust the color as needed
    marginRight: 8, // Adjust the margin as needed
  },
  button: {
    marginTop: 16, // Adjust the margin as needed
    backgroundColor: "tomato", // Adjust the color as needed
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdjustingLife;