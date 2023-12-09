import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const GeneralConcerns = () => {
  //   const [hoveredOption, setHoveredOption] = useState(null);
  const { width } = useWindowDimensions();

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
            key={option.key}
            onPress={() => {
              Linking.openURL(option.link);
            }}
            // onPressIn={() => setHoveredOption(option.key)}
            // onPressOut={() => setHoveredOption(null)}
          >
            <Text
              style={[
                width >= 450
                  ? styles.optionText
                  : // : width < 1600 && width >= 1100
                    // ? styles.midOuterDiv
                    styles.optionTextMobile,
                // hoveredOption === option.key ? styles.optionTextHover : null,
              ]}
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
    backgroundColor: "rgb(125, 179, 122)",
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
  // optionTextHover: {
  //   backgroundColor: "grey",
  // },
});

export default GeneralConcerns;
