import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const IntellectualConcerns = () => {
  const { width } = useWindowDimensions();

  const linkOptions = [
    {
      key: "41A",
      title: "Are you having difficulty learning the language?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-intellectual-demands?lang=eng#title_number1",
    },
    {
      key: "41B",
      title:
        "Are you having difficulty staying organized with goals and plans?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-intellectual-demands?lang=eng#title_number2",
    },
    {
      key: "43C",
      title:
        "Are you having difficulty not feeling as smart or as capable as others?",
      link: "https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life/suggestions-and-tools/resources-for-managing-intellectual-demands?lang=eng#title_number3",
    },
    //   {
    //     key: "",
    //     title: "",
    //     link: "",
    //   },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Intellectual Concerns</Text>
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
            <Text
              style={width >= 450 ? styles.optionText : styles.optionTextMobile}
            >
              {option.title}
            </Text>
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
    backgroundColor: "rgb(0, 155, 155)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 45,
    fontFamily: "Helvetica", // Set text font to Helvetica
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    display: "flex",
    textAlign: "center",
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
    width: "60rem",
    margin: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: 10,
  },
  optionTextMobile: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 27,
    fontFamily: "Helvetica", // Set text font to Helvetica
    marginTop: 15, // Space between image and text
    border: "1px solid black",
    backgroundColor: "white",
    width: "22rem",
    margin: "auto",
    padding: 15,
    borderRadius: 10,
  },
});

export default IntellectualConcerns;
