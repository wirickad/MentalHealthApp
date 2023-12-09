import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const GeneralConcerns = () => {
  const linkOptions = [
    {
      key: "17A",
      title: "Are you having difficulty responding positively to stress?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/general-principles-for-managing-stress?id=title2&lang=eng#title2",
    },
    {
      key: "20B",
      title: 'Are you having difficulty responding to a "stress emergency"?',
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/general-principles-for-managing-stress?id=title3&lang=eng#title3",
    },
    {
      key: "20C",
      title:
        "Are you having difficulty helping other missionaries who are over stressed?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/general-principles-for-managing-stress?id=title4&lang=eng#title4",
    },
    // {
    //   key: "",
    //   title: "",
    //   link: "",
    // },
  ];
  const handleViewResource = (option) => {
    // Check if the app is installed before trying to open it
    Linking.canOpenURL(option.link).then((supported) => {
      if (supported) {
        Linking.openURL(option.link);
      } else {
        console.warn(`App not installed: ${option.link}`);
        // You can provide feedback to the user that the app is not installed
      }
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>General Concerns</Text>
        <Text style={styles.text}>
          Click on the question that will help you the most. This will lead you
          to resources to help.
        </Text>
        {linkOptions.map((option) => (
          <TouchableOpacity
            style={[
              styles.optionText,
              isHovered ? styles.optionTextHover : null,
            ]}
            key={option.key}
            // styles={styles.option}
            onPress={() => {
              Linking.openURL(option.link);
            }}
            // onPress={handleViewResource(option)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
    backgroundColor: "rgb(125, 180, 125)",
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
  optionTextHover: {
    backgroundColor: "grey",
  },
});

export default GeneralConcerns;
