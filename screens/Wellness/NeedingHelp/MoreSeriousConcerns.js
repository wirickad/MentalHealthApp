import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const MoreSeriousConcerns = () => {
  const linkOptions = [
    {
      key: "MS1",
      title: "Do you have desires to harm yourself or someone else?",
      link: "",
    },
    {
      key: "MS2",
      title: "Are you having difficulty getting out of bed?",
      link: "",
    },
    {
      key: "MS3",
      title:
        "Have you purposely been withholding yourself from food or other neccessities?",
      link: "",
    },
    {
      key: "MS4",
      title: "Are you having difficulty avoiding pornographic materials?",
      link: "",
    },
    {
      key: "MS5",
      title:
        "Do you feel like you are in physical or emotional harm in your community or home?",
      link: "",
    },
    // {
    //   key: "",
    //   title: "",
    //   link: "",
    // },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>More Serious Concerns</Text>
        <Text style={styles.text}>
          Click on the question that will help you the most. This will lead you
          to resources to help.
        </Text>
        {linkOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            // styles={styles.option}
            onPress={() => {
              Linking.openURL(option.link);
            }}
            // onPress={handleViewResource(option)}
          >
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Align to the top
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgb(165, 70, 85)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: 45,
    fontFamily: "Helvetica", // Set text font to Helvetica
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    display: "flex",
    fontSize: 25,
    fontFamily: "Helvetica", // Set text font to Helvetica
  },
  optionText: {
    display: "flex",
    justifyContent: "center",
    fontSize: 27,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 15, // Space between image and text
    border: "1px solid black",
    backgroundColor: "white",
    // paddingLeft: "40px",
    // paddingRight: "40px",
    width: "60rem",
    margin: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: 10,
  },
});

export default MoreSeriousConcerns;
